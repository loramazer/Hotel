-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `cliente_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `rg` varchar(12) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `preferencias` text,
  `pontos_fidelidade` int DEFAULT '0',
  `criado_em` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `data_nascimento` date NOT NULL,
  PRIMARY KEY (`cliente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (20,'lucas ','09378652603','1273894802','Rua Vicente Machado, 250','997876253','sla2@gmail.com',NULL,0,'2024-10-10 19:31:38','2024-10-10 19:31:38','1991-06-11'),(21,'Laura Mazer','11396151907','1469505','','42991415248','lauratopoma@gmail.com',NULL,0,'2024-10-10 21:45:38','2024-10-10 21:45:38','1986-10-17'),(22,'Laura Mazer','11396151907','','Rua Assis Brasil, 277','42991415248','sla@gmail.com',NULL,0,'2024-10-22 19:28:41','2024-10-22 19:28:41','2024-10-26'),(23,'Laura Mazer','11396151907','','Rua Souza Caldas, 179','42991415248','robson@gmail.com',NULL,0,'2024-10-22 19:39:30','2024-10-22 19:39:30','2024-11-08'),(24,'Laura Mazer','11396151907','','','42991415248','sla@gmail.com',NULL,0,'2024-10-22 19:51:05','2024-10-22 19:51:05','2024-10-31'),(25,'laura','11136571973','','','42991415248','robson@gmail.com',NULL,0,'2024-10-22 19:57:29','2024-10-22 19:57:29','2024-10-24'),(26,'Laura Mazer','11396151907','','','42991415248','lauratopoma@gmail.com',NULL,0,'2024-10-22 19:59:42','2024-10-22 19:59:42','2024-10-11'),(27,'Laura Mazer','11396151907','','','42991415248','lauratopoma@gmail.com',NULL,0,'2024-10-22 20:00:29','2024-10-22 20:00:29','2024-10-11');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-23 19:15:13
