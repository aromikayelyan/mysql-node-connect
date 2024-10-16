import Sequelize from "sequelize";

const NAME = ''
const USER = ''
const PASSWORD = ''


const sequelize = new Sequelize(NAME, USER , PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})








export default sequelize