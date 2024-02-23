const API_BASE_URL = 'http://localhost:3000/api/categories'

export async function getCategories () {
    const response = await fetch(`${API_BASE_URL}`)
    const { message, data } = await response.json()
    if (!response.ok) {
        throw new Error('Could not fetch categories')
    }
    console.log('Server response:', message)
    return data
}

export async function addCategory(name) {
    const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify({
            name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const { message, data } = await response.json()
    if (!response.ok) {
        throw new Error('Could not add new category')
    }
    console.log('Server response:', message)
    return data
}

export async function deleteCategory(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    const { message, data } = await response.json()
    if (!response.ok) {
        throw new Error('Could not add new category')
    }
    console.log('Server response:', message)
    return data
}

export async function updateCategoryName(id, name) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const { message, data } = await response.json()
    if (!response.ok) {
        throw new Error('Could not add new category')
    }
    console.log('Server response:', message)
    return data
}