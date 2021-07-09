const DirName = require('../util/path')
const path = require('path')
const bcrypt = require('bcryptjs')
const Pre_installation = require('../models/pre-installation')
const WorksOrders = require('../models/worksOrders')
const Engineers = require('../models/engineers')
const Equipment = require('../models/equipment')
const spareParts = require('../models/spareParts')
const DailyInspection = require('../models/DailyInspection')
const preventive = require('../models/preventive');
exports.showWorkOrdeForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_workorder.html'));
}
exports.showEqform = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_equipment.html'));
}
exports.showPreinstallationform = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_preinstallation.html'));
}
exports.ShowEditEngForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_engineer.html'));
}
exports.viewTechForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_technician.html'));
}
exports.managementSystem = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'management.html'));
}
exports.showLogin = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'login.html'));
}
exports.mainRoute = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'index.html'));
}
exports.showEditEng = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'edit_engineer.html'));
}

exports.pre_installationform = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_preinstallation.html'));
}
exports.showDailyInspectionForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_dailyinspection.html'));
}
exports.showInventoryListingForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_inventorylisting.html'));
}

exports.ShowEditTech = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'edit_technician.html'));
}
exports.showEditEq = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'edit_equipment.html'));
}
exports.showPreventiveMaintainanceForm = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'add_preventive.html'));
}
exports.getPreventiveMaintainanceData = (req, res, next) => {
    const preventive_maintance = new preventive({
        Department: req.body.department,
        PartsName: req.body.name,
        Vendor: req.body.vendor,
        SerialNO: req.body.serial,
        WarrantyPeriod: req.body.warranty,
        Operation: req.body.operation,
        scheduleDate: req.body.date,
        frequancy: req.body.freq,
        Model:req.body.model
    });

    Equipment.findOne({ where: { SerialNO: preventive_maintance.SerialNO, Department: preventive_maintance.Department, Ventor: preventive_maintance.Vendor } }).then(prev => {
        if (!prev) {
            res.redirect('/showPreventiveMaintainanceFormERROR')
        } else {
            preventive_maintance.save().then(res.redirect('/showPreventiveMaintainanceForm'))

        }

    })
}
exports.showPreventiveMaintainanceFormERROR = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'error', 'add_preventiveER.html'));
}

exports.showPreinstallationOutPatientData = (req, res, next) => {
    const Department = 'OutPatient'
    Pre_installation.findAll({ where: { Department: Department } }).then(prev => {
        res.render('OutPatientPre_installation', { newform: prev, layout: false })
    })
}
exports.OutPatientPreinstallationReport = (req, res, next) => {
    const Id = req.params.id;

    Pre_installation.findOne({ where: {SerialNO:Id} }).then(prev => {
        res.render('OutPatientPreinstallReport', {newform: prev, layout: false })
    });
}
exports.showPreventiveMaintainanceOutPatient = (req, res, next) => {
    const Department = 'OutPatient'
    preventive.findAll({ where: { Department: Department } }).then(prev => {
        res.render('OutPatientPreventiveMaintance', { newform: prev, layout: false })
    })
}
exports.OutPatientPMReport = (req, res, next) => {
    const Id = req.params.id;
    preventive.findOne({ where: { SerialNO: Id } }).then(prev => {
        res.render('OutPatientPMReport', { newform: prev, layout: false })
    })
}

exports.showPreventiveMaintainanceCCU = (req, res, next) => {
    const Department = 'CCU'
    preventive.findAll({ where: { Department: Department } }).then(prev => {
        res.render('CCUPreventiveMaintance', { newform: prev, layout: false })
    })
}
exports.CCUPMReport = (req, res, next) => {
    const Id = req.params.id;
    preventive.findOne({ where: { SerialNO: Id } }).then(prev => {
        res.render('CCUPMReport', { newform: prev, layout: false })
    })
}
exports.showPreventiveMaintainanceOR = (req, res, next) => {
    const Department = 'OR'
    preventive.findAll({ where: { Department: Department } }).then(prev => {
        res.render('ORPreventiveMaintance', { newform: prev, layout: false })
    })
}

exports.ORPMReport = (req, res, next) => {
    const Id = req.params.id;
    preventive.findOne({ where: { SerialNO: Id } }).then(prev => {
        res.render('ORPMReport', { newform: prev, layout: false })
    })
}

exports.OutPatientPreventiveMaintainanceReport = (req, res, next) => {
        const Id = req.params.id;
        Pre_installation.findOne({ where: { SerialNO: Id } }).then(prev => {
            res.render('OutPatientPreinstallReport', { newform: prev, layout: false })
        })
    }
    // exports.OutPatientPMReport = (req, res, next) => {
    //     const Id = req.params.id;
    //     preventive.findOne({ where: {SerialNO:Id} }).then(prev => {
    //         res.render('OutPatientPMReport', {newform: prev, layout: false })
    //     })
    // }

exports.showPreinstallationORData = (req, res, next) => {
    const Department = 'OR'
    Pre_installation.findAll({ where: { Department: Department } }).then(prev => {
        res.render('ORPre_installation', { newform: prev, layout: false })
    })
}
exports.ORPreinstallationReport = (req, res, next) => {
    const Id = req.params.id;
    Pre_installation.findOne({ where: { SerialNO: Id } }).then(prev => {
        res.render('ORPreinstallReport', { newform: prev, layout: false })
    })
}

exports.showPreinstallationCCUData = (req, res, next) => {
    Department = 'CCU'
    Pre_installation.findAll({ where: { Department: Department } }).then(prev => {
        res.render('CCUPre_installation', { newform: prev, layout: false })
    })
}
exports.CCUPreinstallationReport = (req, res, next) => {
    const Id = req.params.id;
    Pre_installation.findOne({ where: { SerialNO: Id } }).then(prev => {
        res.render('CCUPreinstallReport', { newform: prev, id: Id, layout: false })
    })
}

exports.showDailyInspectionOutPatientData = (req, res, next) => {
    const Department = 'OutPatient'
    DailyInspection.findAll({ where: { Department: Department } }).then(prev => {
        res.render('OutPatientDailyInspection', { daily: prev, layout: false })
    })
}
exports.OutPatientDailyInspectionReport = (req, res, next) => {
    const Id = req.params.id;
    DailyInspection.findOne({ where: { SerailNo: Id } }).then(prev => {
        res.render('OutPatientInspectionReport', { newform: prev, layout: false })
    })
}

exports.showDailyInspectionCCUData = (req, res, next) => {
    Department = 'CCU'
    DailyInspection.findAll({ where: { Department: Department } }).then(prev => {
        res.render('CCUDailyInspection', { daily: prev, layout: false })
    })
}

exports.CCUDailyInspectionReport = (req, res, next) => {
    const Id = req.params.id;
    DailyInspection.findOne({ where: { SerailNo: Id } }).then(prev => {
        res.render('CCUInspectionReport', { newform: prev, layout: false })
    })
}

exports.showDailyInspectionORData = (req, res, next) => {
    Department = 'OR'
    DailyInspection.findAll({ where: { Department: Department } }).then(prev => {
        res.render('ORDailyInspection', { daily: prev, layout: false })
    })
}
exports.ORDailyInspectionReport = (req, res, next) => {
    const Id = req.params.id;
    DailyInspection.findOne({ where: { SerailNo: Id } }).then(prev => {
        res.render('ORInspectionReport', { newform: prev, layout: false })
    })
}


exports.showInventoryListingOutPatientData = (req, res, next) => {
    Department = 'OutPatient'
    spareParts.findAll({ where: { Department: Department } }).then(prev => {
        res.render('OutPatientInventorylisting', { inventory: prev, layout: false })
    })
}
exports.showInventoryListingORData = (req, res, next) => {
    Department = 'OR'
    spareParts.findAll({ where: { Department: Department } }).then(prev => {
        res.render('ORInventorylisting', { inventory: prev, layout: false })
    })
}
exports.showInventoryListingCCUData = (req, res, next) => {
    Department = 'CCU'
        // const Id = req.params.id;
    spareParts.findAll({ where: { Department: Department } }).then(prev => {
        res.render('CCUInventorylisting', { inventory: prev, layout: false })
    })
}




exports.showEng = (req, res, next) => {
    Engineers.findAll().then(viewEng => {
        res.render('engineers', { engineer: viewEng, layout: false })
    });
}
exports.viewTech = (req, res, next) => {
    Technician.findAll().then(viewTech => {
        res.render('technicians', { tech: viewTech, layout: false })
    });
}
exports.showWorkOrder = (req, res, next) => {
    WorksOrders.findAll().then(viewWO => {
        res.render('workorder', { workorder: viewWO, layout: false })
    });
}
exports.showEq = (req, res, next) => {
    Equipment.findAll().then(viewEq => {
        res.render('equipments', { equip: viewEq, layout: false })
    });
}
exports.showPrevMain = (req, res, next) => {
    let preVenM = "yes"
    Equipment.findAll({ where: { preVenM: preVenM } }).then(prev => {
        console.log(prev.preVenM)
        res.render('preventive_maintance', { pre: prev, layout: false })
    })
}

exports.EditTech = (req, res, next) => {
    const TECH = new Technician({
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        ID: req.body.id,
        SerialNO: req.body.serial,
        CompanyName: req.body.company,
        PhoneNumber: req.body.phone
    });
    Technician.findOne({ where: { ID: TECH.ID } }).then(editTech => {
            TECH.FirstName ? editTech.FName = TECH.FName : null;
            TECH.LastName ? editTech.LastName = TECH.LastName : null;
            TECH.SerialNO ? editTech.SerialNO = TECH.SerialNO : null;
            TECH.CompanyName ? editTech.CompanyName = TECH.CompanyName : null;
            TECH.PhoneNumber ? editTech.PhoneNumber = TECH.PhoneNumber : null;
            TECH.save();
        })
        .then(result => {
            res.redirect('/viewTech')
        })
        .catch(err => res.redirect('/viewTech'))
}

exports.getTechdata = (req, res, next) => {
    const tech = new Technician({
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        ID: req.body.id,
        SerialNO: req.body.serial,
        CompanyName: req.body.company,
        PhoneNumber: req.body.phone
    });
    tech.save().then(
        res.redirect('/viewTechForm')
    )
}
exports.getWorkOrderData = (req, res, next) => {
    const workorder = new WorksOrders({
        nameEq: req.body.equipment,
        disc: req.body.desc,
        model: req.body.model,
        assestType: req.body.assest,
        status: req.body.status,
        serialNO: req.body.serial,
        prioity: req.body.priority,
        Date: req.body.date,
    });
    workorder.save().then(res.redirect('/showWorkOrdersForm'));
}
exports.getEqData = (req, res, next) => {
    const equip = new Equipment({
        Name: req.body.name,
        Ventor: req.body.ventor,
        Model: req.body.model,
        SerialNO: req.body.serial,
        Department: req.body.department,
        location: req.body.location,
        WarrantyPeriod: req.body.warrantyperiod,
        brandName: req.body.brandname,
        OperationDate: req.body.OperationDate,
        supplyDate: req.body.supplyDate,
    });
    Equipment.findOne({ where: { SerialNO: equip.SerialNO } }).then(user => {
        if (!user) {
            equip.save().then(
                res.redirect('/showEqform')
            );
        } else {
            console.log('User is found');
            res.redirect('/showEqform');
        }
    });

}

exports.editEq = (req, res, next) => {
    const equip = new Equipment({
        Name: req.body.name,
        Ventor: req.body.ventor,
        Model: req.body.model,
        SerialNO: req.body.serial,
        Operation: req.body.operation,
        Cost: req.body.cost,
        WarrantyPeriod: req.body.warrantyperiod,
        DueDate: req.body.maintainDate,
        Department: req.body.department,
        preVenM: req.body.preven,
        frequency: req.body.freq
    });
    Equipment.findOne({ where: { SerialNO: equip.SerialNO } }).then(editEq => {
            equip.Name ? editEq.Name = equip.Name : null;
            equip.Ventor ? editEq.Ventor = equip.Ventor : null;
            equip.Operation ? editEq.Operation = equip.Operation : null;
            equip.Cost ? editEq.Cost = equip.Cost : null;
            equip.WarrantyPeriod ? editEq.WarrantyPeriod = equip.WarrantyPeriod : null;
            equip.Model ? editEq.Model = equip.Model : null;
            equip.SerialNO ? editEq.SerialNO = equip.SerialNO : null;
            equip.DueDate ? editEq.DueDate = equip.DueDate : null;
            equip.Department ? editEq.Department = equip.Department : null;
            equip.preVenM ? editEq.preVenM = equip.preVenM : null;
            equip.frequency ? editEq.frequency = equip.frequency : null;
            editEq.save();
        })
        .then(result => {
            res.redirect('/showEditEq')
        })
        .catch(err => res.redirect('/showEditEq'))
}




exports.singUp = (req, res, next) => {

    const engineer = new Engineers({
        FName: req.body.firstname,
        LName: req.body.lastname,
        Department: req.body.department,
        Salary: req.body.salary,
        Email: req.body.email,
        Id: req.body.id
    });

    Engineers.findOne({ where: { Email: engineer.Email } }).then(user => {
        if (!user) {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(engineer.Password, salt, (err, hash) => {
                    engineer.Password = hash;
                    engineer.save().then(savedUser => {
                        console.log("eheldonya");
                        res.redirect('/addEng');
                    });
                });
            });
        } else {
            console.log('User is found');
            res.redirect('/addEng');
        }
    });
}
exports.editEng = (req, res, next) => {
    const EditEngineer = new Engineers({
        FName: req.body.firstname,
        LName: req.body.lastname,
        Department: req.body.department,
        Salary: req.body.salary,
        Email: req.body.email,
        Password: req.body.password
    });
    // console.log(req.body);
    Engineers.findOne({ where: { Email: EditEngineer.Email } }).then(engineer => {
            EditEngineer.FName ? engineer.FName = EditEngineer.FName : null;
            EditEngineer.LName ? engineer.LName = EditEngineer.LName : null;
            EditEngineer.Department ? engineer.Department = EditEngineer.Department : null;
            EditEngineer.Salary ? engineer.Salary = EditEngineer.Salary : null;
            EditEngineer.Email ? engineer.Email = EditEngineer.Email : null;
            EditEngineer.Password ? engineer.Password = EditEngineer.Password : null;
            engineer.save();
        })
        .then(result => {
            res.redirect('showEditEng')
        })
        .catch(err => res.redirect('/showEditEng'))

}
exports.login = (req, res, next) => {
    let Email = req.body.email;
    let Password = req.body.pass;
    if (Email == 'admin@gmail.com' && Password == 0000) {
        res.redirect('/managementSystem');

    }
    else{
        res.sendFile(path.join(DirName, 'views','error', 'loginERROR.html'));


    }
    
}
exports.loginERROR=(res,req,next)=>{
    res.sendFile(path.join(DirName, 'views','error', 'loginERROR.html'));
}
exports.pre_installationformData = (req, res, next) => {
    const newform = new Pre_installation({

        SerialNO: req.body.serial,
        Date: req.body.date,
        Name: req.body.name,
        Equipment: req.body.equipment,
        Floor: req.body.floor,
        Room: req.body.room,
        Department: req.body.department,
        Pre_installationFormCopiedCheck: req.body.preinstallCheck,
        Pre_installationFormCopiedRON: req.body.preinstallRON,
        Pre_installationFormCopiedComment: req.body.preinstallComment,
        SitePowerOutletAvailableCheck: req.body.sitepowerCheck,
        SitePowerOutletAvailableRON: req.body.sitepowerRON,
        SitePowerOutletAvailableComment: req.body.sitepowerComment,
        RequiredToolsAvailableCheck: req.body.requiredtoolCheck,
        RequiredToolsAvailableRON: req.body.requiredtoolRON,
        RequiredToolsAvailableComment: req.body.requiredtoolComment,
        RequiredSuppliesAvailableCheck: req.body.requiredsupllyCheck,
        RequiredSuppliesAvailableRON: req.body.requiredsupplyRON,
        RequiredSuppliesAvailableComment: req.body.requiredsupplyComment,
        SiteCanBeLockedAfterHoursCheck: req.body.sitelockCheck,
        SiteCanBeLockedAfterHoursRON: req.body.sitelockRON,
        SiteCanBeLockedAfterHoursComment: req.body.sitelockComment,
        LockKeysAssignedToPersonalCheck: req.body.lockkeyCheck,
        LockKeysAssignedToPersonalRON: req.body.lockkeyRON,
        LockKeysAssignedToPersonalComment: req.body.lockkeyComment,
    });

    Equipment.findOne({ where: { SerialNO: newform.SerialNO, Department: newform.Department, Name: newform.Equipment } }).then(pre_install => {
        if (!pre_install) {
            res.redirect('/pre_installationformERROR')
        } else {
            newform.save().then(res.redirect('/pre-installationform'))

        }
    })
}

exports.pre_installationformERROR = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'error', 'add_preinstallationER.html'));

}
exports.showDailyInspectionData = (req, res, next) => {
    const daily = new DailyInspection({
        SerailNo: req.body.serial,
        Location: req.body.location,
        Department: req.body.department,
        EndDate: req.body.enddate,
        BeginDate: req.body.begindate,
        Authorized_Operator: req.body.name,
        ForeignSubstances1: req.body.ForeignSubstances1,
        ForeignSubstances2: req.body.ForeignSubstances2,
        ForeignSubstances3: req.body.ForeignSubstances3,
        ForeignSubstances4: req.body.ForeignSubstances4,
        ForeignSubstances5: req.body.ForeignSubstances5,
        ForeignSubstances6: req.body.ForeignSubstances6,
        ForeignSubstances7: req.body.ForeignSubstances7,
        DamageOrCracks1: req.body.DamageOrCracks1,
        DamageOrCracks2: req.body.DamageOrCracks2,
        DamageOrCracks3: req.body.DamageOrCracks3,
        DamageOrCracks4: req.body.DamageOrCracks4,
        DamageOrCracks5: req.body.DamageOrCracks5,
        DamageOrCracks6: req.body.DamageOrCracks6,
        DamageOrCracks7: req.body.DamageOrCracks7,
        BrokenOrLooseBattery1: req.body.BrokenOrLooseBattery1,
        BrokenOrLooseBattery2: req.body.BrokenOrLooseBattery2,
        BrokenOrLooseBattery3: req.body.BrokenOrLooseBattery3,
        BrokenOrLooseBattery4: req.body.BrokenOrLooseBattery4,
        BrokenOrLooseBattery5: req.body.BrokenOrLooseBattery5,
        BrokenOrLooseBattery6: req.body.BrokenOrLooseBattery6,
        BrokenOrLooseBattery7: req.body.BrokenOrLooseBattery7,
        DamagedORLeakingBattery1: req.body.DamagedORLeakingBattery1,
        DamagedORLeakingBattery2: req.body.DamagedORLeakingBattery2,
        DamagedORLeakingBattery3: req.body.DamagedORLeakingBattery3,
        DamagedORLeakingBattery4: req.body.DamagedORLeakingBattery4,
        DamagedORLeakingBattery5: req.body.DamagedORLeakingBattery5,
        DamagedORLeakingBattery6: req.body.DamagedORLeakingBattery6,
        DamagedORLeakingBattery7: req.body.DamagedORLeakingBattery7,
        SpareBatteryAvailable1: req.body.SpareBatteryAvailable1,
        SpareBatteryAvailable2: req.body.SpareBatteryAvailable2,
        SpareBatteryAvailable3: req.body.SpareBatteryAvailable3,
        SpareBatteryAvailable4: req.body.SpareBatteryAvailable4,
        SpareBatteryAvailable5: req.body.SpareBatteryAvailable5,
        SpareBatteryAvailable6: req.body.SpareBatteryAvailable6,
        SpareBatteryAvailable7: req.body.SpareBatteryAvailable7,
        CableDamage1: req.body.CableDamage1,
        CableDamage2: req.body.CableDamage2,
        CableDamage3: req.body.CableDamage3,
        CableDamage4: req.body.CableDamage4,
        CableDamage5: req.body.CableDamage5,
        CableDamage6: req.body.CableDamage6,
        CableDamage7: req.body.CableDamage7,
        selfTestMessage1: req.body.selfTestMessage1,
        selfTestMessage2: req.body.selfTestMessage2,
        selfTestMessage3: req.body.selfTestMessage3,
        selfTestMessage4: req.body.selfTestMessage4,
        selfTestMessage5: req.body.selfTestMessage5,
        selfTestMessage6: req.body.selfTestMessage6,
        selfTestMessage7: req.body.selfTestMessage7,
        SpeakerBeep1: req.body.SpeakerBeep1,
        SpeakerBeep2: req.body.SpeakerBeep2,
        SpeakerBeep3: req.body.SpeakerBeep3,
        SpeakerBeep4: req.body.SpeakerBeep4,
        SpeakerBeep5: req.body.SpeakerBeep5,
        SpeakerBeep6: req.body.SpeakerBeep6,
        SpeakerBeep7: req.body.SpeakerBeep7,
        TwoFullyChargedBatteries1: req.body.TwoFullyChargedBatteries1,
        TwoFullyChargedBatteries2: req.body.TwoFullyChargedBatteries2,
        TwoFullyChargedBatteries3: req.body.TwoFullyChargedBatteries3,
        TwoFullyChargedBatteries4: req.body.TwoFullyChargedBatteries4,
        TwoFullyChargedBatteries5: req.body.TwoFullyChargedBatteries5,
        TwoFullyChargedBatteries6: req.body.TwoFullyChargedBatteries6,
        TwoFullyChargedBatteries7: req.body.TwoFullyChargedBatteries7,
        serviceIndicator1: req.body.serviceIndicator1,
        serviceIndicator2: req.body.serviceIndicator2,
        serviceIndicator3: req.body.serviceIndicator3,
        serviceIndicator4: req.body.serviceIndicator4,
        serviceIndicator5: req.body.serviceIndicator5,
        serviceIndicator6: req.body.serviceIndicator6,
        serviceIndicator7: req.body.serviceIndicator7,
    });
    console.log(daily.Authorized_Operator)
    Equipment.findOne({ where: { SerialNO: daily.SerailNo, Department: daily.Department } }).then(newdaily => {
        if (!newdaily) {
            res.redirect('/showDailyInspectionFormERROR')
        } else {
            oprator_Name = daily.Authorized_Operator.split(' ');
            Engineers.findOne({ where: { Department: daily.Department, FName: oprator_Name[0] } }).then(newdata => {
                if (!newdata) {
                    console.log('Engineer Not found')
                    res.redirect('/showDailyInspectionFormEngERROR')
                } else {
                    if (newdata.LName == oprator_Name[1])
                        daily.save().then(res.redirect('/showDailyInspectionForm'));
                    else
                        res.redirect('/showDailyInspectionFormEngERROR');
                }
            }).catch(err => {
                console.log("ADD DAILY INSPECTION Error");
            })
        }
    })
}

exports.showDailyInspectionFormERROR = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'error', 'add_dailyinspectionER.html'));

}
exports.showDailyInspectionFormEngERROR = (req, res, next) => {
    res.sendFile(path.join(DirName, 'views', 'error', 'add_dailyinspectionEngER.html'));

}

exports.showInventoryListingData = (req, res, next) => {
        const inventory = new spareParts({
            PartNumber: req.body.serial,
            Name: req.body.name,
            Category: req.body.category,
            UnitCost: req.body.cost,
            Vendor: req.body.vendor,
            Department: req.body.department,
            Quantity: req.body.quantity,
        });
        inventory.save().then(savedUser => {
            res.redirect('/showInventoryListingForm');
        });
    }
    // exports.pre_installationformData=(req,res,next) => {
    //     const TECH = new Technician({
    //         FirstName:req.body.firstname,
    //         LastName:req.body.lastname,
    //         ID:req.body.id,
    //         SerialNO:req.body.serial,
    //         CompanyName:req.body.company,
    //         PhoneNumber:req.body.phone
    //     })

//         .then( result => {
//             res.redirect('/viewTech')
//         })
//         .catch(err =>  res.redirect('/viewTech'))
// }