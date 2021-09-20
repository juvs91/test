const AbstractModel = require('./AbstractModel.js')
const Sequelize = require('sequelize')
const {
  MYSQL_URL_CONNECTION_URL
} = require('../config.js')
console.log(MYSQL_URL_CONNECTION_URL)
const sequelize = new Sequelize(MYSQL_URL_CONNECTION_URL);
const EmployeeMysql = sequelize.define('Employee', {
    // Model attributes are defined here
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    jiraId: {
      type: Sequelize.DataTypes.INTEGER
    },
    firstName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.DataTypes.STRING
      // allowNull defaults to true
    },
    birthdate: {
      type: Sequelize.DataTypes.DATE
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: 'email'
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: true,
    modelName: 'Employee' // We need to choose the model name
  }
);

EmployeeMysql.sync({ alter: true })

module.exports = class EmployeeModel extends AbstractModel{

  constructor() {
    this.employeeMysql = EmployeeMysql
  }

  async get(queryObject){
    return await this.employeeMysql.getAll({where: queryObject})
  }
  async create(_data){
    throw new Error('implement me pls')
  }
  async update(_data){
    throw new Error('implement me pls')
  }
  async delete(_id){
    throw new Error('implement me pls')
  }
}