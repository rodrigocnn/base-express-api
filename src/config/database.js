const Sequelize = require('sequelize')
const connection = new Sequelize ('fidelidade', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports =  {
    host:'localhost',
    dialect: 'mysql',
    database:'fidelidade',
    username: 'root',
    password:'',
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}