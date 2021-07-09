const express = require('express');
const controller = require('../controllers/control');
const path = require('path');
const bcrypt = require('bcryptjs')
const DirName = require('../util/path');
const router = express.Router();
const WorksOrders = require('../models/worksOrders')
const Pre_installation = require('../models/pre-installation')
const Engineers= require('../models/engineers')
const spareParts = require('../models/spareParts')
const DailyInspection = require('../models/DailyInspection')
const preventive = require('../models/preventive');


router.get('/index',controller.mainRoute);
router.get('/managementSystem',controller.managementSystem);
router.get('/showLogin',controller.showLogin);
router.post('/login',controller.login);
router.get('/showWorkOrders',controller.showWorkOrder);
router.get('/showWorkOrdersForm',controller.showWorkOrdeForm);
router.post('/getWorkOrderData',controller.getWorkOrderData)
// get Data from database
// pre-installion
router.get('/showPre-installationOutPatient',controller.showPreinstallationOutPatientData);
router.get('/showPre-installationOR',controller.showPreinstallationORData);
router.get('/showPre-installationCCU',controller.showPreinstallationCCUData);

// router.get('/OutPatientDailyInspectionReport',controller.OutPatientDailyInspectionReport);
// router.get('/ORDailyInspectionReport:/id',controller.ORDailyInspectionReport);
// router.get('/CCUDailyInspectionReport',controller.CCUDailyInspectionReport);
// Daily inspection

router.get('/showDailyInspectionOutPatient',controller.showDailyInspectionOutPatientData);
router.get('/showDailyInspectionOR',controller.showDailyInspectionORData);
router.get('/showDailyInspectionCCU',controller.showDailyInspectionCCUData);

router.get('/ORPreinstallationReport/:id',controller.ORPreinstallationReport);
router.get('/CCUPreinstallationReport/:id',controller.CCUPreinstallationReport);
router.get('/OutPatientPreinstallationReport/:id',controller.OutPatientPreinstallationReport);

router.get('/showPreventiveMaintainanceOR',controller.showPreventiveMaintainanceOR);
router.get('/ORPMReport/:id',controller.ORPMReport);

router.get('/showPreventiveMaintainanceOutPatient',controller.showPreventiveMaintainanceOutPatient);
router.get('/OutPatientPMReport/:id',controller.OutPatientPMReport);

router.get('/showPreventiveMaintainanceCCU',controller.showPreventiveMaintainanceCCU);
router.get('/CCUPMReport/:id',controller.CCUPMReport);



// router.get('/showPreventiveMaintainanceCCU/:id',controller.CCUPreinstallationReport);
// router.get('/showPreventiveMaintainanceOR/:id',controller.OutPatientPreinstallationReport);


//Daily inspection
router.get('/OutPatientDailyInspectionReport/:id',controller.OutPatientDailyInspectionReport);
router.get('/CCUDailyInspectionReport/:id',controller.CCUDailyInspectionReport);

router.get('/ORDailyInspectionReport/:id',controller.ORDailyInspectionReport);




// Inventory
router.get('/showInventoryListingOutPatient',controller.showInventoryListingOutPatientData);
router.get('/showInventoryListingOR',controller.showInventoryListingORData);
router.get('/showInventoryListingCCU',controller.showInventoryListingCCUData);


router.get('/pre-installationformOutPatient',controller.showPreinstallationform);
// router.post('/pre-installationformOutPatient',controller.PreinstallationCatheterData);


router.get('/pre-installationform',controller.pre_installationform);
router.get('/showDailyInspectionForm',controller.showDailyInspectionForm);
router.get('/showInventoryListingForm',controller.showInventoryListingForm);
// router.get('/showWorkOrdersForm',controller.showWorkOrdersForm);
router.post('/pre-installationform',controller.pre_installationformData);
router.post('/showDailyInspectionForm',controller.showDailyInspectionData);
router.post('/showInventoryListingForm',controller.showInventoryListingData);



router.get('/showPreventiveMaintainanceForm',controller.showPreventiveMaintainanceForm)
router.post('/getPreventiveMaintainanceData',controller.getPreventiveMaintainanceData)

router.get('/viewEng',controller.showEng);
router.get('/addEng',controller.ShowEditEngForm);
router.post('/addEng',controller.singUp);
router.get('/showEq',controller.showEq);
router.get('/showEqform',controller.showEqform)
router.post('/getEqData',controller.getEqData)
router.get('/showPreMain',controller.showPrevMain)
router.get('/showEditEng',controller.showEditEng)
router.post('/editEng',controller.editEng)

router.get('/showEditEq',controller.showEditEq)
router.post('/editEq',controller.editEq)

router.get('/index', controller.mainRoute);
router.get('/managementSystem', controller.managementSystem);
router.get('/showLogin', controller.showLogin);
router.post('/login', controller.login);
router.get('/showWorkOrders', controller.showWorkOrder);
router.get('/showWorkOrdersForm', controller.showWorkOrdeForm);
router.post('/getWorkOrderData', controller.getWorkOrderData);
// router.get('/showPre-installationform', controller.showPreinstallationData);
router.get('/pre-installationform', controller.showPreinstallationform);
// router.post('/pre-installationform', controller.getData);
router.get('/viewEng', controller.showEng);
router.get('/addEng', controller.ShowEditEngForm);
router.post('/addEng', controller.singUp);
router.get('/showEq', controller.showEq);
router.get('/showEqform', controller.showEqform)
router.post('/getEqData', controller.getEqData)
router.get('/showPreMain', controller.showPrevMain)
router.get('/showEditEng', controller.showEditEng)
router.post('/editEng', controller.editEng)

router.get('/showEditEq', controller.showEditEq)
router.post('/editEq', controller.editEq)
//errors
router.get('/showPreventiveMaintainanceFormERROR',controller.showPreventiveMaintainanceFormERROR)

router.get('/pre_installationformERROR',controller.pre_installationformERROR)
router.get('/showDailyInspectionFormERROR',controller.showDailyInspectionFormERROR)

router.get('/showDailyInspectionFormEngERROR',controller.showDailyInspectionFormEngERROR);

router.get('/loginERROR',controller.loginERROR);

module.exports = router;
