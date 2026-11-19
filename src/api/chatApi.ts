// chatApi.ts
import axiosClient from "./axiosClient"

// The chatbot lives on the Spring Boot service. Panam.API reverse-proxies this
// exact path (/ai) to it via YARP, so from the frontend it looks like any other
// call to our own API (same baseURL, same CORS). The endpoint is a GET that takes
// two query params and returns the answer as PLAIN TEXT (not JSON).
const CHAT_PATH = "/ai"

/**
 * Ask the PANAM product assistant a question.
 *
 * @param conversationId stable id for this chat session. The bot keeps per-id
 *        memory, so reuse the same id for every message in one conversation.
 * @param userInput the visitor's message.
 * @returns the assistant's answer as a plain string.
 */
export const askChatbot = async (conversationId: string, userInput: string): Promise<string> => {
  const { data } = await axiosClient.get<string>(CHAT_PATH, {
    params: { conversationId, userInput },
    // The endpoint returns text/plain; tell axios not to try to JSON-parse it.
    responseType: "text",
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
}

// POSTs to the .NET gate endpoint, which verifies the Turnstile captcha
// server-side and emails the team. Throws on a 400 (captcha failed) / 500.
export const requestAiAccess = async (req: AiAccessRequest): Promise<void> => {
  await axiosClient.post("/api/aiaccess", req)
}
