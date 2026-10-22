// reviewApi.ts
import axiosClient from "./axiosClient"

const USER_BASE_PATH = "/api/user"

export interface ReviewSubmissionDto {
  customerName: string
  email: string
  company?: string
  productPartNumber?: string
  rating: number
  title?: string
  comment: string
}

export interface Review extends ReviewSubmissionDto {
  reviewId: number
  submittedAtUtc: string
}

// Public submission (customer-facing). The API resolves the id + timestamp
// server-side, so we only send what the customer actually typed.
export const submitReview = async (review: ReviewSubmissionDto): Promise<Review> => {
  const response = await axiosClient.post(`${USER_BASE_PATH}/reviews`, review)
  return response.data.review
}
