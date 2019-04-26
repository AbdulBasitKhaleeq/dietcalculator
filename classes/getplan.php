<?php
if(!isset($_SESSION)) { session_start();} 
require ('../config/dbconnect.php');

$data= array();

$uid = $_SESSION['user_id'];
$sql="SELECT * FROM plan where userId = $uid";
$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result)> 0) {

    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
    
}
 
?>