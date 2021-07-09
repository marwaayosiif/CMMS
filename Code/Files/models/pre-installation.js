const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Pre_installation= sequelize.define('Pre_installation',{
    Date: {
    type:Sequelize.DATE,
    allowNull:true
    },
    SerialNO:{
        type: Sequelize.STRING,
        primaryKey:true
    },
    Name:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    Equipment:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    Floor:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Room:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Department:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Pre_installationFormCopiedCheck:{
        
        type:Sequelize.STRING,
        allowNull:true
    },
    SitePowerOutletAvailableCheck:{
        type:Sequelize.STRING,
        allowNull:true
    },
    RequiredToolsAvailableCheck:{
        type:Sequelize.STRING,
        allowNull:true
    },
    RequiredSuppliesAvailableCheck:{
        type:Sequelize.STRING,
        allowNull:true
    },
    SiteCanBeLockedAfterHoursCheck:{
        type:Sequelize.STRING,
        allowNull:true
    },
    LockKeysAssignedToPersonalCheck:{
        type:Sequelize.STRING,
        allowNull:true
    },
    Pre_installationFormCopiedRON:{
        
        type:Sequelize.TEXT,
        allowNull:true
    },
    SitePowerOutletAvailableRON:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    RequiredToolsAvailableRON:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    RequiredSuppliesAvailableRON:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SiteCanBeLockedAfterHoursRON:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    LockKeysAssignedToPersonalRON:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    Pre_installationFormCopiedComment:{
        
        type:Sequelize.TEXT,
        allowNull:true
    },
    SitePowerOutletAvailableComment:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    RequiredToolsAvailableComment:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    RequiredSuppliesAvailableComment:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SiteCanBeLockedAfterHoursComment:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    LockKeysAssignedToPersonalComment:{
        type:Sequelize.TEXT,
        allowNull:true
    },

})


module.exports=Pre_installation;