<?php 
 if(!isset($_SESSION)) { session_start();} 
 include_once 'header.php';
 require ('config/dbconnect.php');

//var_dump($_POST);

if (isset($_POST["submit"]) && isset($_POST["food_array"]) && is_array($_POST["food_array"]) && is_array($_POST["ex_array"])){
    
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
    


    
    //related to food
    $food_array = array_filter($_POST["food_array"]);
    $servings_array = array_filter($_POST["servings_array"]);
    $calories_array = array_filter($_POST["calories_array"]);
    $protein_array = array_filter($_POST["protein_array"]);
    
    // //related to exercises
    $ex_array = array_filter($_POST["ex_array"]);
    $minutes_array = array_filter($_POST["minutes_array"]);
    $ex_calories_array = array_filter($_POST["ex_calories_array"]);
        

?>

<style>
.invoice-title h4 {
    display: inline-block;
}

.table > tbody > tr > .no-line {
    border-top: none;
}

.table > thead > tr > .no-line {
    border-bottom: none;
}

.table > tbody > tr > .thick-line {
    border-top: 2px solid;
}

</style>
<div class="container">
    <div class="row">
        <div class="col-xs-12">
        <img src="./site_logo.svg">
        <br>
    		<div class="invoice-title">
    			<h4>Name</h4><?php echo ('<h4 class="pull-right">'.$name.'</h4>'); ?>
    		</div>
    		<hr>
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    				<strong>Age:</strong><br>
    					Weight<br>
    					Height<br>
    					Lifestyle<br>
    					Daily Activity<br>
                        Start Date<br>
                        Goal Date
    				</address>
    			</div>
    			<div class="col-xs-6 text-right">
    				<address>
        			<strong><?php echo $age; ?></strong><br>
                    <?php echo $weight; ?><br>
                    <?php echo $height; ?><br>
                    <?php echo $lifestyle; ?><br>
    				<?php echo $autolife; ?><br>
                    <?php echo $start_date; ?><br>
                    <?php echo $end_date; ?>
    				</address>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    					<strong>Weight Loss calculations:</strong><br>
    					Ideal weight for you<br>
                        weight to be reduced<br>
                        <strong>YOUR BASAL METABOLIC RATE:</strong><br>
                        YOUR CALORIE REQUIREMENT FOR MAINTAING WEIGHT IS<br>
                        INITIAL DAILY CALORIE NEED FOR WEIGHT REDUCTION<br>
    				</address>
    			</div>
    			<div class="col-xs-6 text-right">
    				<address>
                        <br>
    					<strong><?php echo $ideal_weight; ?></strong><br>
    					<?php echo ($weight - $ideal_weight); ?><br>
                        <strong><?php echo ($bmr); ?></strong><br>
                        <?php echo ($maintain_weight_calories); ?><br>
                        <?php echo ($initial_daily_calories_burn); ?><br>
    				</address>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>Deit Chart</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Food Item</strong></td>
        							<td class="text-center"><strong>Servings</strong></td>
        							<td class="text-center"><strong>Calories</strong></td>
                                    <td class="text-right"><strong>Protiens</strong></td>
                                </tr>
    						</thead>
    						<tbody>

                                <?php 
                                    $foodSize = count($food_array);
                                    $sum_cal= 0;
                                    $sum_prot= 0;

                                    for($num =0; $num < $foodSize; $num++){
                                        $food_no = $food_array[$num];
                                        $sql = "SELECT food_name from food_items where food_id = $food_no";
                                        $result = $conn->query($sql);
                                        $foodName= '';
                                        if (mysqli_num_rows($result) > 0) {
                                            while($row = mysqli_fetch_assoc($result)) {
                                                $foodName = $row['food_name']; 
                                            }
                                        }
                                        $sum_cal = $sum_cal +  $calories_array[$num];
                                        
                                        $protiens = 0;
                                        try{  
                                            if(empty($protein_array[$num]))
                                                {$protiens = 0;}
                                            throw new Exception("Value must be 1 >");
                                        }
                                        catch(Exception $e) {
                                           $protiens = $protein_array[$num];
                                        }
                                        $sum_prot = $sum_prot + $protiens;

                                        echo('<tr><td>'.$foodName.'</td>');                                        
                                        echo('<td class="text-center">'.$servings_array[$num].'</td>');
                                        echo('<td class="text-center">'.$calories_array[$num].'</td>');
                                        echo('<td class="text-right">'.$protiens.'</td></tr>');
                                    }
                                ?>
    							
    							<tr>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line text-center">Subtotal <?php echo $sum_cal;?> </td>
    								<td class="thick-line text-right">Subtotal <?php echo $sum_prot;?></td>
    							</tr>

    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>

    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>Ecercise Chart</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Exercise</strong></td>
        							<td class="text-center"><strong>Minutes</strong></td>
        							<td class="text-right"><strong>Calories Consumed</strong></td>
                                </tr>
    						</thead>
    						<tbody>

                                <?php 
                                    $exSize = count($ex_array);
                                    $sum_cal= 0;

                                    for($num =0; $num < $exSize; $num++){
                                        $ex_no = $ex_array[$num];
                                        $sql = "SELECT ex_name from exercise where ex_id = $ex_no";
                                        $result = $conn->query($sql);
                                        $exName= '';
                                        if (mysqli_num_rows($result) > 0) {
                                            while($row = mysqli_fetch_assoc($result)) {
                                                $exName = $row['ex_name']; 
                                            }
                                        }
                                        $sum_cal = $sum_cal +  $ex_calories_array[$num];
                                        echo('<tr><td>'.$exName.'</td>');                                        
                                        echo('<td class="text-center">'.$minutes_array[$num].'</td>');
                                        echo('<td class="text-right">'.$ex_calories_array[$num].'</td>');
                                    }
                                ?>
    							
    							<tr>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line text-right">Subtotal <?php echo $sum_cal;?> </td>
    								
    							</tr>

    						</tbody>
                        </table>
                        <br>
                        <p>Signatures: ----------------</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>


</div>


<?php 

}
else{
    echo ("<h2 class='text-center'>Error: Select Both Expercise and Food in your diet Chart</h2>");
    header('Location: index.php');
    $_SESSION['SuccessMessage'] = 'Failed to add!';
    exit();
}

?>

<script>
$(document).ready(function() {
    window.print();
});
</script>