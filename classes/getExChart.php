<?php
if(!isset($_SESSION)) { session_start();} 
require ('../config/dbconnect.php');

$planId = $_GET['planId'];
$data= array();

$sql="SELECT * FROM exchart where planId = $planId";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result)> 0) {

    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

?>