-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 16, 2020 at 06:37 AM
-- Server version: 5.6.37
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinical-web`
--

-- --------------------------------------------------------

--
-- Table structure for table `Equipment`
--

--
-- Dumping data for table `Equipment`
--

INSERT INTO `Equipment` (`Name`, `Ventor`, `Model`, `SerialNO`, `Department`, `location`, `WarrantyPeriod`, `brandName`, `OperationDate`, `supplyDate`, `createdAt`, `updatedAt`) VALUES
('UV Device', '---', '---', '05859-13', 'OutPatient', 'Dermatology Clinic', '2', 'WALDMANN', '2009-01-09 22:00:00', '2009-01-09 22:00:00', '2020-05-16 02:40:11', '2020-05-16 02:40:11'),
('Electric Syringe', 'Gesca', 'Alaris', '135225400', 'OutPatient', 'Cardiac Clinic', '2', 'CAREFUSION', '2016-04-01 22:00:00', '2016-04-01 22:00:00', '2020-05-16 02:28:51', '2020-05-16 02:28:51'),
('EMG', '---', 'LANSTETUP', '19216817171', 'OutPatient', 'Neurological and psychological clinics', '2', 'EBN NEMUS', '0000-00-00 00:00:00', '2005-01-01 22:00:00', '2020-05-16 02:46:26', '2020-05-16 02:46:26'),
('Pulse Meter', 'Servomed', '7500', '501744203', 'OutPatient', 'Cardiac Clinic', '2', 'NONIN', '2016-04-01 22:00:00', '2016-04-01 22:00:00', '2020-05-16 02:22:25', '2020-05-16 02:22:25'),
('Spirometry', 'Ghalioungui', 'SP-1', '540.12635', 'OutPatient', 'Chest clinic', '2', 'SCHILLER', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-05-16 02:52:15', '2020-05-16 02:52:15'),
('EKG Machine', 'Ghalioungui', 'AT-102', '70.12247', 'OutPatient', 'Cardiac Clinic', '2', 'SCHILLER', '2016-08-01 22:00:00', '2016-08-01 22:00:00', '2020-05-16 02:04:43', '2020-05-16 02:04:43'),
('Electric Suction', 'Falwa medical', 'H-40', '8219-01-042', 'OutPatient', 'Chest clinic', '2', 'EUROVAC', '2013-07-06 22:00:00', '2013-07-06 22:00:00', '2020-05-16 02:49:40', '2020-05-16 02:49:40'),
('Anesthesia Units, High Performance', 'Life Care Technology', 'Primus', 'ANU01', 'OR', 'Location OR-1', '1', 'Drager', '2017-08-02 22:00:00', '2017-01-02 22:00:00', '2020-05-16 05:09:38', '2020-05-16 05:09:38'),
('Anesthesia Units, High Performance', 'Life Care Technology', 'Primus', 'ANU02', 'OR', 'OR-2', '1', 'Drager', '2017-08-02 22:00:00', '2017-01-02 22:00:00', '2020-05-16 05:10:56', '2020-05-16 05:10:56'),
('Arthroscope', 'Egyptian Group', 'Hopkins.28731AWA', 'ART01', 'OR', 'OR-Store', '3', 'Storz', '2017-02-03 22:00:00', '0000-00-00 00:00:00', '2020-05-16 05:23:52', '2020-05-16 05:23:52'),
('Arthroscope', 'Egyptian Group', 'Hopkins.28731BWA', 'ART02', 'OR', 'OR-Store', '3', 'Storz', '2017-02-03 22:00:00', '0000-00-00 00:00:00', '2020-05-16 05:34:50', '2020-05-16 05:34:50'),
('Aspirator, Surgical', 'Egyptian Engineering Industerial Office', 'Eurovac H-40', 'ASP01', 'OR', 'OR1', '5', 'Hersill', '2017-12-03 22:00:00', '2017-05-03 22:00:00', '2020-05-16 05:46:27', '2020-05-16 05:46:27'),
('Aspirator, Surgical', 'Egyptian Engineering Industerial Office', 'Eurovac H-40', 'ASP02', 'OR', 'OR2', '5', 'Hersill', '2017-12-03 22:00:00', '2017-05-03 22:00:00', '2020-05-16 05:50:03', '2020-05-16 05:50:03'),
('Blood Glucose Analyzer', 'Roche', 'Acc-Check Performa', 'BGA03', 'CCU', 'CCU', '3', 'Roche Diagnostics', '0000-00-00 00:00:00', '2017-07-04 22:00:00', '2020-05-16 04:05:32', '2020-05-16 04:05:32'),
('Blood Glucose Analyzer', 'Roche', 'Acc-Check Performa', 'BGA04', 'CCU', 'CCU', '3', 'Roche Diagnostics', '0000-00-00 00:00:00', '2017-07-04 22:00:00', '2020-05-16 05:06:09', '2020-05-16 05:06:09'),
('Bedside Patient Monitor', 'Egyptian Group', 'IntelliVue MX 700', 'BPM01', 'OR', 'OR-1', '2', 'Philips', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-05-16 06:32:13', '2020-05-16 06:32:13'),
('Bedside Patient Monitor (Module)', 'Egyptian Group', 'X 2', 'BPM09', 'CCU', 'CCU-2203', '2', 'Philips', '2017-08-04 22:00:00', '2017-01-04 22:00:00', '2020-05-16 04:01:18', '2020-05-16 04:01:18'),
('Defibrillator.Pacemakers, External, Manual', 'Egyptian Group', 'HeartStart XL+', 'DPE01', 'OR', 'OR1', '2', 'Philips', '2017-08-05 22:00:00', '2017-01-05 22:00:00', '2020-05-16 06:26:43', '2020-05-16 06:26:43'),
('Defibrillator.Pacemakers, External, Manual', 'Egyptian Group', 'HeartStart XL+', 'DPE04', 'CCU', 'CCU', '2', 'Philips', '0000-00-00 00:00:00', '2017-06-05 22:00:00', '2020-05-16 04:11:31', '2020-05-16 04:11:31'),
('Stethendoscope', 'Scope medical', 'PENTAX3.2', 'EB1970TK', 'OutPatient', 'Chest clinic', '2', 'PENTAX', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-05-16 02:43:30', '2020-05-16 02:43:30'),
('Endocscopy, Camera control Unit', 'Egyptian Group', 'TC301', 'ECC01', 'OR', 'OR-Equipment Area', '2', 'Storz', '0000-00-00 00:00:00', '2017-05-05 22:00:00', '2020-05-16 05:53:06', '2020-05-16 05:53:06'),
('Electrocardiographs, Multichannel, Interpretive ', 'Egyptian Group', 'Page Writer TC20', 'ECG01', 'CCU', 'CCU', '5', 'Philips', '0000-00-00 00:00:00', '2017-06-05 22:00:00', '2020-05-16 04:17:21', '2020-05-16 04:17:21'),
('Endocscopy, Camera Head', 'Egyptian Group', 'TH100', 'ECH01', 'OR', 'OR-Equipment Area', '5', 'Storz', '0000-00-00 00:00:00', '2017-05-05 22:00:00', '2020-05-16 05:54:31', '2020-05-16 05:54:31'),
('Examination Light, Mobile, LED', 'Servomed', 'Master Light LED', 'EL01', 'CCU', 'CCU', '2', 'Kawe', '0000-00-00 00:00:00', '2017-06-05 22:00:00', '2020-05-16 04:21:58', '2020-05-16 04:21:58'),
('Endoscopy, Medical Monitor', 'Egyptian Group', 'FS-L2401D', 'EMM01', 'OR', 'OR-Equipment Area', '4', 'FSN', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-05-16 06:06:38', '2020-05-16 06:06:38'),
('Electrosurgical Unit, Basic', 'Egyptian Group', 'VIO 300 S', 'EUB01', 'OR', 'OR1', '1', 'ERBE', '2017-10-04 22:00:00', '2017-04-04 22:00:00', '2020-05-16 06:14:38', '2020-05-16 06:14:38'),
('Endocscopy, Video Processor', 'Egyptian Group', 'TC200EN', 'EVP01', 'OR', 'OR-Equipment Area', '1', 'Storz', '0000-00-00 00:00:00', '2017-05-07 22:00:00', '2020-05-16 05:56:08', '2020-05-16 05:56:08'),
('Flowmeters, Gas', 'Al Eman Medical', 'RTM3', 'FG01', 'OR', 'OR3', '1', 'Technologie Medical', '0000-00-00 00:00:00', '2017-10-08 22:00:00', '2020-05-16 06:08:46', '2020-05-16 06:08:46'),
('Flowmeters, Gas', 'Al Eman Medical', 'RTM3', 'FG02', 'CCU', 'CCU-2201', '2', 'Technologie Medical', '0000-00-00 00:00:00', '2017-10-08 22:00:00', '2020-05-16 04:26:16', '2020-05-16 04:26:16'),
('Stress ECG', 'Egyptian Group', 'TMX425', 'FV-12133', 'OutPatient', 'Cardiac Clinic', '2', 'PHILIPS', '2016-08-01 22:00:00', '2016-08-01 22:00:00', '2020-05-16 02:19:31', '2020-05-16 02:19:31'),
('Ultrasound', '---', 'Acuson CV70', 'GM-56700A00E', 'OutPatient', 'Cardiac Clinic', '2', 'SIEMENS', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-05-16 02:07:32', '2020-05-16 02:07:32'),
('Headwall Systems, Prefabricated,VII', 'Alkan medical', '1103', 'HWS01', 'CCU', 'CCU', '2', 'Modular', '2017-03-06 22:00:00', '0000-00-00 00:00:00', '2020-05-16 04:32:59', '2020-05-16 04:32:59'),
('Infusion Pumps, Syringe ', 'Egyptian Group', 'Injectomate Ajilia', 'IP01', 'CCU', 'CCU', '2', 'Fresenius', '2017-12-03 22:00:00', '2017-05-03 22:00:00', '2020-05-16 04:46:14', '2020-05-16 04:46:14'),
('Infusion Pumps, Syringe ', 'Egyptian Group', 'Injectomate Ajilia', 'IP02', 'CCU', 'CCU', '2', 'Fresenius', '2017-12-03 22:00:00', '2017-05-03 22:00:00', '2020-05-16 04:57:34', '2020-05-16 04:57:34'),
('Crytherapy', '---', 'maxi', 'L147957', 'OutPatient', 'Dermatology Clinic', '2', 'CRYOPRO', '2013-08-04 22:00:00', '2013-08-04 22:00:00', '2020-05-16 02:33:18', '2020-05-16 02:33:18'),
('Monitors, Central Station', 'Egyptian Group', 'IntelliVue PIIC iX', 'MCS01', 'CCU', 'CCU', '2', 'Philips', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-05-16 04:47:50', '2020-05-16 04:47:50'),
('Nebulizer, Ultrasonic', 'Egyptian Engineering Industerial Office', '303', 'NU01', 'CCU', 'CCU', '2', 'Atom', '2017-08-02 22:00:00', '2017-01-02 22:00:00', '2020-05-16 04:50:55', '2020-05-16 04:50:55'),
('ICU Patient Bed without Scale', 'Alkan Medical', 'EPIC II ', 'PBWS01', 'CCU', 'CCU-2203', '2', 'Stryker', '2018-12-03 22:00:00', '2018-05-03 22:00:00', '2020-05-16 04:43:58', '2020-05-16 04:43:58'),
('Refrigerators, Pharmacy. Laboratory (Under Counter)', 'Analysis', 'JRG404V', 'RPL01', 'CCU', 'CCU-Medication room', '2', 'Jewett', '0000-00-00 00:00:00', '2017-05-03 22:00:00', '2020-05-16 04:53:07', '2020-05-16 04:53:07'),
('Regulators, Suction', 'Al Eman Medical', 'RVTM3', 'RS01', 'CCU', 'CCU-2201', '2', 'Technologie Medical', '0000-00-00 00:00:00', '2017-05-03 22:00:00', '2020-05-16 04:54:37', '2020-05-16 04:54:37'),
('Regulators, Suction', 'Al Eman Medical', 'RVTM3', 'RS02', 'CCU', 'CCU-2202', '2', 'Technologie Medical', '0000-00-00 00:00:00', '2017-05-03 22:00:00', '2020-05-16 04:59:14', '2020-05-16 04:59:14'),
('Scales, Patient, Platform, Electronic', 'Scientific&Medical Euipment Co. Al Nouh', '769', 'SC01', 'CCU', 'CCU', '2', 'Seca', '0000-00-00 00:00:00', '2017-05-03 22:00:00', '2020-05-16 04:55:48', '2020-05-16 04:55:48'),
('Doppler', 'Nile', 'Clear vue 650', 'US414A0128', 'OutPatient', 'Gynecology Clinic', '2', 'PHILIPS', '2016-09-01 22:00:00', '2016-09-01 22:00:00', '2020-05-16 02:37:16', '2020-05-16 02:37:16'),
('Heart Ultrasound', 'Nile', 'affiniti50', 'US416D0893', 'OutPatient', 'Cardiac Clinic', '2', 'PHILIPS', '2016-03-11 22:00:00', '2016-03-11 22:00:00', '2020-05-16 02:16:15', '2020-05-16 02:16:15'),
('Defibrillator', 'Alkan medical', 'Heart start XL', 'US71514668', 'OutPatient', 'Cardiac Clinic', '2', 'PHILIPS', '2016-08-01 22:00:00', '2016-08-01 22:00:00', '2020-05-16 02:25:55', '2020-05-16 02:25:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Equipment`
--
ALTER TABLE `Equipment`
  ADD PRIMARY KEY (`SerialNO`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
