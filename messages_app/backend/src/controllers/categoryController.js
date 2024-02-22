import { CATEGORIES } from '../data/categories.js'

export function getCategories (req, res) {
    res.json({
        message: 'Categories',
        data: CATEGORIES
    })
}

export function addCategory (req, res) {
    
}