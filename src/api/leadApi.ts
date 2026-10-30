// leadApi.ts
import axiosClient from "./axiosClient"

const LEADS_PATH = "/api/leads"

// Public input contract for the site lead-capture popup. The API resolves the
// id, consent-text version, source IP and timestamp server-side, so we only send
// what the visitor actually typed (plus the honeypot + the page they were on).
export interface LeadSubmissionDto {
  name: string
  email: string
  phone?: string
  marketingConsent: boolean
  sourcePage?: string
  // Honeypot: hidden in the UI, so real visitors leave it blank. Bots that fill
  // every field populate it, and the API silently drops those submissions.
  website?: string
}

export const submitLead = async (lead: LeadSubmissionDto): Promise<void> => {
  await axiosClient.post(LEADS_PATH, lead)
}
