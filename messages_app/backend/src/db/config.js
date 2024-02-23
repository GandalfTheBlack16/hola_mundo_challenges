import { Sequelize } from 'sequelize'

const DB_URL = 'localhost:3306'
const DB_NAME = 'messages_app'
const USERNAME = 'root'
const PASSWORD = 'example'

export const sequelize = new Sequelize(`mysql:${DB_URL}`, {
    database: DB_NAME,
    username: USERNAME,
    password: PASSWORD
})
