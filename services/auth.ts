import { handleResponse, SERVER_ENDPOINT } from "."

export const registerUser = async (user: string): Promise<IUserResponse> => {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
  })

  return handleResponse<IUserResponse>(response).then((data) => data)
}

export const loginUser = async (user: string): Promise<string> => {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
  })

  return handleResponse<IUserLoginResponse>(response).then((data) => data.token)
}

export const getUser = async (token?: string): Promise<IUser> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
    method: "GET",
    credentials: "include",
    headers,
  })

  return handleResponse<IUserResponse>(response).then((data) => data.data.user)
}

export const logoutUser = async (): Promise<void> => {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return handleResponse<void>(response)
}
