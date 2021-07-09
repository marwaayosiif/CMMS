-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 23, 2020 at 11:22 PM
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
-- Table structure for table `preventives`
--

CREATE TABLE IF NOT EXISTS `preventives` (
  `Department` text NOT NULL,
  `PartsName` text,
  `Vendor` text NOT NULL,
  `Model` varchar(255) DEFAULT NULL,
  `SerialNO` varchar(255) NOT NULL DEFAULT '',
  `WarrantyPeriod` varchar(255) DEFAULT NULL,
  `Operation` varchar(255) DEFAULT NULL,
  `scheduleDate` datetime DEFAULT NULL,
  `frequancy` varchar(255) DEFAULT NULL,
  `process` varchar(255) DEFAULT NULL,
  `DayesOfMaintainance` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `preventives`
--

INSERT INTO `preventives` (`Department`, `PartsName`, `Vendor`, `Model`, `SerialNO`, `WarrantyPeriod`, `Operation`, `scheduleDate`, `frequancy`, `process`, `DayesOfMaintainance`, `createdAt`, `updatedAt`) VALUES
('OutPatient', 'Pulse Meter', 'Servomed	', NULL, '501744203	', '2', 'Electrical Safety: Perform electical safety checks.', '2020-01-09 22:00:00', 'Monthly', NULL, NULL, '2020-05-23 22:50:54', '2020-05-23 22:50:54'),
('OutPatient', 'Pulse Meter	', 'Servomed	', NULL, '501744203', '2', ' make sure the device is clean and decontaminated.', '2020-02-09 22:00:00', 'Monthly', NULL, NULL, '2020-05-23 22:52:05', '2020-05-23 22:52:05'),
('OutPatient', 'Spirometry', 'Ghalioungui	', NULL, '540.12635	', '2', 'electrical safety test', '2020-01-07 22:00:00', '12 Months', NULL, NULL, '2020-05-23 22:42:02', '2020-05-23 22:42:02'),
('OutPatient', 'Electric Suction', 'Falwa medical	', NULL, '8219-01-042	', '2', 'Clean filters', '2020-06-10 22:00:00', 'Daily', NULL, NULL, '2020-05-23 23:14:27', '2020-05-23 23:14:27'),
('OR', 'Anesthesia Units, High Performance	', 'Life Care Technology	', NULL, 'ANU01	', '1', 'Verify handwheel turns smoothly through entire range.', '2020-01-06 22:00:00', 'Monthly', NULL, NULL, '2020-05-23 21:49:41', '2020-05-23 21:49:41'),
('OR', 'Anesthesia Units, High Performance', 'Life Care Technology	', NULL, 'ANU01', '1', 'Electrical Safety inspection and battery replacement for Desflurane Vaporizers.', '2020-01-05 22:00:00', 'Monthly', NULL, NULL, '2020-05-23 21:37:34', '2020-05-23 21:37:34'),
('OR', 'Defibrillator.Pacemakers, External, Manual', 'Egyptian Group	', NULL, 'DPE01', '2', 'Chassis – verify physical integrity, cleanliness', '2020-03-05 22:00:00', 'Weekly', NULL, NULL, '2020-05-23 22:01:14', '2020-05-23 22:01:14'),
('OR', 'Endocscopy, Camera control Unit', 'Egyptian Group	', NULL, 'ECC01	', '2', 'clean these tricky pieces of equipment', '2013-12-31 22:00:00', 'after each use', NULL, NULL, '2020-05-23 22:26:19', '2020-05-23 22:26:19'),
('OR', 'Electrosurgical Unit, Basic', 'Egyptian Group	', NULL, 'EUB01	', '1', ' test the performance of the electrosurgical unit', '2020-04-02 22:00:00', '6 Months', NULL, NULL, '2020-05-23 22:18:12', '2020-05-23 22:18:12'),
('OR', 'Electrosurgical Unit, Basic', 'Egyptian Group	', NULL, 'EUB01', '1', 'Cleaning and dust removal of the inside of an ESU', '2020-01-09 22:00:00', 'Monthly', NULL, NULL, '2020-05-23 22:22:22', '2020-05-23 22:22:22'),
('OR', 'Flowmeters, Gas	', 'Al Eman Medical	', NULL, 'FG01	', '1', 'Visual Inspection', '0000-00-00 00:00:00', 'Weekly', NULL, NULL, '2020-05-23 22:31:40', '2020-05-23 22:31:40'),
('OR', 'Ultrasound', '---	', NULL, 'GM-56700A00E	', '2	', 'Produce clear Phantom Images of probe measuring respective markings for accuracy', '2020-03-08 22:00:00', '6 Months', NULL, NULL, '2020-05-23 22:36:44', '2020-05-23 22:36:44'),
('CCU', 'Infusion Pumps, Syringe	', 'Egyptian Group	', NULL, 'IP01	', '2', 'Clean device', '2020-04-06 22:00:00', '3 Monthly', NULL, NULL, '2020-05-23 22:46:24', '2020-05-23 22:46:24'),
('CCU', 'Regulators, Suction	', 'Al Eman Medical	', NULL, 'RS01	', '2', 'Look at the components like the diaphragm and the O Rings', '2020-06-02 22:00:00', 'Monthly', NULL, NULL, '2020-05-23 23:02:21', '2020-05-23 23:02:21'),
('OutPatient', 'Heart Ultrasound	', 'Nile	', NULL, 'US416D0893	', '2', 'ensure that all the connections of the ultrasound are plugged in properly', '0000-00-00 00:00:00', 'Daily', NULL, NULL, '2020-05-23 23:07:54', '2020-05-23 23:07:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `preventives`
--
ALTER TABLE `preventives`
  ADD PRIMARY KEY (`SerialNO`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
