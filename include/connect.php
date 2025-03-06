<?php
 

 $dsn = "mysql:host=localhost;dbname=bia_db;charset=utf8mb4";
 try {
 $connect = new PDO($dsn, 'root', 'root');
 } catch (Exception $e) {
   error_log($e->getMessage());
   exit('unable to connect');
 }



 ?>