<?php include_once 'header.php'; ?>

<body>

<div class="container background">

    <div id="content" class="container-fluid background">
        <div class="container description">
            <a name="about"></a><h2><center>Weight Reduction Tool</center></h2>
			<h4><center>* This to be strictly used only in consultation with your doctor.</center></h4>

			<?php if(!empty($_SESSION['SuccessMessage'])): ?>
                <div class="alert alert-success alert-container" id="alert">
                    <strong><center><?php echo htmlentities($_SESSION['SuccessMessage']) ?></center></strong>
                    <?php unset($_SESSION['SuccessMessage']); ?>
                </div>
            <?php endif; ?>          
        </div>
	</div>
				
	<br><br>
				<div class="descText center-block">
					<hr class="colorgraph">    
				</div>
    
		<form method="POST" action="sample.php" enctype=""  target="_blank" id="calform">
		
		<div class="container" style="width:70%"><!-- .container-->
			<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4" style="padding-left: 10%;">
					<div class="circle bg-pink" style=" display: block; padding:20px; width:100px; height:20px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%; ">
										<h1 class="text-center">1</h1>
					</div>

					</div><div class="col-md-4"></div>
					
			</div>
			<h2 class="text-center">Enter Basic details</h2>
				<div class="row">
					<div class="col-md-12">
						<label for="name">Name:</label>
						<input type="text" class="form-control" name="name" id="name" placeholder="Enter your Name">
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-md-6">
						<label for="age">Age:</label>
							<input type="number" class="form-control inputchange" name="age" id="age" placeholder="Enter your Age" min="0" max="200">
					</div>
					<div class="col-md-6">
						<label for="gender">Gender:</label>
							<select name="gender" class="form-control inputchange" id="gender">
								<option value="">Select Gender</option>			
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
					</div>
					
					
				</div>
				<br>
				<div class="row">
					<div class="col-md-6">
						<label for="height">Height:</label>
							<input type="number" class="form-control inputchange" name="height" id="height" placeholder="cm" min="0" max="200">
					</div>
					<div class="col-md-6">
						<label for="weight">Weight:</label>
							<input type="number" name="weight" class="form-control inputchange" id="weight" min="0" max="500" placeholder="KG">
					</div>
					
					
				</div>

				<br>
				<div class="row">
					<div class="col-md-6">
						<label for="lifestyle">Lifestyle:</label>
							<select name="lifestyle" class="form-control inputchange" id="lifestyle">
								<option value="">Select Lifestyle</option>			
								<option value="Sedentary">Sedentary</option>
								<option value="Light activity">Light activity</option>
								<option value="Moderate activity">Moderate activity</option>
								<option value="Very Active">Very Active</option> 
								<option value="Extra Active">Extra Active</option>
							</select>
					</div>
					<div class="col-md-6">
						<label for="autolife"></label>
							<input type="text" name="autolife" class="form-control" readonly id="autolife">
					</div>
					
				</div>
				<br><br>
				<div class="descText center-block">
					<hr class="colorgraph">    
				</div>
				
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4" style="padding-left: 10%;">
					<div class="circle bg-pink" style=" display: block; padding:20px; width:100px; height:20px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%; ">
										<h1 class="text-center">2</h1>
					</div>

					</div><div class="col-md-4"></div>
					
				</div>

				<div class="row">
					<h2 class="text-center">Know your weight and calories parameters</h2>
				</div>
				<div class="row">
					<div class="auto-result-section">
							
							<div class="col-md-4">
								<div class="circle bg-primary" style=" padding:30px;width:240px; height:230px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%;">
									<p class="text-center">YOUR  MAXIMUM ALLOWED WEIGHT FOR HEIGHT IS</p>
									<input type="number" name="idealWeight" class="form-control disabledBg" style="margin:0 auto;" id="idealWeight" placeholder="Enter Ideal Weight">
									<span class="displaykg">N/A</span>
									<p style="margin-top: 5px;">
										<span class="editBtn btn btn-default btn-xs" id="editBtn">Edit</span>
										<span class="saveBtn btn btn-default btn-xs" id="saveBtn">Save</span>
									</p>
								</div>
							</div>
							
							<div class="col-md-4">
								<div class="report_data" >
									<p class="text-center"><b>WEIGHT TO BE REDUCED</b></p>
									<h3 class="text-center"><span class="weightReduc">N/A</span></h3>
									<strong class="text-center">CALORIES TO BURN</strong>
									<h3 class="text-center"><span class="calBurn">0</span></h3>
								</div>
							</div>
							
							<div class="col-md-4">
								<div class="report_data" >
									<strong class="text-center">Days to reach goal</strong>
									<h3 class="text-center"><span class="reachGoal">N/A</span></h3>
								</div>
							</div>
					</div>
				</div>
				<br><br>
				<div class="row">
					<div class="col-md-6">
						<div class="row">
							<div class="col-md-6">
							<label for="bmr" class="text-center">YOUR BASAL METABOLIC RATE (BMR) IS</label>
							</div>
							<div class="col-md-6">
							<input type="text" class="form-control" name="bmr" id="bmr" readonly>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6">
							<label for="reqCal" class="text-center">Your calories need to maintain weight</label>
							</div>
							<div class="col-md-6">
							<input type="text" class="form-control" name="reqCal" id="reqCal" readonly>
							</div>
						</div>

					</div>
					<div class="col-md-6">
						<div class="row">
								<div class="col-md-8">
								<label for="initialCalNeed" class="text-center">INITIAL DAILY CALORIE NEED FOR WEIGHT REDUCTION</label>
								</div>
								<div class="col-md-4">
								<input type="text" class="form-control" name="initialCalNeed" id="initialCalNeed" readonly>
								</div>
						</div>
						<div class="row">
							<h2 class="text-center">So plan Diet/Exercise chart for <span id="repetedCalories"></span> calories in next step</h2>
						</div>
					</div>
				</div>

				<br><br>
				<div class="descText center-block">
					<hr class="colorgraph">    
				</div>
				
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4" style="padding-left: 10%;">
					<div class="circle bg-pink" style=" display: block; padding:20px; width:100px; height:20px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%; ">
										<h1 class="text-center">3</h1>
					</div>

					</div><div class="col-md-4"></div>
					
				</div>
				<br>
				<div class="row">
					<h2 class="text-center">Start Your Weight Reduction Program</h2>
				</div>

				<div class="row">
					<div class="col-md-6">
						<label for="goalStart">Goal Start Date:</label>
						<input type="date" class="form-control" name="goalStart" id="goalStart" required="required">
						
					</div>
					<div class="col-md-6">
						<label for="goalEnd">Goal End Date:</label>
						<input type="date" class="form-control" name="goalEnd" id="goalEnd" readonly>
						
					</div>
				</div>
				
				<br><br>
				<div class="descText center-block">
					<hr class="colorgraph">    
				</div>
				
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4" style="padding-left: 10%;">
					<div class="circle bg-pink" style=" display: block; padding:20px; width:100px; height:20px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%; ">
										<h1 class="text-center">4</h1>
					</div>

					</div><div class="col-md-4"></div>
					
				</div>
				<br>
				<div class="row">
					<h2 class="text-center">Plan your own Diet and Exercise chart to match <span id="repetedCalories"></span> calories</h2>
					<p class="text-muted text-center">Exercise is mandatory</p>
				</div>
				<br>
				
				
				
				<div class="foodPlanSection">
					<br>
					<div class="row">
						<div class="col-md-4">
							
						</div>
						<div class="col-md-4 text-center">
						<h2 class="bg-indigo" style="color:#fff; padding: 5px; border-radius: 3px;">Food Item</h2>
						</div>
						<div class="col-md-4">
							
						</div>

					</div>
					<div class="row text-center">
						<div class="col-md-3">
							<b>Food Item</b>
						</div>
						<div class="col-md-3">
							<b>Servings</b>
						</div>
						<div class="col-md-3">
							<b>Calories</b>
						</div>
						<div class="col-md-3">
							<b>Protien</b>
						</div>
					</div><!-- food plan header -->

					<div class="food-wrapper">
					</div>
					
					<br>
					<div class="row">
						<div class="col-md-4">
							<button class="btn add_food_fields">Add Food Item</button>
						</div>
						<div class="col-md-4">
							
						</div>
						<div class="col-md-4">
							
						</div>

					</div>
					<br>
					<br>
					<div class="row text-center">
						<div class="col-md-4">
							
						</div>
						<div class="col-md-4">
							<h2 class="bg-indigo" style="color:#fff; padding: 5px; border-radius: 3px;">Exercise Items</h2>
						</div>
						<div class="col-md-4">
							
						</div>
					</div>
					<br>
					<div class="row">
						<div class="col-md-4 text-center">
							Exercise Item
						</div>
						<div class="col-md-4">
							<b>minutes</b>
						</div>
						<div class="col-md-4">
							<b>Calories</b>
						</div>
					</div><!-- food plan header -->
					<div class="ex-wrapper">
					</div>
					
					<br>
					<div class="row text-center">
						<div class="col-md-4">
							<button class="btn add_ex_fields">Add Exercise</button>
						</div>
						<div class="col-md-4">
							
						</div>
						<div class="col-md-4">
							
						</div>

					</div>
					<br><br>
					<div class="row">
						<h4 class="text-center" id="sumCalories"></h4> <!--Also add  -->
					</div>
					<br>
					<div class="row text-center">
						<div class="col-md-4">
							<!-- <button class="btn add_food_fields">Add Food Item</button> -->
						</div>
						<div class="col-md-4">
						<button type="save" name="saveDiet" id="downloadChart" class="btn">Download Chart</button>
							<!-- <button class="btn add_ex_fields">Add Exercise</button> -->
						</div>
						<div class="col-md-4">

						</div>

					</div>
					
				</div><!--.foodPlanSection-->
				
				
				
                <!-- <br>
                <div class="row text-center">
					<div class="col-md-4">
                        <button class="btn add_food_fields">Add Food Item</button>
                    </div>
					<div class="col-md-4">
                        <button class="btn add_ex_fields">Add Exercise</button>
					</div>
					<div class="col-md-4">
                        <button type="save" name="saveDiet" class="btn downloadChart">Download Chart</button>
					</div> -->
			
            
            <br><br><br>

		</form>
		
		<br><br>
			<div class="descText center-block">
                <hr class="colorgraph">    
			</div>
			
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4" style="padding-left: 10%;">
				<div class="circle bg-pink" style=" display: block; padding:20px; width:100px; height:20px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%; ">
									<h1 class="text-center">5</h1>
				</div>

				</div><div class="col-md-4"></div>
				
			</div>
			<br>
			<h2 class='text-center'>Weekly Review Table</h2>
			
			<div class="row" id="reviewData">
			</div>
			
			<div class="row text-center" >
				<div class="col-md-3"></div>
				<div class="col-md-3"><input class="btn" type='button' id='reviewBtn' value='Show Review table'></div>
				<div class="col-md-3"><input class="btn" type='button' id='btn_abc' value='Print' onclick='printDiv();'></div>
				<div class="col-md-3"></div>
			</div>			
			
			<br>
			</div><!-- .container-->
	</div><!-- .container-->
	
	<script>
	function printDiv() 
{

  var divToPrint=document.getElementById('reviewData');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><head> <link rel="stylesheet" href="css/bootstrap/css/bootstrap.css"></head><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}
</script>


   <!-- <script type='text/javascript' src="https://weightloss.ohsclub.com/js/jquery-3.3.1.min.js"></script> -->
    <script type='text/javascript' src="https://weightloss.ohsclub.com/js/form_handled.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->

    <script type='text/javascript' src="https://weightloss.ohsclub.com/js/mb_script.js"></script>
</body>