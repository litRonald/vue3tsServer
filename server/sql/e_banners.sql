/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : goods

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 03/07/2022 17:36:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for e_banners
-- ----------------------------
DROP TABLE IF EXISTS `e_banners`;
CREATE TABLE `e_banners`  (
  `id` int NOT NULL,
  `image_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isshow` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of e_banners
-- ----------------------------
INSERT INTO `e_banners` VALUES (1, '“../image/1.jpg”', 'test', 1);
INSERT INTO `e_banners` VALUES (2, '\"../image/2.png\"', 'test', 0);
INSERT INTO `e_banners` VALUES (3, '“../image/3.png', '3', 1);
INSERT INTO `e_banners` VALUES (4, '“../image/4.png', '4', 0);

SET FOREIGN_KEY_CHECKS = 1;
