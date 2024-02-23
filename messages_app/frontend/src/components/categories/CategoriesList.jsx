import { useEffect, useState } from "react"
import { CategoryItem } from "./CategoryItem"
import { AddCategory } from "./AddCategory"
import { addCategory, deleteCategory, getCategories, updateCategoryName } from "../../services/CategoryService" 

export function CategoriesList () {

    const [categories, setCategories] = useState([])
    const [filterValue, setFilterValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getCategories()
            .then(categories => setCategories(categories))
            .finally(() => setIsLoading(false))
    }, [])

    const handleRename = (id, name) => {
        updateCategoryName(id, name)
            .then(({ categoryId }) => {
                setCategories(categories.map(category => {
                    if (category.id === categoryId) {
                        category.name = name
                    }
                    return category
                }))
            })
    }

    const handleDelete = (id) => {
        deleteCategory(id)
            .then(({ categoryId }) => {
                setCategories(categories.filter(category => category.id !== categoryId))
            })
    }

    const handleAdd = (name) => {
        addCategory(name)
            .then((data) => {
                setCategories([
                    ...categories,
                    { id: data.id, name: data.name }
                ])
            })
    }

    const filteredCategories = filterValue ? categories.filter(category => category.name.toLowerCase().includes(filterValue)): categories
    const loader = <span className="loader"></span>
    
    return (
        <div>
            <h1 className="text-2xl my-6">Add category</h1>
            <AddCategory onAdd={handleAdd} />
            <div className="flex flex-row items-baseline gap-6">
                <h1 className="text-2xl my-8">Category list</h1>
                <input 
                    type="text"
                    placeholder="Filter"
                    value={filterValue} 
                    onChange={e => setFilterValue(e.target.value)}
                />
            </div>
            {
                isLoading ? loader : 
                filteredCategories.length === 0 ? <p>No categories found.</p> : 
                <ul className="flex flex-col gap-4">
                    {filteredCategories.map(category => (
                        <li key={category.id}>
                            <CategoryItem 
                                id={category.id} 
                                name={category.name} 
                                onRename={handleRename}
                                onDelete={handleDelete} 
                            />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}