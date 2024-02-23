import { DataTypes } from 'sequelize'
import { sequelize } from "../config.js";

export const Category = sequelize.define('CATEGORY', {
    name: DataTypes.STRING
})

await sequelize.sync()