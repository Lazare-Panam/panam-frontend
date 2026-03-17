import { useState } from "react";
import { convertCode } from "../../../api/authApi";

const CODE_MAP: Record<string, string> = {
  BU: "union",
  NV: "hp-series-needle-valves",
  TC: "adaptor-cap-others",
};

export const useAiSearch = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const getMappedIdFromRawCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (!clean.startsWith("P") || !clean.includes("-")) return null;
    try {
      const extracted = clean.split("P")[1].split("-")[0];
      return CODE_MAP[extracted] || null;
    } catch {
      return null;
    }
  };

  const handleSearchSubmit = async (query: string) => {
    const cleanQuery = query.trim();

    if (cleanQuery.toUpperCase().startsWith("P")) {
      const directId = getMappedIdFromRawCode(cleanQuery);
      if (directId) return { type: 'DIRECT', id: directId };
    }

    // 2. Call AI API for conversion
    setSearchLoading(true);
    setIsResultModalOpen(true);
    try {
      const data = await convertCode(cleanQuery);
      setSearchResult(data.panamCode);
      return { type: 'AI_MATCH', panamCode: data.panamCode };
    } catch (error) {
      setSearchResult(null);
      return { type: 'ERROR' };
    } finally {
      setSearchLoading(false);
    }
  };

  return {
    searchLoading,
    searchResult,
    isResultModalOpen,
    setIsResultModalOpen,
    handleSearchSubmit,
    getMappedIdFromRawCode,
    setSearchResult
  };
};