const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=15'

export async function fetchApi() {
  const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error(`Ошибка сервера (${response.status})`)
    }

    return response.json()
}