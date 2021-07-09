-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 21, 2020 at 03:28 AM
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
-- Table structure for table `Pre_installations`
--

--
-- Dumping data for table `Pre_installations`
--

INSERT INTO `Pre_installations` (`Date`, `SerialNO`, `Name`, `Equipment`, `Floor`, `Room`, `Department`, `Pre_installationFormCopiedCheck`, `SitePowerOutletAvailableCheck`, `RequiredToolsAvailableCheck`, `RequiredSuppliesAvailableCheck`, `SiteCanBeLockedAfterHoursCheck`, `LockKeysAssignedToPersonalCheck`, `Pre_installationFormCopiedRON`, `SitePowerOutletAvailableRON`, `RequiredToolsAvailableRON`, `RequiredSuppliesAvailableRON`, `SiteCanBeLockedAfterHoursRON`, `LockKeysAssignedToPersonalRON`, `Pre_installationFormCopiedComment`, `SitePowerOutletAvailableComment`, `RequiredToolsAvailableComment`, `RequiredSuppliesAvailableComment`, `SiteCanBeLockedAfterHoursComment`, `LockKeysAssignedToPersonalComment`, `createdAt`, `updatedAt`) VALUES
('2017-04-01 22:00:00', '	ASP01', 'Abdulla elsayed mohamed', 'Aspirator, Surgical', '0', '1', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Abdulla elsayed', 'Abdulla elsayed', 'Abdulla elsayed', NULL, 'Abdulla elsayed', 'Abdulla elsayed', '', 'it is far a little bit from the equipment ', '', NULL, '', '', '2020-05-20 12:26:10', '2020-05-20 12:26:10'),
('2009-09-30 22:00:00', '05859-13	', 'marwa adel ', 'UV Device	', '0', '1', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:45:12', '2020-05-20 14:45:12'),
('2016-02-03 22:00:00', '135225400	', 'marwa adel ', 'Electric Syringe', '0', '2', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:37:50', '2020-05-20 14:37:50'),
('2005-01-31 22:00:00', '19216817171	', 'marwa adel ', 'EMG	', '0', '5', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:49:33', '2020-05-20 14:49:33'),
('2016-02-03 22:00:00', '501744203', 'marwa adel ', 'Pulse Meter', '0', '2', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:41:40', '2020-05-20 14:41:40'),
('2009-07-01 21:00:00', '540.12635', 'marwa adel ', 'Spirometry', '0', '4', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:50:49', '2020-05-20 14:50:49'),
('2016-02-07 22:00:00', '70.12247', 'marwa adel ', 'EKG Machine', '0', '2', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:34:25', '2020-05-20 14:34:25'),
('2013-07-06 22:00:00', '8219-01-042	', 'marwa adel ', 'Electric Suction	', '0', '4', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:48:06', '2020-05-20 14:48:06'),
('2017-03-07 22:00:00', 'ANU01', 'Abdulla elsayed mohamed', 'Anesthesia Units, High Performance', '0', '1', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Abdulla elsayed', 'Abdulla elsayed', 'Abdulla elsayed', NULL, 'Abdulla elsayed', 'Abdulla elsayed', '', '', '', NULL, '', '', '2020-05-20 12:21:48', '2020-05-20 12:21:48'),
('2017-04-01 22:00:00', 'ART01', 'Alaa gamal ', 'Arthroscope', '0', '1', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Alaa gamal', 'Alaa gamal', 'Alaa gamal', NULL, 'Alaa gamal', 'Alaa gamal', '', '', '', NULL, '', '', '2020-05-20 12:23:11', '2020-05-20 12:23:11'),
('2019-05-06 22:00:00', 'BGA03', 'mohamed omar', 'Blood Glucose Analyzer', '1', '3', 'CCU', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'mohamed omar', 'mohamed omar', 'mohamed omar', NULL, 'mohamed omar', 'mohamed omar', '', '', '', NULL, '', '', '2020-05-20 13:08:08', '2020-05-20 13:08:08'),
('0000-00-00 00:00:00', 'BPM01', 'Abdulla elsayed', 'Bedside Patient Monitor	', '1', '4', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Abdulla elsayed', 'Abdulla elsayed', 'Abdulla elsayed', NULL, 'Abdulla elsayed', 'Abdulla elsayed', '', '', '', NULL, '', '', '2020-05-20 16:25:07', '2020-05-20 16:25:07'),
('0000-00-00 00:00:00', 'BPM09', 'salma hamza', 'Bedside Patient Monitor (Module)', '1', '3', 'CCU', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'salma hamza', 'salma hamza', 'salma hamza', NULL, 'salma hamza', 'salma hamza', '', '', '', NULL, '', '', '2020-05-20 13:05:56', '2020-05-20 13:05:56'),
('2017-06-07 22:00:00', 'DPE01', 'Alaa gamal ', 'Defibrillator.Pacemakers, External, Manual	', '1', '4', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Alaa gamal', 'Alaa gamal', 'Alaa gamal', NULL, 'Alaa gamal', 'Alaa gamal', '', '', '', NULL, '', '', '2020-05-20 16:26:33', '2020-05-20 16:26:33'),
('2013-12-31 22:00:00', 'EB1970TK', 'marwa adel ', 'Stethendoscope', '0', '4', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:51:43', '2020-05-20 14:51:43'),
('0000-00-00 00:00:00', 'ECC01', 'Abdulla elsayed', 'Endocscopy, Camera control Unit	', '1', '4', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Abdulla elsayed', 'Abdulla elsayed', 'Abdulla elsayed', NULL, 'Abdulla elsayed', 'Abdulla elsayed', '', '', '', NULL, '', '', '2020-05-20 17:02:25', '2020-05-20 17:02:25'),
('2017-06-05 22:00:00', 'ECG01', 'Abdulla elsayed', 'Electrocardiographs, Multichannel, Interpretive	', '0', '5', 'CCU', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Abdulla elsayed', 'Abdulla elsayed', 'Abdulla elsayed', NULL, 'Abdulla elsayed', 'Abdulla elsayed', '', '', '', NULL, '', '', '2020-05-20 16:28:08', '2020-05-20 16:28:08'),
('0000-00-00 00:00:00', 'EMM01', 'Abdulla elsayed', 'Endoscopy, Medical Monitor	', '1', '5', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Abdulla elsayed', 'Abdulla elsayed', 'Abdulla elsayed', NULL, 'Abdulla elsayed', 'Abdulla elsayed', '', '', '', NULL, '', '', '2020-05-20 16:43:59', '2020-05-20 16:43:59'),
('2017-09-09 22:00:00', 'FG01', 'Alaa gamal ', 'Flowmeters, Gas	', '1', '3', 'OR', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'Alaa gamal', 'Alaa gamal', 'Alaa gamal', NULL, 'Alaa gamal', 'Alaa gamal', '', '', '', NULL, '', '', '2020-05-20 16:42:08', '2020-05-20 16:42:08'),
('2017-09-09 22:00:00', 'FG02', 'salma hamza', 'Flowmeters, Gas	', '1', '1', 'CCU', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'salma hamza', 'salma hamza', 'salma hamza', NULL, 'salma hamza', 'salma hamza', '', '', '', NULL, '', '', '2020-05-20 16:34:31', '2020-05-20 16:34:31'),
('2016-02-07 22:00:00', 'FV-12133	', 'marwa adel ', 'Stress ECG', '0', '2', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:43:12', '2020-05-20 14:43:12'),
('2017-07-02 22:00:00', 'HWS01', 'mohamed omar', 'Headwall Systems, Prefabricated,VII	', '1', '4', 'CCU', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'mohamed omar', 'mohamed omar', 'mohamed omar', NULL, 'mohamed omar', 'mohamed omar', '', '', '', NULL, '', '', '2020-05-20 16:33:03', '2020-05-20 16:33:03'),
('2013-05-07 22:00:00', 'L147957', 'marwa adel ', 'Crytherapy', '0', '1', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 13:10:30', '2020-05-20 13:10:30'),
('2016-02-08 22:00:00', 'US414A0128', 'marwa adel ', 'Doppler', '0', '3', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 13:15:08', '2020-05-20 13:15:08'),
('2016-12-02 22:00:00', 'US416D0893', 'marwa adel ', 'Heart Ultrasound', '0', '2', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 14:39:24', '2020-05-20 14:39:24'),
('2016-02-07 22:00:00', 'US71514668	', 'marwa adel ', 'Defibrillator', '0', '2', 'OutPatient', 'checked', 'checked', 'checked', 'checked', 'checked', 'checked', 'marwa adel', 'marwa adel', 'marwa adel', NULL, 'marwa adel', 'marwa adel', '', '', '', NULL, '', '', '2020-05-20 13:13:42', '2020-05-20 13:13:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Pre_installations`
--
ALTER TABLE `Pre_installations`
  ADD PRIMARY KEY (`SerialNO`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
