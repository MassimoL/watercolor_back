-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Apr 10, 2024 alle 11:13
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `watercolor_db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `paintings`
--

CREATE TABLE `paintings` (
  `painting_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `year` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `paintings`
--

INSERT INTO `paintings` (`painting_id`, `name`, `description`, `author`, `year`) VALUES
(1, 'Forest', 'A forest by night', 'Carlati D.', '2020'),
(2, 'Sunset', 'A sunset by the sea', 'Fardi G.', '2019'),
(3, 'Mount Canigo', 'A beautiful view of mount Canigo', 'Tuwards S.', '2017'),
(4, 'Barcelona', 'An urban view of the city', 'Gramenet H.', '2020'),
(5, 'Sevilla', 'A view of Sevilla', 'Fraguero G.', '2017');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `paintings`
--
ALTER TABLE `paintings`
  ADD PRIMARY KEY (`painting_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `paintings`
--
ALTER TABLE `paintings`
  MODIFY `painting_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
