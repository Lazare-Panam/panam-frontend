// chatApi.ts
import axiosClient from "./axiosClient"

// The chatbot lives on the Spring Boot service. Panam.API reverse-proxies this
// path (/ai/chat) to it via YARP, so from the frontend it looks like any other
// call to our own API (same baseURL, same CORS). It's a POST with a JSON body
// and returns JSON: { conversationId, answer }.
const CHAT_PATH = "/ai/chat"

// The server OWNS the conversation id: omit it on the first message and the
// backend creates one; send that same id back on every following message so the
// bot keeps the conversation's memory.
export interface ChatAnswer {
  conversationId: string
  answer: string
}

/**
 * Ask the PANAM product assistant a question.
 *
 * @param message the visitor's question.
 * @param conversationId the id returned by a previous call, or null for the
 *        first message of a new conversation.
 * @returns { conversationId, answer } — keep the conversationId for the next call.
 */
export const askChatbot = async (message: string, conversationId: string | null): Promise<ChatAnswer> => {
  const { data } = await axiosClient.post<ChatAnswer>(CHAT_PATH, {
    message,
    conversationId: conversationId ?? null,
  })
  return data
}

// The details a visitor submits once they hit the free-message limit, so we can
// unlock the chat and email the team. Name + phone + captcha are required by the
// API; the rest is optional. 'website' is a honeypot — leave it blank.
export interface AiAccessRequest {
  name: string
  phone: string
  email?: string
  project?: string
  captchaToken: string
  sourcePage?: string
  website?: string
  // The chat this visitor had before hitting the limit, so the team's lead email
  // can include the transcript. Omit when there is no conversation yet.
  conversationId?: string
}

// POSTs to the .NET gate endpoint, which verifies the Turnstile captcha
// server-side and emails the team. Throws on a 400 (captcha failed) / 500.
export const requestAiAccess = async (req: AiAccessRequest): Promise<void> => {
  await axiosClient.post("/api/aiaccess", req)
}
