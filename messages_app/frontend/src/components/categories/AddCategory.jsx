import { useRef } from 'react'

export function AddCategory ({ onAdd }) {

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const categoryName = form.get('category_name')
        if (categoryName.length < 4) {
            console.warn('Category name must be at least 4 characters long.')
            return
        }
        onAdd(categoryName)
        inputRef.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className="inline-flex items-baseline gap-4">
            <input type="text" placeholder="Category name" name="category_name" ref={inputRef}/>
            <button>Add category</button>
        </form>
    )
}