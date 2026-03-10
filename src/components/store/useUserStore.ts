import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
interface UserState {
  id: string
  email: string
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  phoneNumber : string
  isAuthenticated: boolean
}

interface UserActions {
  setUser: (user: Omit<UserState, "isAuthenticated">) => void
  clearUser: () => void
}

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      orders: [],
      phoneNumber: "",
      isAuthenticated: false,

      setUser: (user) => set({ ...user, isAuthenticated: true }),
      clearUser: () =>
        set({
          id: "",
          email: "",
          firstName: "",
          lastName: "",
          companyName: "",
          jobTitle: "",
          phoneNumber: "",
          isAuthenticated: false,
        }),
    }),
    {
      name: "panam-user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)