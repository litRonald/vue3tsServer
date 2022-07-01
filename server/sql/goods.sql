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

 Date: 01/07/2022 14:07:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '商品名称',
  `productPrice` int NOT NULL DEFAULT 0 COMMENT '价格',
  `productImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '商品图',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10008 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (10001, '小米6', 2499, 'mi6.jpg');
INSERT INTO `goods` VALUES (10002, '小米笔记本', 3999, 'note.jpg');
INSERT INTO `goods` VALUES (10003, '小米6', 2499, 'mi6.jpg');
INSERT INTO `goods` VALUES (10004, '小米6+', 2499, '1.jpg');
INSERT INTO `goods` VALUES (10005, '小米6-', 1499, '2.jpg');
INSERT INTO `goods` VALUES (10006, '小米5', 2000, '3.jpg');
INSERT INTO `goods` VALUES (10007, '小米4', 1800, '4.jpg');
INSERT INTO `goods` VALUES (10008, '小米3', 1699, '5.jpg');

SET FOREIGN_KEY_CHECKS = 1;
