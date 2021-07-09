const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');

const spareParts= sequelize.define('spareParts',{
    PartNumber:{
        type: Sequelize.STRING,
    },
    Name:{
        type: Sequelize.TEXT,
    },
    Category: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    UnitCost: {
        type:Sequelize.INTEGER,
        allowNull:true
    },
    Vendor:{
        type: Sequelize.STRING,
        allowNull:true
    },
    Department:{
        type: Sequelize.STRING,
        allowNull:true
    },
    Quantity:{
        type: Sequelize.INTEGER,
        allowNull:true
    }
})


module.exports=spareParts;