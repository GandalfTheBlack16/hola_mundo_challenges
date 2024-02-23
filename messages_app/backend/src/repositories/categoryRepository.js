import { Category } from '../db/models/CategoryModel.js'

export async function findCategories() {
    const categories = await Category.findAll()
    return categories
}

export async function createCategory(categoryName) {
    const category = await Category.create({
        name: categoryName
    })
    return category
}

export async function deleteCategoryById (categoryId) {
    const category = await Category.destroy({
        where: {
            id: categoryId
        }
    })
    return category
}

export async function updateCategoryName (categoryId, name) {
    const category = await Category.update({ name }, {
        where: {
            id: categoryId
        }
    })
    return category
}