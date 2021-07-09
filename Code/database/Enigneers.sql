-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 11, 2020 at 12:14 AM
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
-- Dumping data for table `Enigneers`
--

INSERT INTO `Enigneers` (`FName`, `LName`, `Department`, `Salary`, `Email`, `Id`, `createdAt`, `updatedAt`) VALUES
('abdulla', 'elsayed', 'OR', 5000, 'abdullaelsayed167@yahoo.com', '1', '2020-05-11 00:12:30', '2020-05-11 00:12:30'),
('alaa ', 'gamal', 'OR', 2500, 'alaagamal12@gmail.com', '2', '2020-05-11 00:12:49', '2020-05-11 00:12:49'),
('mohamed', 'omar', 'CCU', 500, 'mada.amari@yahoo.com', '5', '2020-05-11 00:13:56', '2020-05-11 00:13:56'),
('marwa', 'adel', 'OutPatient', 2000, 'marwaadel90@gmail.com', '4', '2020-05-11 00:13:29', '2020-05-11 00:13:29'),
('salma ', 'hamza', 'CCU', 2000, 'salmahamza4@gmail.com', '3', '2020-05-11 00:13:07', '2020-05-11 00:13:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Enigneers`
--
ALTER TABLE `Enigneers`
  ADD PRIMARY KEY (`Email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
