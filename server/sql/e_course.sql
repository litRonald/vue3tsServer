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

 Date: 03/07/2022 17:37:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for e_course
-- ----------------------------
DROP TABLE IF EXISTS `e_course`;
CREATE TABLE `e_course`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `subjectname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subjectcode` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of e_course
-- ----------------------------
INSERT INTO `e_course` VALUES (1, '语文', 1);
INSERT INTO `e_course` VALUES (2, '数学', 2);
INSERT INTO `e_course` VALUES (3, '英语', 3);
INSERT INTO `e_course` VALUES (4, '物理', 4);
INSERT INTO `e_course` VALUES (5, '生物', 5);
INSERT INTO `e_course` VALUES (6, '历史', 6);
INSERT INTO `e_course` VALUES (7, '政治', 7);
INSERT INTO `e_course` VALUES (8, '地理', 8);

SET FOREIGN_KEY_CHECKS = 1;
