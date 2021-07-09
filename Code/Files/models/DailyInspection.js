const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const DailyInspection = sequelize.define('DailyInspection',{
    SerailNo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Location: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    Department: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    Authorized_Operator: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    ForeignSubstances1: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances2: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances3: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances4: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances5: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances6: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    ForeignSubstances7: {
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks1:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks2:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks3:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks4:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks5:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks6:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamageOrCracks7:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BrokenOrLooseBattery7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery1:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery2:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    DamagedORLeakingBattery3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    DamagedORLeakingBattery7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpareBatteryAvailable7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    CableDamage7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    selfTestMessage7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    SpeakerBeep7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    TwoFullyChargedBatteries7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator1:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator2:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator3:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator4:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator5:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator6:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    serviceIndicator7:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    BeginDate:{
        type:Sequelize.DATE,
        allowNull:true
    },
    EndDate:{
        type:Sequelize.DATE,
        allowNull:true
    },

})


module.exports=DailyInspection;