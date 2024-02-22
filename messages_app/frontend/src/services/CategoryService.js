const API_BASE_URL = 'http://localhost:3000/api'

export async function getCategories () {
    const response = await fetch(`${API_BASE_URL}/categories`)
    const { message, data } = await response.json()
    if (!response.ok) {
        throw new Error('Could not fetch categories')
    }
    console.log('Fetched', message)
    return data
}
