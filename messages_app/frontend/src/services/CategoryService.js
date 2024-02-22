const CATEGORIES = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' }
]

export function getCategories () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(CATEGORIES)
        }, 1000)
    })
}

export function addCategory (name) {
    
}