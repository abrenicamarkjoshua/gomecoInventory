-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 18, 2016 at 03:48 AM
-- Server version: 5.5.45-cll-lve
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gomeco`
--

-- --------------------------------------------------------

--
-- Table structure for table `audittrail`
--

CREATE TABLE IF NOT EXISTS `audittrail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `purchaseorder_id` int(11) NOT NULL,
  `trail` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `audittrail`
--

INSERT INTO `audittrail` (`id`, `purchaseorder_id`, `trail`, `created_at`, `updated_at`) VALUES
(1, 1, 'Admin updated order status to : on-delivery-process', '2016-03-18 09:01:20', '2016-03-18 09:01:20');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

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
(10, 13, 35, '2015-11-15 06:54:12', '2015-11-15 06:54:12'),
(11, 14, 0, '2016-03-10 06:30:44', '2016-03-10 06:30:44'),
(12, 15, 1, '2016-03-10 06:31:28', '2016-03-10 06:31:28'),
(13, 16, 0, '2016-03-10 06:36:31', '2016-03-10 06:36:31'),
(14, 17, 3, '2016-03-10 06:37:49', '2016-03-10 06:40:25'),
(15, 18, 1, '2016-03-10 07:12:31', '2016-03-10 07:12:31'),
(16, 19, 1, '2016-03-10 07:13:23', '2016-03-10 07:13:23'),
(17, 20, 1, '2016-03-10 07:14:15', '2016-03-10 07:14:15'),
(18, 21, 1, '2016-03-10 07:15:28', '2016-03-10 07:15:28'),
(19, 22, 1, '2016-03-10 07:16:24', '2016-03-10 07:16:24'),
(20, 23, 1, '2016-03-10 07:17:15', '2016-03-10 07:17:15'),
(21, 24, 1, '2016-03-10 07:18:27', '2016-03-10 07:18:27'),
(22, 25, 1, '2016-03-10 07:19:29', '2016-03-10 07:19:29'),
(23, 26, 1, '2016-03-10 07:20:10', '2016-03-10 07:20:10'),
(24, 27, 1, '2016-03-10 07:21:08', '2016-03-10 07:21:08'),
(25, 28, 1, '2016-03-10 07:22:01', '2016-03-10 07:22:01'),
(26, 29, 1, '2016-03-10 07:24:05', '2016-03-10 07:24:05'),
(27, 30, 1, '2016-03-10 07:25:00', '2016-03-10 07:25:00'),
(28, 31, 1, '2016-03-10 07:26:12', '2016-03-10 07:26:12'),
(29, 32, 1, '2016-03-10 07:26:56', '2016-03-10 07:26:56'),
(30, 33, 1, '2016-03-10 07:27:37', '2016-03-10 07:27:37'),
(31, 34, 1, '2016-03-10 07:29:19', '2016-03-10 07:29:19'),
(32, 35, 1, '2016-03-10 07:30:33', '2016-03-10 07:30:33'),
(33, 36, 1, '2016-03-10 07:31:30', '2016-03-10 07:31:30'),
(34, 37, 1, '2016-03-10 07:32:18', '2016-03-10 07:32:18'),
(35, 38, 1, '2016-03-10 07:33:32', '2016-03-10 07:33:32'),
(36, 39, 1, '2016-03-10 07:35:31', '2016-03-10 07:35:31'),
(37, 40, 1, '2016-03-10 07:36:28', '2016-03-10 07:36:28'),
(38, 41, 1, '2016-03-10 07:40:48', '2016-03-10 07:40:48'),
(39, 42, 12500, '2016-03-18 01:26:08', '2016-03-18 01:26:08');

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
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `purchaseorders_id` (`purchaseorders_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `purchaseorders_id`, `productName`, `quantity`, `created_at`, `updated_at`, `amount`) VALUES
(1, 1, 'SS Wall Shelf', 1, '2016-03-18 08:42:57', '2016-03-18 08:42:57', '1.00'),
(2, 1, 'Dishwashing Sinktable (Tubular Bracing w partial bottomshelf)', 1, '2016-03-18 08:42:57', '2016-03-18 08:42:57', '1.00');

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
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `productpictures`
--

INSERT INTO `productpictures` (`id`, `product_id`, `picture`, `created_at`, `updated_at`) VALUES
(26, 18, 'images/Beverage Counter (Apron Panel).jpg', '2016-03-10 07:12:56', '2016-03-10 07:12:56'),
(27, 19, 'images/Beverage Counter (Front Panel).jpg', '2016-03-10 07:13:47', '2016-03-10 07:13:47'),
(28, 20, 'images/Dimsum Steamer (Double Bowl).jpg', '2016-03-10 07:14:34', '2016-03-10 07:14:34'),
(29, 21, 'images/Dimsum Steamer (Single Bowl).jpg', '2016-03-10 07:15:56', '2016-03-10 07:15:56'),
(30, 22, 'images/Grease Trap (5, 10 , 15 GPM).jpg', '2016-03-10 07:16:43', '2016-03-10 07:16:43'),
(31, 23, 'images/Silver Caddy (4 Holes).jpg', '2016-03-10 07:17:37', '2016-03-10 07:17:37'),
(32, 24, 'images/Silver Caddy (6 Holes).jpg', '2016-03-10 07:18:50', '2016-03-10 07:18:50'),
(33, 25, 'images/Siopao Display Warmer.jpg', '2016-03-10 07:19:42', '2016-03-10 07:19:42'),
(34, 26, 'images/Steamer Box.jpg', '2016-03-10 07:20:35', '2016-03-10 07:20:35'),
(35, 27, 'images/2 Open Top Range Counter Top Model.jpg', '2016-03-10 07:21:31', '2016-03-10 07:21:31'),
(36, 28, 'images/4 Open Top Range Counter Top Model.jpg', '2016-03-10 07:23:32', '2016-03-10 07:23:32'),
(37, 29, 'images/4 Open Top Range with Oven.jpg', '2016-03-10 07:24:26', '2016-03-10 07:24:26'),
(38, 30, 'images/6 Open Top Range Counter Top Model.jpg', '2016-03-10 07:25:19', '2016-03-10 07:25:19'),
(39, 31, 'images/6 Open Top Range with Oven and Open Cabinet.jpg', '2016-03-10 07:26:27', '2016-03-10 07:26:27'),
(40, 32, 'images/6 Open Top Range with Stand.jpg', '2016-03-10 07:27:13', '2016-03-10 07:27:13'),
(41, 33, 'images/Asian Wok_1 Burner.jpg', '2016-03-10 07:27:55', '2016-03-10 07:27:55'),
(42, 34, 'images/Asian Wok_2 Burner.jpg', '2016-03-10 07:29:40', '2016-03-10 07:29:40'),
(43, 35, 'images/Asian Wok_3 Burner.jpg', '2016-03-10 07:30:50', '2016-03-10 07:30:50'),
(44, 36, 'images/Clean Dish Table.jpg', '2016-03-10 07:31:48', '2016-03-10 07:31:48'),
(45, 37, 'images/Dishwashing Sinktable (Tubular Bracing w partial bottomshelf).jpg', '2016-03-10 07:32:34', '2016-03-10 07:32:34'),
(46, 38, 'images/Dishwashing Sinktable (Tubular Bracing).jpg', '2016-03-10 07:34:39', '2016-03-10 07:34:39'),
(47, 39, 'images/Sinktable (Island Type).jpg', '2016-03-10 07:35:46', '2016-03-10 07:35:46'),
(48, 40, 'images/Sinktable.jpg', '2016-03-10 07:36:44', '2016-03-10 07:36:44'),
(49, 41, 'images/SS Wall Shelf.jpg', '2016-03-10 07:41:00', '2016-03-10 07:41:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) NOT NULL,
  `productDesc` text NOT NULL,
  `sellingprice` decimal(10,2) NOT NULL,
  `category_id` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `productDesc`, `sellingprice`, `category_id`, `picture`, `created_at`, `updated_at`) VALUES
(18, 'Beverage Counter (Apron Panel)', 'Beverage Counter (Apron Panel)', '1.00', 1, 'images/Beverage Counter (Apron Panel).jpg', '2016-03-10 07:13:02', '2016-03-10 14:13:02'),
(19, 'Beverage Counter (Front Panel)', 'Beverage Counter (Front Panel)', '1.00', 1, 'images/Beverage Counter (Front Panel).jpg', '2016-03-10 07:13:54', '2016-03-10 14:13:54'),
(20, 'Dimsum Steamer (Double Bowl)', 'Dimsum Steamer (Double Bowl)', '1.00', 1, 'images/Dimsum Steamer (Double Bowl).jpg', '2016-03-10 07:15:01', '2016-03-10 14:15:01'),
(21, 'Dimsum Steamer (Single Bowl)', 'Dimsum Steamer (Single Bowl)', '1.00', 1, 'images/Dimsum Steamer (Single Bowl).jpg', '2016-03-10 07:16:00', '2016-03-10 14:16:00'),
(22, 'Grease Trap (5, 10 , 15 GPM)', 'Grease Trap (5, 10 , 15 GPM)', '1.00', 1, 'images/Grease Trap (5, 10 , 15 GPM).jpg', '2016-03-10 07:16:55', '2016-03-10 14:16:55'),
(23, 'Silver Caddy (4 Holes)', 'Silver Caddy (4 Holes)', '1.00', 1, 'images/Silver Caddy (4 Holes).jpg', '2016-03-10 07:18:04', '2016-03-10 14:18:04'),
(24, 'Silver Caddy (6 Holes)', 'Silver Caddy (6 Holes)', '1.00', 1, 'images/Silver Caddy (6 Holes).jpg', '2016-03-10 07:18:56', '2016-03-10 14:18:56'),
(25, 'Siopao Display Warmer', 'Siopao Display Warmer', '1.00', 1, 'images/Siopao Display Warmer.jpg', '2016-03-10 07:19:49', '2016-03-10 14:19:49'),
(26, 'Steamer Box', 'Steamer Box', '1.00', 1, 'images/Steamer Box.jpg', '2016-03-10 07:20:42', '2016-03-10 14:20:42'),
(27, '2 Open Top Range Counter Top Model', '2 Open Top Range Counter Top Model', '1.00', 2, 'images/2 Open Top Range Counter Top Model.jpg', '2016-03-10 07:21:39', '2016-03-10 14:21:39'),
(28, '4 Open Top Range Counter Top Model', '4 Open Top Range Counter Top Model', '1.00', 2, 'images/4 Open Top Range Counter Top Model.jpg', '2016-03-10 07:23:46', '2016-03-10 14:23:46'),
(29, '4 Open Top Range with Oven', '4 Open Top Range with Oven', '1.00', 2, 'images/4 Open Top Range with Oven.jpg', '2016-03-10 07:25:40', '2016-03-10 14:25:40'),
(30, '6 Open Top Range Counter Top Model', '6 Open Top Range Counter Top Model', '1.00', 2, 'images/6 Open Top Range Counter Top Model.jpg', '2016-03-10 07:25:24', '2016-03-10 14:25:24'),
(31, '6 Open Top Range with Oven and Open Cabinet', '6 Open Top Range with Oven and Open Cabinet', '1.00', 2, 'images/6 Open Top Range with Oven and Open Cabinet.jpg', '2016-03-10 07:26:34', '2016-03-10 14:26:34'),
(32, '6 Open Top Range with Stand', '6 Open Top Range with Stand', '1.00', 2, 'images/6 Open Top Range with Stand.jpg', '2016-03-10 07:27:21', '2016-03-10 14:27:21'),
(33, 'Asian Wok_1 Burner', 'Asian Wok_1 Burner', '1.00', 2, 'images/Asian Wok_1 Burner.jpg', '2016-03-10 07:28:00', '2016-03-10 14:28:00'),
(34, 'Asian Wok_2 Burner', 'Asian Wok_2 Burner', '1.00', 2, 'images/Asian Wok_2 Burner.jpg', '2016-03-10 07:30:07', '2016-03-10 14:30:07'),
(35, 'Asian Wok_3 Burner', 'Asian Wok_3 Burner', '1.00', 2, 'images/Asian Wok_3 Burner.jpg', '2016-03-10 07:30:57', '2016-03-10 14:30:57'),
(36, 'Clean Dish Table', 'Clean Dish Table', '1.00', 3, 'images/Clean Dish Table.jpg', '2016-03-10 07:31:54', '2016-03-10 14:31:54'),
(37, 'Dishwashing Sinktable (Tubular Bracing w partial bottomshelf)', 'Dishwashing Sinktable (Tubular Bracing w partial bottomshelf)', '1.00', 3, 'images/Dishwashing Sinktable (Tubular Bracing w partial bottomshelf).jpg', '2016-03-10 07:32:43', '2016-03-10 14:32:43'),
(38, 'Dishwashing Sinktable (Tubular Bracing)', 'Dishwashing Sinktable (Tubular Bracing)', '1.00', 3, 'images/Dishwashing Sinktable (Tubular Bracing).jpg', '2016-03-10 07:34:45', '2016-03-10 14:34:45'),
(39, 'Sinktable (Island Type)', 'Sinktable (Island Type)', '1.00', 3, 'images/Sinktable (Island Type).jpg', '2016-03-10 07:35:54', '2016-03-10 14:35:54'),
(40, 'Sinktable', 'Sinktable', '1.00', 3, 'images/Sinktable.jpg', '2016-03-10 07:36:55', '2016-03-10 14:36:55'),
(41, 'SS Wall Shelf', 'SS Wall Shelf', '1.00', 3, 'images/SS Wall Shelf.jpg', '2016-03-10 07:41:26', '2016-03-10 14:41:26'),
(42, 'asd', 'we', '100.00', 1, '', '2016-03-18 08:26:08', '2016-03-18 08:26:08');

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
  `remarks` varchar(255) NOT NULL,
  `userverified` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `purchaseorders`
--

INSERT INTO `purchaseorders` (`id`, `created_at`, `updated_at`, `status`, `customer_name`, `customer_address`, `customer_mobile`, `customer_email`, `deadline`, `user_id`, `remarks`, `userverified`) VALUES
(1, '2016-03-18 08:42:57', '2016-03-18 09:01:20', 'on-delivery-process', 'joshua', 'sm the grass residences unit 1717b tower 1, quezon city, philippines', '09175829479', 'abrenicamarkjoshua@gmail.com', '2016-03-25', 31, '', 'Verified thru email');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=33 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `customer_address`, `name`, `lastname`, `firstname`, `middleName`, `mobileNumber`, `userType`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `token`, `active`) VALUES
(2, '', 'gomeco', 'abrenica', 'Mark Joshua', 'rivera', '09175824979', 'Admin', 'abrenicamarkjoshua@gmail2.com', '$2y$10$GBioDbxd73E9ONSELN7D8uKgehnNgJKvJzS7VtekEM3NsckbIhgpy', 'Qi9QJpeLDwlIaqNV2cueXcvxVClI5SKfEbyhetKgd1xGbpSmVPotX0nmHIKm', '0000-00-00 00:00:00', '2016-03-18 08:25:34', NULL, 0),
(31, 'sm the grass residences unit 1717b tower 1, quezon city, philippines', 'joshua', '', '', 'rivera', '09175829479', '', 'abrenicamarkjoshua@gmail.com', '$2y$10$gCzyEp/96K3IIwf0Cu0nxuiWc1hJqk1dwoYeFZdZJmEwYvj1LIP3.', 'LSGeyFFwSokoGFwocbuyajFVcrh4bNsviFZmdEby29GYYJL9c04kNXSrAsWG', '2016-03-18 14:54:54', '2016-03-18 15:43:19', 'cfe7ehKtpa38Blnb3ukVPAPe88Ak8M', 1),
(32, '#44 Espiritu St. Marulas Val. City', 'ldaisuke', '', '', 'remillo', '09051127633', '', 'jomarielabios@gmail.com', '$2y$10$x50TTCUsdQsh.o9i6sop4.gg3VnUXw6iwB/Tpk2urK3bMGjpqJqvO', 'QO16P6fJ8zyxhCDmdIGMmSSoTToGy9Rnhfjk356bi7PDYyGzVbhActH7dq0W', '2016-03-18 15:42:46', '2016-03-18 16:06:12', 'wjglOs3s6BIcaZUvCnlksIeInZGrnc', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usersession`
--

CREATE TABLE IF NOT EXISTS `usersession` (
  `id` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`purchaseorders_id`) REFERENCES `purchaseorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productpictures`
--
ALTER TABLE `productpictures`
  ADD CONSTRAINT `productpictures_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `purchaseorders`
--
ALTER TABLE `purchaseorders`
  ADD CONSTRAINT `purchaseorders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
