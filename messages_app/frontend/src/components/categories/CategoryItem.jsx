import { useState, useRef } from 'react'

export function CategoryItem ({ id, name, onRename, onDelete }) {

    const [value, setValue] = useState(name)
    const [isRename, setIsRename ] = useState(false)

    const inputRef = useRef()
    const prevValue = useRef(name)

    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    const handleRename = () => {
        if (!isRename) {
            setIsRename(true)
            inputRef.current.focus()
            inputRef.current.select()
            return
        }
        
        if (value.length < 4) {
            console.warn('Category name must be at least 4 characters long.')
            setValue(prevValue.current)
            setIsRename(false)
            return
        }
        setIsRename(false)
        prevValue.current = value
        onRename(id, value)
    }

    const handleDelete = () => {
        onDelete(id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="inline-flex items-baseline gap-4">
            <input 
                type="text" 
                value={value} 
                onChange={handleValueChange}
                readOnly={!isRename}
                ref={inputRef}
            />
            <button
                onClick={handleRename}
            >{ !isRename ? 'Rename': 'Submit'}</button>
            <button
                onClick={handleDelete}
            >Delete</button>
        </form>
    )
} 