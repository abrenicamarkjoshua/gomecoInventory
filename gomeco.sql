-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2016 at 12:32 PM
-- Server version: 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gomeco`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`, `created_at`, `updated_at`) VALUES
(1, 'food service equipment', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'cooking equipment', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'storage / preparation equipment', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 3, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 4, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 8, 4, '0000-00-00 00:00:00', '2015-11-03 07:08:03'),
(6, 12, 9, '2015-11-07 01:13:18', '2015-11-07 01:13:42'),
(7, 5, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 6, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 7, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 13, 35, '2015-11-15 06:54:12', '2015-11-15 06:54:12');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2015_08_24_061812_create_items_table', 1),
('2015_10_20_123705_productsMigration', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `purchaseorders_id` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `amount` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `purchaseorders_id`, `productName`, `quantity`, `created_at`, `updated_at`, `amount`) VALUES
(10, 9, 'hoffman caserole', 1, '2015-11-13 23:36:56', '2015-11-13 23:36:56', '1500'),
(11, 9, 'test2', 1, '2015-11-13 23:36:56', '2015-11-13 23:36:56', '200'),
(12, 10, 'hoffman caserole', 1, '2015-11-13 23:47:23', '2015-11-13 23:47:23', '1500'),
(13, 10, 'Electric bread stove', 1, '2015-11-13 23:47:23', '2015-11-13 23:47:23', '7832'),
(14, 11, 'Pressure cooker', 1, '2015-11-14 03:31:09', '2015-11-14 03:31:09', '1300'),
(15, 11, 'hoffman caserole', 1, '2015-11-14 03:31:09', '2015-11-14 03:31:09', '1500'),
(16, 13, 'Pressure cooker', 1, '2015-11-14 04:51:41', '2015-11-14 04:51:41', '1300'),
(17, 13, 'Electric bread stove', 1, '2015-11-14 04:51:41', '2015-11-14 04:51:41', '7832'),
(18, 13, 'White Refridgerator', 1, '2015-11-14 04:51:41', '2015-11-14 04:51:41', '7832'),
(19, 14, 'Pressure cooker', 1, '2015-11-14 04:56:00', '2015-11-14 04:56:00', '1300'),
(20, 15, 'Electric bread stove', 1, '2015-11-14 05:58:21', '2015-11-14 05:58:21', '7832'),
(21, 16, 'Electric bread stove', 1, '2015-11-14 06:06:57', '2015-11-14 06:06:57', '7832'),
(22, 16, 'hoffman caserole', 1, '2015-11-14 06:06:57', '2015-11-14 06:06:57', '1500'),
(23, 17, 'hoffman caserole', 1, '2015-11-14 06:13:17', '2015-11-14 06:13:17', '1500'),
(24, 18, 'Electric bread stove', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', '7832'),
(25, 18, 'Dark grey stainless steel kitchen desk', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', '7832'),
(26, 18, '6-ingridient holder stainless steel drawer', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', '7832'),
(27, 18, 'Pressure cooker', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', '1300'),
(28, 19, 'Pressure cooker', 1, '2015-11-15 07:08:15', '2015-11-15 07:08:15', '1300'),
(29, 19, 'test name', 1, '2015-11-15 07:08:15', '2015-11-15 07:08:15', '1000'),
(30, 20, 'Electric bread stove', 1, '2015-11-15 07:15:23', '2015-11-15 07:15:23', '7832'),
(31, 20, 'hoffman caserole', 1, '2015-11-15 07:15:23', '2015-11-15 07:15:23', '1500'),
(32, 21, 'hoffman caserole', 1, '2016-02-11 09:22:46', '2016-02-11 09:22:46', '1500'),
(33, 22, 'hoffman caserole', 1, '2016-02-11 09:26:00', '2016-02-11 09:26:00', '1500'),
(34, 24, 'hoffman caserole', 1, '2016-02-11 11:01:11', '2016-02-11 11:01:11', '1500');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productpictures`
--

CREATE TABLE `productpictures` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productpictures`
--

INSERT INTO `productpictures` (`id`, `product_id`, `picture`, `created_at`, `updated_at`) VALUES
(1, 5, 'images/a-img.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 5, 'images/a-img1.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 5, 'images/a-img2.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 8, 'images/standard-spc-4qc-4-quarts-pressure-cooker-silver-9351-742163-1-product.jpg', '2015-11-03 02:17:12', '2015-11-03 02:17:12'),
(16, 12, 'images/hoffman1.jpg', '2015-11-07 01:14:28', '2015-11-07 01:14:28'),
(17, 12, 'images/hoffman2.jpg', '2015-11-07 01:14:28', '2015-11-07 01:14:28'),
(18, 12, 'images/hoffman3.jpg', '2015-11-07 01:14:28', '2015-11-07 01:14:28'),
(19, 6, 'images/a-img2.jpg', '2015-11-11 09:35:11', '2015-11-11 09:35:11'),
(20, 7, 'images/a-img1.jpg', '2015-11-11 09:35:31', '2015-11-11 09:35:31'),
(21, 13, 'images/handshake-logo-766477.gif', '2015-11-15 06:55:21', '2015-11-15 06:55:21'),
(22, 13, 'images/msmouse.jpg', '2015-11-15 06:55:21', '2015-11-15 06:55:21'),
(23, 13, 'images/mar roxas.jpg', '2015-11-15 06:56:32', '2015-11-15 06:56:32');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `productDesc` text NOT NULL,
  `sellingprice` decimal(10,0) NOT NULL,
  `category_id` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `productDesc`, `sellingprice`, `category_id`, `picture`, `created_at`, `updated_at`) VALUES
(1, 'Dark grey stainless steel kitchen desk', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', '7832', 3, 'product/01.jpg', '2015-10-24 04:35:39', '0000-00-00 00:00:00'),
(2, 'White stainless steel kitchen desk', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', '7832', 3, 'product/02.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '6-ingridient holder stainless steel drawer', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', '7832', 1, 'product/03.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'White Refridgerator', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', '7832', 3, 'product/04.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Electric bread stove', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', '7832', 2, 'images/a-img.jpg', '2015-11-08 23:40:42', '2015-11-08 15:40:42'),
(6, 'test name', 'test desc', '1000', 0, 'images/a-img2.jpg', '2015-11-11 01:35:17', '2015-11-10 17:35:17'),
(7, 'test2', 'test desc2', '200', 0, 'images/a-img1.jpg', '2015-11-11 01:35:37', '2015-11-10 17:35:37'),
(8, 'Pressure cooker', 'Size: large\r\nColor: silver, black\r\n', '1300', 1, 'images/lifetime-brands-vasconia-8qt-pressure-cooker_94987.jpg', '2015-11-02 23:15:39', '2015-11-02 15:15:39'),
(12, 'hoffman caserole', 'Diameter: 21cm\r\nDepth: 11.5cm\r\n-Induction-Friendly\r\n-Fast heating\r\n-High-grade & quality stainless steel\r\n-Multi layered of 18/10 stainless steel for durability and aluminum alloy for quick and even heat transfer.\r\n-Beneath the pot or pan is the heat absorbent and heat transmission design.\r\n-Rounded edges prevent spillage while pouring water or soup.', '1500', 3, 'images/hoffman1.jpg', '2015-11-06 17:24:15', '2015-11-06 09:24:15'),
(13, 'shades', 'Rayban\r\n3x3\r\nbrown\r\npolycarbonated soda', '1000', 3, 'images/handshake-logo-766477.gif', '2015-11-14 22:57:00', '2015-11-14 14:57:00');

-- --------------------------------------------------------

--
-- Table structure for table `purchaseorders`
--

CREATE TABLE `purchaseorders` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_address` text NOT NULL,
  `customer_mobile` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `deadline` date NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchaseorders`
--

INSERT INTO `purchaseorders` (`id`, `created_at`, `updated_at`, `status`, `customer_name`, `customer_address`, `customer_mobile`, `customer_email`, `deadline`, `user_id`) VALUES
(15, '2015-11-14 05:58:21', '2015-12-07 07:33:47', 'on-delivery-process', 'dan joel', '95 bansalangin street, veterans village', '09175824979', 'abrenicamarkjoshua@yahoo.com', '2015-11-21', 4),
(16, '2015-11-14 06:06:57', '2015-12-07 07:38:43', 'on-delivery-process', 'dan joel', '95 bansalangin street, veterans village', '09175824979', 'abrenicamarkjoshua@yahoo.com', '2015-11-21', 4),
(17, '2015-11-14 06:13:17', '2015-12-07 07:39:04', 'on-delivery-process', 'dan joel', '95 bansalangin street, veterans village', '09175824979', 'abrenicamarkjoshua@yahoo.com', '2015-11-21', 4),
(18, '2015-11-15 06:42:54', '2015-11-15 06:48:41', 'closed', 'ryan', 'maysan, valenzuela city', '09279492744', 'ryan@gmail.com', '2015-11-22', 5),
(19, '2015-11-15 07:08:15', '2015-11-15 07:08:15', 'pending', 'Jomarie Labios', 'Espiritu St. Marulas Val. City', '09051127633', 'jomarielabios22@yahoo.com', '2015-11-22', NULL),
(20, '2015-11-15 07:15:23', '2015-11-15 07:17:34', 'closed', 'Jomarie Labios', '44 Espiritu St. Marulas Val. City', '09051127633', 'jomarielabios22@yahoo.com', '2015-11-22', 6),
(21, '2016-02-11 09:22:45', '2016-02-11 09:22:45', 'pending', 'Mark Joshua Abrenica', 'address 101', '234', '', '2016-02-18', NULL),
(22, '2016-02-11 09:26:00', '2016-02-11 09:26:00', 'pending', '', '', '', '', '2016-02-18', NULL),
(23, '2016-02-11 10:52:07', '2016-02-11 10:52:07', 'pending', ' ', 'some address\r\n', '234', 'abrenicamarkjoshua@zoho.com', '2016-02-18', NULL),
(24, '2016-02-11 11:01:11', '2016-02-11 11:02:56', 'on-delivery-process', ' ', 'some address\r\n', '234', 'abrenicamarkjoshua@zoho.com', '2016-02-18', 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `customer_address` text COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `middleName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobileNumber` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `customer_address`, `name`, `lastname`, `firstname`, `middleName`, `mobileNumber`, `userType`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, '', 'gomeco', 'Abrenica', 'Mark Joshua', '', '09175824979', 'Admin', 'abrenicamarkjoshua@gmail.com', '$2y$10$wdG1d8mGHPXejoY6K8HZkeadXPFDAYFJbp.kwtAgILueehfNWyMvS', 'F4l1LvJUIyHv1STAxG84h5einMxlKKsQFfJaHfYXIdjI9nkrz9x4MJjPgyBR', '0000-00-00 00:00:00', '2016-02-11 03:07:31'),
(4, '95 bansalangin street, veterans village', 'dan joel', '', '', '', '09175824979', '', 'abrenicamarkjoshua@yahoo.com', '$2y$10$wdG1d8mGHPXejoY6K8HZkeadXPFDAYFJbp.kwtAgILueehfNWyMvS', '04DaYRmaZ3LUWTHIg40WuXvGxOIc4Q4oR4ZQmCYsj5yWUrQfcR4b2ctFVts9', '2015-11-13 13:32:35', '2015-12-06 23:39:58'),
(5, 'maysan, valenzuela city', 'ryan', '', '', '', '09279492744', '', 'ryan@gmail.com', '$2y$10$IwzS9mvZk0L7mYDXi4MkW.Q7ac9vZvRtIPMkVSxMNSmlwR0fSXkq.', '4F02ZxkMZnbSteAx5MQPIjJLAhqSUVlhMjbEwDlYdBSLcv3NZko3rKXzEIkC', '2015-11-14 14:39:40', '2015-11-14 15:03:23'),
(6, '44 Espiritu St. Marulas Val. City', 'Jomarie Labios', '', '', '', '09051127633', '', 'jomarielabios22@yahoo.com', '$2y$10$ekJlVgCoFF5MM0PpjsvSaO8YNsaVxvuOCemi6C359nKNpYLd92jLG', 'MeR75LEyx6U27huudnyMxP5c43QxWW6ZZnD0l2qLVcduFnft9fGbFuLnI6eS', '2015-11-14 15:10:44', '2015-11-14 15:11:58'),
(7, '', 'ojit', 'abrenica', 'john joseph', 'rivera', '09175824979', 'Admin', 'abrenicajohnjoseph@yahoo.com', '$2y$10$xlr4rQm9Z.XyDceR6rNps.NC6ggHD5YYXl8Dc4pghlfHCSZhsJSOW', 'm7I1mVDvEX5PNadwl8HBQqxKxYO4fWVIRE3X0QFUIS8pLQSNZdMiLF3LvfDY', '2015-12-07 00:07:27', '2015-12-07 00:07:58'),
(8, 'some address\r\n', 'joshua', 'Abrenica', 'Mark Joshua', 'Rivera', '234', '', 'abrenicamarkjoshua@zoho.com', '$2y$10$JVX2B/L0fx47yGJbLoG83unA300ytmQ0aanOv0UWizg5GH6HrtbI6', 'vtlFypGaCoUyk9obHmfUaCBMwvS67QS1CrB8peuGnFfpLDcW9yQlwf3CiC7y', '2016-02-11 01:24:58', '2016-02-11 03:14:46');

-- --------------------------------------------------------

--
-- Table structure for table `usersession`
--

CREATE TABLE `usersession` (
  `id` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `productpictures`
--
ALTER TABLE `productpictures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchaseorders`
--
ALTER TABLE `purchaseorders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `usersession`
--
ALTER TABLE `usersession`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `productpictures`
--
ALTER TABLE `productpictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `purchaseorders`
--
ALTER TABLE `purchaseorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
