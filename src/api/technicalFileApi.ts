// technicalFileApi.ts
import axiosClient from "./axiosClient"

const USER_BASE_PATH = "/api/user"

// Mirrors the server enum (STEP = 0, Drawing = 1, Other = 2).
export const TechnicalFileType = {
  STEP: 0,
  Drawing: 1,
  Other: 2,
} as const
export type TechnicalFileType = (typeof TechnicalFileType)[keyof typeof TechnicalFileType]

export interface TechnicalFile {
  id: string
  partNumber: string
  fileType: TechnicalFileType
  fileName: string
  blobUrl: string
  category: string
}

// Public: all technical files for a given category (e.g. "Connectors").
export const getTechnicalFiles = async (category: string): Promise<TechnicalFile[]> => {
  const response = await axiosClient.get<TechnicalFile[]>(`${USER_BASE_PATH}/technical-files`, {
    params: { category },
  })
  return response.data
}
