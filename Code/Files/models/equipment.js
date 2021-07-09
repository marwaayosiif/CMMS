const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Equipment= sequelize.define('Equipment',{
    Name:{
        type: Sequelize.TEXT,
    },
    Ventor: {
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
    
    Department:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    
    location:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    WarrantyPeriod:{
        type:Sequelize.STRING,
        allowNull:true
    },
    brandName:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    OperationDate:{
        type:Sequelize.DATE,
        allowNull:true
    },
    supplyDate:{
        type:Sequelize.DATE,
        allowNull:true
    },
})


module.exports=Equipment;