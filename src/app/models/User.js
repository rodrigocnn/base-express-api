const Sequelize = require('sequelize')
const { Model} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING

        },{
            sequelize
        })
    }
}

module.exports = User