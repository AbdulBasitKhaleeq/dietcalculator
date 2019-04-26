<?php 
if(!isset($_SESSION)) { session_start();} 
require ('config/dbconnect.php');

if (isset($_POST["saveDiet"]) && isset($_POST["food_array"]) && is_array($_POST["food_array"]) && is_array($_POST["ex_array"])){

    $name = $_POST["name"];
    $age = $_POST["age"];
    $gender = $_POST["gender"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $lifestyle = $_POST["lifestyle"];
    $autolife = $_POST["autolife"];

    //$weight_to_be_reduced = $_POST["food_array"];
    //$calories_to_burn = $_POST["food_array"];
    //$days_need = $_POST["food_array"];
    
    $ideal_weight = $_POST["idealWeight"];
    $bmr = $_POST["bmr"];
    $maintain_weight_calories = $_POST["reqCal"];
    $initial_daily_calories_burn = $_POST["initialCalNeed"];

    $start_date = $_POST["goalStart"];
    $end_date = $_POST["goalEnd"];
    

    $idU=$_SESSION['user_id'];
    $sql = "INSERT INTO plan(name, gender, age, weight, height, lifestyle, autolife, idealWeight, bmr, reqCal, initialCal, goalStart, goalEnd, userId) VALUES ('$name', '$gender', '$age', '$weight', '$height', '$lifestyle', '$autolife', '$ideal_weight', '$bmr', '$maintain_weight_calories', '$initial_daily_calories_burn', '$start_date', '$end_date', '$idU' )";
    
    $pid='';
    if ($conn->query($sql) === TRUE) {
        //header('Location: registration.php');
        $pid=$conn->insert_id;
        //$_SESSION['SuccessMessage'] = 'User has been created!'+ $conn->insert_id;
    }else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        header('Location: index.php');
        exit();
    }

    
    //related to food
    $food_array = array_filter($_POST["food_array"]);
    $servings_array = array_filter($_POST["servings_array"]);
    $calories_array = array_filter($_POST["calories_array"]);
    $protein_array = array_filter($_POST["protein_array"]);
    
    // //related to exercises
    $ex_array = array_filter($_POST["ex_array"]);
    $minutes_array = array_filter($_POST["minutes_array"]);
    $ex_calories_array = array_filter($_POST["ex_calories_array"]);
    
    // echo
    
    $foodSize = count($food_array);
    for($num =0; $num < $foodSize; $num++){
        $sql = "INSERT INTO foodchart( planId, foodId, servings, calories, protiens, week) VALUES ('$pid', '$food_array[$num]','$servings_array[$num]','$calories_array[$num]','$protein_array[$num]', '1' )";
        if (mysqli_query($conn, $sql) === False){
            echo "Error: " . $sql . "<br>" . $conn->error;
            exit();
        }
    }
    
    $exSize = count($ex_array);
    for($num =0; $num < $exSize; $num++){
        $sql = "INSERT INTO exchart( planId, exId, minutes, calories, week) VALUES ('$pid', '$ex_array[$num]','$minutes_array[$num]','$ex_calories_array[$num]', '1' )";
        if (mysqli_query($conn, $sql) === False){
            echo "Error: " . $sql . "<br>" . $conn->error;
            exit();
        }
    }

    header('Location: index.php');
    $_SESSION['SuccessMessage'] = 'Plan Stored successfully!';
    exit();
    
    
}
else{
    echo ("<h2 class='text-center'>Select Both Expercise and Food in your diet Chart</h2>");
    $_SESSION['SuccessMessage'] = 'Failed to add!';
    exit();
}
?>