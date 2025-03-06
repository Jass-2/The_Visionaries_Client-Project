-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 06, 2025 at 11:35 AM
-- Server version: 8.0.35
-- PHP Version: 8.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: bia_db
--

-- --------------------------------------------------------

--
-- Table structure for table contact
--

CREATE TABLE contact (
  id int NOT NULL,
  fname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  lname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  message text COLLATE utf8mb4_general_ci NOT NULL,
  submitted_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  email text COLLATE utf8mb4_general_ci NOT NULL,
  phone varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  inquiry enum('general','volunteer','concern') COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table donors
--

CREATE TABLE donors (
  id int NOT NULL,
  fname varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  lname varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  amount int NOT NULL,
  message text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table events
--

CREATE TABLE `events` (
  id int NOT NULL,
  title varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  description text COLLATE utf8mb4_general_ci NOT NULL,
  article_1 text COLLATE utf8mb4_general_ci NOT NULL,
  article_2 text COLLATE utf8mb4_general_ci NOT NULL,
  article_3 text COLLATE utf8mb4_general_ci NOT NULL,
  heading_1 varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  heading_2 varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  heading_3 varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  posted_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table letters
--

CREATE TABLE letters (
  id int NOT NULL,
  flname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  letter text COLLATE utf8mb4_general_ci NOT NULL,
  date varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table media
--

CREATE TABLE media (
  id int NOT NULL,
  media_name varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  media_type enum('vid','img') COLLATE utf8mb4_general_ci NOT NULL,
  media_url varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  event_id int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table news
--

CREATE TABLE news (
  id int NOT NULL,
  title varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  description text COLLATE utf8mb4_general_ci NOT NULL,
  article_1 text COLLATE utf8mb4_general_ci NOT NULL,
  article_2 text COLLATE utf8mb4_general_ci NOT NULL,
  article_3 text COLLATE utf8mb4_general_ci NOT NULL,
  heading_1 varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  heading_2 varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  heading_3 varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  posted_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table testimonials
--

CREATE TABLE testimonials (
  id int NOT NULL,
  flname varchar(99) COLLATE utf8mb4_general_ci NOT NULL,
  comment text COLLATE utf8mb4_general_ci NOT NULL,
  date varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table contact
--
ALTER TABLE contact
  ADD PRIMARY KEY (id);

--
-- Indexes for table donors
--
ALTER TABLE donors
  ADD PRIMARY KEY (id);

--
-- Indexes for table events
--
ALTER TABLE events
  ADD PRIMARY KEY (id);

--
-- Indexes for table letters
--
ALTER TABLE letters
  ADD PRIMARY KEY (id);

--
-- Indexes for table media
--
ALTER TABLE media
  ADD PRIMARY KEY (id),
  ADD KEY event_id (event_id);

--
-- Indexes for table news
--
ALTER TABLE news
  ADD PRIMARY KEY (id);

--
-- Indexes for table testimonials
--
ALTER TABLE testimonials
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table contact
--
ALTER TABLE contact
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table donors
--
ALTER TABLE donors
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table events
--
ALTER TABLE events
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table letters
--
ALTER TABLE letters
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table media
--
ALTER TABLE media
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table news
--
ALTER TABLE news
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table testimonials
--
ALTER TABLE testimonials
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table media
--
ALTER TABLE media
  ADD CONSTRAINT media_ibfk_1 FOREIGN KEY (event_id) REFERENCES media (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
