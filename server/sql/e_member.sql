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

 Date: 03/07/2022 17:37:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for e_member
-- ----------------------------
DROP TABLE IF EXISTS `e_member`;
CREATE TABLE `e_member`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `mid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `phonenumber` int NULL DEFAULT NULL COMMENT '联系方式',
  `createdate` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '注册日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of e_member
-- ----------------------------
INSERT INTO `e_member` VALUES (3, '9d29d796-9e8b-4d02-9a05-a0ed7559fbf4', 'admin', 'b3ddbc502e307665f346cbd6e52cc10d', NULL, '1656667375181');
INSERT INTO `e_member` VALUES (4, 'aea4006a-8a04-4eb0-a8cf-09bfff1031b8', 'qwy', '12138d192d48763c1813d397b702ca1d', NULL, '1656667398052');

SET FOREIGN_KEY_CHECKS = 1;
