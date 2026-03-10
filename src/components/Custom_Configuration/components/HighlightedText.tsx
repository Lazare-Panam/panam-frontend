import React from "react";

interface HighlightedTextProps {
  text: string;
  highlight: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const escapedHighlight = String.raw`${highlight}`.replaceAll(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={i}
            style={{
              backgroundColor: "#FFF176", 
              borderRadius: "2px",
              fontWeight: 700,
              padding: "0 2px",
            }}
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

export default HighlightedText;