<?php
require ('../config/dbconnect.php');

$data= array();

$sql="SELECT * FROM exercise";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result)> 0) {

    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}
?>