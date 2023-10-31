export const SERVER_ENDPOINT = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

export const handleResponse = async <T>(response: Response): Promise<T> => {
  const contentType = response.headers.get("Content-Type") || ""
  const isJson = contentType.includes("application/json")

  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors))
    }

    throw new Error(data.message || response.statusText)
  }

  return data as T
}
