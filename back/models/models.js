const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Form = sequelize.define('form', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING(20), unique: false},
    startDate: {type: DataTypes.DATE, allowNull: false},
    endDate: {type: DataTypes.DATE, allowNull: false},
    humanAmount: {type: DataTypes.INTEGER, allowNull: false},
    withAnimals: {type: DataTypes.BOOLEAN, allowNull: false},
    payType: {type: DataTypes.STRING, allowNull: false},
    withChildren: {type: DataTypes.BOOLEAN, allowNull: false},
    comment: {type: DataTypes.STRING, allowNull: true}
})


module.exports = {
    Form
}