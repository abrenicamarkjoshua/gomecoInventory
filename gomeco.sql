-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2015 at 01:36 PM
-- Server version: 5.5.27
-- PHP Version: 5.6.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+08:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gomeco`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

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

CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

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

CREATE TABLE IF NOT EXISTS `migrations` (
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

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `purchaseorders_id` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `purchaseorders_id`, `productName`, `quantity`, `created_at`, `updated_at`, `amount`) VALUES
(10, 9, 'hoffman caserole', 1, '2015-11-13 23:36:56', '2015-11-13 23:36:56', 1500),
(11, 9, 'test2', 1, '2015-11-13 23:36:56', '2015-11-13 23:36:56', 200),
(12, 10, 'hoffman caserole', 1, '2015-11-13 23:47:23', '2015-11-13 23:47:23', 1500),
(13, 10, 'Electric bread stove', 1, '2015-11-13 23:47:23', '2015-11-13 23:47:23', 7832),
(14, 11, 'Pressure cooker', 1, '2015-11-14 03:31:09', '2015-11-14 03:31:09', 1300),
(15, 11, 'hoffman caserole', 1, '2015-11-14 03:31:09', '2015-11-14 03:31:09', 1500),
(16, 13, 'Pressure cooker', 1, '2015-11-14 04:51:41', '2015-11-14 04:51:41', 1300),
(17, 13, 'Electric bread stove', 1, '2015-11-14 04:51:41', '2015-11-14 04:51:41', 7832),
(18, 13, 'White Refridgerator', 1, '2015-11-14 04:51:41', '2015-11-14 04:51:41', 7832),
(19, 14, 'Pressure cooker', 1, '2015-11-14 04:56:00', '2015-11-14 04:56:00', 1300),
(20, 15, 'Electric bread stove', 1, '2015-11-14 05:58:21', '2015-11-14 05:58:21', 7832),
(21, 16, 'Electric bread stove', 1, '2015-11-14 06:06:57', '2015-11-14 06:06:57', 7832),
(22, 16, 'hoffman caserole', 1, '2015-11-14 06:06:57', '2015-11-14 06:06:57', 1500),
(23, 17, 'hoffman caserole', 1, '2015-11-14 06:13:17', '2015-11-14 06:13:17', 1500),
(24, 18, 'Electric bread stove', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', 7832),
(25, 18, 'Dark grey stainless steel kitchen desk', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', 7832),
(26, 18, '6-ingridient holder stainless steel drawer', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', 7832),
(27, 18, 'Pressure cooker', 1, '2015-11-15 06:42:54', '2015-11-15 06:42:54', 1300),
(28, 19, 'Pressure cooker', 1, '2015-11-15 07:08:15', '2015-11-15 07:08:15', 1300),
(29, 19, 'test name', 1, '2015-11-15 07:08:15', '2015-11-15 07:08:15', 1000),
(30, 20, 'Electric bread stove', 1, '2015-11-15 07:15:23', '2015-11-15 07:15:23', 7832),
(31, 20, 'hoffman caserole', 1, '2015-11-15 07:15:23', '2015-11-15 07:15:23', 1500);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productpictures`
--

CREATE TABLE IF NOT EXISTS `productpictures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

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

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) NOT NULL,
  `productDesc` text NOT NULL,
  `sellingprice` decimal(10,0) NOT NULL,
  `category_id` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `productDesc`, `sellingprice`, `category_id`, `picture`, `created_at`, `updated_at`) VALUES
(1, 'Dark grey stainless steel kitchen desk', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', 7832, 3, 'product/01.jpg', '2015-10-24 12:35:39', '0000-00-00 00:00:00'),
(2, 'White stainless steel kitchen desk', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', 7832, 3, 'product/02.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '6-ingridient holder stainless steel drawer', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', 7832, 1, 'product/03.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'White Refridgerator', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', 7832, 3, 'product/04.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Electric bread stove', 'Dimension: 8x8\r\nWeight: 12kg\r\nWarranty: 1 year\r\n', 7832, 2, 'images/a-img.jpg', '2015-11-09 07:40:42', '2015-11-08 23:40:42'),
(6, 'test name', 'test desc', 1000, 0, 'images/a-img2.jpg', '2015-11-11 09:35:17', '2015-11-11 01:35:17'),
(7, 'test2', 'test desc2', 200, 0, 'images/a-img1.jpg', '2015-11-11 09:35:37', '2015-11-11 01:35:37'),
(8, 'Pressure cooker', 'Size: large\r\nColor: silver, black\r\n', 1300, 1, 'images/lifetime-brands-vasconia-8qt-pressure-cooker_94987.jpg', '2015-11-03 07:15:39', '2015-11-02 23:15:39'),
(12, 'hoffman caserole', 'Diameter: 21cm\r\nDepth: 11.5cm\r\n-Induction-Friendly\r\n-Fast heating\r\n-High-grade & quality stainless steel\r\n-Multi layered of 18/10 stainless steel for durability and aluminum alloy for quick and even heat transfer.\r\n-Beneath the pot or pan is the heat absorbent and heat transmission design.\r\n-Rounded edges prevent spillage while pouring water or soup.', 1500, 3, 'images/hoffman1.jpg', '2015-11-07 01:24:15', '2015-11-06 17:24:15'),
(13, 'shades', 'Rayban\r\n3x3\r\nbrown\r\npolycarbonated soda', 1000, 3, 'images/handshake-logo-766477.gif', '2015-11-15 06:57:00', '2015-11-14 22:57:00');

-- --------------------------------------------------------

--
-- Table structure for table `purchaseorders`
--

CREATE TABLE IF NOT EXISTS `purchaseorders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_address` text NOT NULL,
  `customer_mobile` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `deadline` date NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `purchaseorders`
--

INSERT INTO `purchaseorders` (`id`, `created_at`, `updated_at`, `status`, `customer_name`, `customer_address`, `customer_mobile`, `customer_email`, `deadline`, `user_id`) VALUES
(15, '2015-11-14 05:58:21', '2015-11-14 05:58:21', 'pending', 'dan joel', '95 bansalangin street, veterans village', '09175824979', 'abrenicamarkjoshua@yahoo.com', '2015-11-21', 4),
(16, '2015-11-14 06:06:57', '2015-11-14 06:06:57', 'pending', 'dan joel', '95 bansalangin street, veterans village', '09175824979', 'abrenicamarkjoshua@yahoo.com', '2015-11-21', 4),
(17, '2015-11-14 06:13:17', '2015-11-14 06:13:17', 'pending', 'dan joel', '95 bansalangin street, veterans village', '09175824979', 'abrenicamarkjoshua@yahoo.com', '2015-11-21', 4),
(18, '2015-11-15 06:42:54', '2015-11-15 06:48:41', 'closed', 'ryan', 'maysan, valenzuela city', '09279492744', 'ryan@gmail.com', '2015-11-22', 5),
(19, '2015-11-15 07:08:15', '2015-11-15 07:08:15', 'pending', 'Jomarie Labios', 'Espiritu St. Marulas Val. City', '09051127633', 'jomarielabios22@yahoo.com', '2015-11-22', NULL),
(20, '2015-11-15 07:15:23', '2015-11-15 07:17:34', 'closed', 'Jomarie Labios', '44 Espiritu St. Marulas Val. City', '09051127633', 'jomarielabios22@yahoo.com', '2015-11-22', 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customer_address` text COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `middleName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobileNumber` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `customer_address`, `name`, `lastname`, `firstname`, `middleName`, `mobileNumber`, `userType`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'unit 1717b tower 1\r\nSM THE GRASS RESIDENCES,\r\nMisamis Street,\r\nBrgy.  Bago Bantay,\r\nQuezon City', 'gomeco', 'Abrenica', 'Mark Joshua', '', '09175824979', 'Admin', 'abrenicamarkjoshua@gmail.com', '$2y$10$vbuLIOHkW51z/w.MkvHzFOIJy2pZ4jhj/kHPN0MbmD6xLLIhLpkki', 'UIeLDGzxzllVAf3G9o04OEGK9ynHQMSdT2g99uw4NcS0RwpcIxduj4y4tkwQ', '0000-00-00 00:00:00', '2015-11-14 17:52:46'),
(4, '95 bansalangin street, veterans village', 'dan joel', '', '', '', '09175824979', '', 'abrenicamarkjoshua@yahoo.com', '$2y$10$wdG1d8mGHPXejoY6K8HZkeadXPFDAYFJbp.kwtAgILueehfNWyMvS', 'SbmUM59KgTpBjwkETl5Fha1oKthASqOFiK1HcXaleLmj67kfiDnofK68GFP6', '2015-11-13 21:32:35', '2015-11-14 17:50:23'),
(5, 'maysan, valenzuela city', 'ryan', '', '', '', '09279492744', '', 'ryan@gmail.com', '$2y$10$IwzS9mvZk0L7mYDXi4MkW.Q7ac9vZvRtIPMkVSxMNSmlwR0fSXkq.', '4F02ZxkMZnbSteAx5MQPIjJLAhqSUVlhMjbEwDlYdBSLcv3NZko3rKXzEIkC', '2015-11-14 22:39:40', '2015-11-14 23:03:23'),
(6, '44 Espiritu St. Marulas Val. City', 'Jomarie Labios', '', '', '', '09051127633', '', 'jomarielabios22@yahoo.com', '$2y$10$ekJlVgCoFF5MM0PpjsvSaO8YNsaVxvuOCemi6C359nKNpYLd92jLG', 'MeR75LEyx6U27huudnyMxP5c43QxWW6ZZnD0l2qLVcduFnft9fGbFuLnI6eS', '2015-11-14 23:10:44', '2015-11-14 23:11:58');

-- --------------------------------------------------------

--
-- Table structure for table `usersession`
--

CREATE TABLE IF NOT EXISTS `usersession` (
  `id` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
