<?php 

/* Credentials */
$servername = "localhost";
// $username = "ohsclntg_weight";
// $password = "weightLoss";
// $database = "ohsclntg_weightloss";

$username = "root";
$password = "";
$database = "diet";



/* Connection */
$conn = new mysqli($servername, $username, $password, $database);

/* If connection fails for some reason */
if ($conn->connect_error) {
	die("Database connection failed: ". $conn->connect_error);
}

?>