const Sequelize = require('sequelize');
const sequelize = require('../util/db.js');


const preventive = sequelize.define('preventive', {

    Department: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    PartsName: {
        type: Sequelize.TEXT,
    },
    Vendor: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Model: {

    type:Sequelize.STRING,
    allowNull:true
    },
    SerialNO:{
        type: Sequelize.STRING,
        primaryKey:true
    },
    
   
    WarrantyPeriod:{
        type:Sequelize.STRING,
        allowNull:true
    },
  
    Operation:{
        type:Sequelize.STRING,
        allowNull:true
    },
    frequancy:{
        type:Sequelize.STRING,
        allowNull:true
    },
    process:{
        type:Sequelize.STRING,
        allowNull:true
    },
    DayesOfMaintainance:{
        type:Sequelize.STRING,
        allowNull:true

    },
    SerialNO: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    WarrantyPeriod: {
        type: Sequelize.STRING,
        allowNull: true
    },

    Operation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    scheduleDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    frequancy: {
        type: Sequelize.STRING,
        allowNull: true
    },
    process: {
        type: Sequelize.STRING,
        allowNull: true
    },
    DayesOfMaintainance: {
        type: Sequelize.STRING,
        allowNull: true
    },
})


module.exports = preventive;