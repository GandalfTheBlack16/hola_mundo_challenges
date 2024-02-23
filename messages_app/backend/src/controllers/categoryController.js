import { findCategories, createCategory, deleteCategoryById, updateCategoryName } from '../repositories/categoryRepository.js'

export async function getCategories (req, res) {
    const categories = await findCategories()
    res.json({
        message: 'Categories',
        data: categories
    })
}

export async function addCategory (req, res) {
    const { name } = req.body
    const category = await createCategory(name)
    res.status(201).json({
        message: 'Category created',
        data: category
    })
}

export async function deleteCategory (req, res) {
    const { id } = req.params
    await deleteCategoryById(id)
    res.json({
        message: 'Category deleted',
        data: {
            categoryId: +id
        }
    })
}

export async function updateCategory (req, res) {
    const { id } = req.params
    const { name } = req.body
    const category = await updateCategoryName(id, name)
    res.json({
        message: 'Category updated',
        data: {
            categoryId: +id
        }
    })
}