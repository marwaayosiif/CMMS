const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Enigneers= sequelize.define('Enigneers',{
    FName:{
        type: Sequelize.TEXT,
    },
    LName:{
        type: Sequelize.TEXT,
    },
    Department: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    Salary: {
        type:Sequelize.INTEGER,
        allowNull:true
        },
    Email:{
        type: Sequelize.STRING,
        primaryKey:true
    },
    Id:{
        type:Sequelize.STRING,
        allowNull:false
    },

   
})


module.exports=Enigneers;