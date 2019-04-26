// Get date formatted as YYYY-MM-DD
function getFormattedDate (date) {
        //console.log("clled me");
        return date.getFullYear()
            + "-"
            + ("0" + (date.getMonth() + 1)).slice(-2)
            + "-"
            + ("0" + date.getDate()).slice(-2);
}
function addDays(theDate, days) {
        return new Date(theDate.getTime() + days*24*60*60*1000);
}

function get_food_options(data){
        opt ='';
        //console.log(data);
        for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        opt +="<option value='"+ obj['food_id'] +"'>"+obj['food_name']+"</option>";
        
        }
        //console.log(opt);
        return opt;
    }
    
    function get_ex_options(data){
        opt ='';
        //console.log(data);
        for(var i = 0; i < data.length; i++) {
        var obj = data[i];
        opt +="<option value='"+ obj['ex_id'] +"'>"+obj['ex_name']+"</option>";
        
        }
        //console.log(opt);
        return opt;
    }
    
    function getObject(objs, key, val) {
        for (var i = 0; i < objs.length; i++){
            if (objs[i].ex_id == val){
            return objs[i];
            }
        }
    }
    function getFoodObject(objs, val) {
        
        for (var i = 0; i < objs.length; i++){
            
            if (objs[i].food_id == val){
            return objs[i];
            }
        }
    }


jQuery(document).ready(function(){
//load data from database and assign it to the input fields
var food_wrapper = $(".food-wrapper"); //Input fields wrapper
var ex_wrapper    = $(".ex-wrapper"); //Input fields wrapper

$.ajax({url : "https://weightloss.ohsclub.com/classes/getplan.php",success:function(data, status){
//$.get("http://localhost/calculator/classes/getplan.php", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    //planData = JSON.stringify(data);
    
    planData = JSON.parse(data);
    //console.log(planData[0]);
    planData = planData[0];
    
    jQuery("#name").val(planData['name']);
    jQuery("#age").val(planData['age']);
    jQuery("#height").val(planData['height']);
    jQuery("#weight").val(planData['weight']);
    jQuery("#gender").val(planData['gender']);
    jQuery("#lifestyle").val(planData['lifestyle']);
    jQuery("#autolife").val(planData['autolife']);
    jQuery("#idealWeight").val(planData['idealWeight']);
    
    weightValue = planData['weight'] - planData['idealWeight'];
    jQuery(".weightReduc").html( weightValue + " Kg");
    jQuery(".calBurn").text(parseInt(planData['initialCal']) + " caloies");
    jQuery(".displaykg").text(parseInt(planData['idealWeight']));
    jQuery("#bmr").val(parseInt(planData['bmr']));
    jQuery("#reqCal").val(parseInt(planData['reqCal']));
    
    jQuery("#initialCalNeed").val(parseInt(planData['initialCal']));
    jQuery("#goalStart").val(planData['goalStart']);
    jQuery("#goalEnd").val(planData['goalEnd']);
    
    today = planData['goalStart'];
    goalEnd = planData['goalEnd'];


    var planId = planData['planId'];
    var foodData;
    var foodOpt;

    
    $.get("https://weightloss.ohsclub.com/classes/foodsOptions.php", function(data, status){
    //$.get("http://localhost/calculator/classes/foodsOptions.php", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    foodData = JSON.parse(data);
    foodOpt = get_food_options(foodData);

        $.get("https://weightloss.ohsclub.com/classes/getFoodChart.php?planId="+planId, function(data, status){
                //$.get("http://localhost/calculator/classes/getFoodChart.php?planId="+planId, function(data, status){
                
                MyfoodObjs = JSON.parse(data);

                for(x=0; x <MyfoodObjs.length; x++){ 
                        $(food_wrapper).append('<div style="margin: 15px 0px 15px 0px;"><div class="row"><div class="col-md-3"><select name="food_array[]" onchange="foodChange("food_array[]")" class="form-control">'+foodOpt+'</select></div><div class="col-md-3"><input type="number" class="form-control" name="servings_array[]" placeholder="" value="1" min="1"></div><div class="col-md-3"><input type="number" class="form-control" name="calories_array[]" placeholder="" value="1" min="0" readonly></div><div class="col-md-2"><input type="number" class="form-control" name="protein_array[]" placeholder="" min="0" value="1" readonly></div><a href="javascript:void(0);" class="remove_field btn">X</a><br></div></div>');
                }
                AllfoodDivs=$(food_wrapper).find("div.row");
                //console.log(AllfoodDivs.length);
                for(rows =0 ; rows < AllfoodDivs.length; rows++){
                        endNodes = AllfoodDivs[rows];
                        //console.log(endNodes.children[0].children[0].value);
                        endNodes.children[0].children[0].value = MyfoodObjs[rows]['foodId'];
                        endNodes.children[1].children[0].value= MyfoodObjs[rows]['servings'];
                        endNodes.children[2].children[0].value= MyfoodObjs[rows]['calories'];
                        endNodes.children[3].children[0].value= MyfoodObjs[rows]['protiens'];
                }
                
        });


    });


    var exData;
    var exOpt;
    
//http://localhost/diet/
    $.get("https://weightloss.ohsclub.com/classes/exOptions.php", function(data, status){
        //$.get("http://localhost/calculator/classes/exOptions.php", function(data, status){
    exData = JSON.parse(data);
    exOpt = get_ex_options(exData);
        $.get("https://weightloss.ohsclub.com/classes/getExChart.php?planId="+planId, function(data, status){
                //$.get("http://localhost/calculator/classes/getExChart.php?planId="+planId, function(data, status){
                
                MyExObjs = JSON.parse(data);

                for(x=0; x <MyExObjs.length; x++){ 
                        $(ex_wrapper).append('<div style="margin: 15px 0px 15px 0px;"><div class="row"><div class="col-md-3"><select name="ex_array[]" class="form-control">'+exOpt+'</select></div><div class="col-md-3"><input type="number" class="form-control" name="minutes_array[]" placeholder="" value="1" min="1"></div><div class="col-md-3"><input type="number" class="form-control" name="ex_calories_array[]" value="1" placeholder="" readonly></div><a href="javascript:void(0);" class="remove_field btn" >X</a><br></div></div>');
                }
                
                AllExDivs=$(ex_wrapper).find("div.row");
                //console.log(AllfoodDivs.length);
                for(rows =0 ; rows < AllExDivs.length; rows++){
                        endNodes = AllExDivs[rows];
                        //console.log(endNodes.children[0].children[0].value);
                        endNodes.children[0].children[0].value = MyExObjs[rows]['exId'];
                        endNodes.children[1].children[0].value= MyExObjs[rows]['minutes'];
                        endNodes.children[2].children[0].value= MyExObjs[rows]['calories'];
                }


        });
    });
    
    
 


},async : false});
    


jQuery("#goalEnd").change(function(){
if (jQuery("#goalStart").val()=="") {
	jQuery("#goalStart").after("<b class='text-danger'>Please select start date</b>");
}
});

jQuery("#goalStart").change(function(){
if (jQuery("#goalStart").val()!=="") {
	jQuery("#goalStart").next("b").remove();
}
});
if (jQuery("#idealWeight").change()) {
jQuery("#idealWeight").change(function(){




var age=jQuery("#age").val();
var gender=jQuery("#gender").val();
var height=jQuery("#height").val();
var weight=jQuery("#weight").val();
var idealWeight=jQuery("#idealWeight").val();
var weightReduc=0;
var calBurn=0;
	weightReduc=weight-idealWeight;
	if (weightReduc<=0) {
			weightReduc=0;
			calBurn=0;
		}
		else{
			calBurn=weightReduc*7700;
		}
	jQuery(".weightReduc").html(weightReduc+" KG");
	jQuery(".calBurn").html(calBurn);

		// Declare variables
var goalEnd=((weightReduc*7700)/500);
jQuery(".reachGoal").html(Math.round(goalEnd));
var today = new Date();
var anydate = addDays(today, goalEnd);
var weightReduc=jQuery("#weight").val()-jQuery("#idealWeight").val();
if (weightReduc<=0) {
	weightReduc=0;
}


// Set values
jQuery("#goalStart").val(getFormattedDate(today));
jQuery("#goalEnd").val(getFormattedDate(anydate));



});
}




jQuery(".inputchange").change(function(){

var age=jQuery("#age").val();
var gender=jQuery("#gender").val();
var height=jQuery("#height").val();
var weight=jQuery("#weight").val();
var lifestyle=jQuery("#lifestyle").val();



var activityFactor=0;
var bmr=0;
var reqCal=activityFactor*bmr;
var activityFactorExp="";


//ideal weight



var heightCm=height;
var inches=heightCm/2.54;
var extrainches=inches-60;
extrainches=Math.round(extrainches);
var idealWeightkg=0;
var weightReduc=0;
var calBurn=0;
// ideal weight

	// bmr + ideal weight code

	if (gender=="male"){
		bmr=(10*weight)+(6.25*height)-(5*age)+5; 
		jQuery("#bmr").val(bmr);
		idealWeightkg=50+(2.3*extrainches);
		idealWeightkg=Math.round(idealWeightkg);
		if (idealWeightkg<=0) {
			idealWeightkg=0;
		}
		jQuery("#idealWeight").val(idealWeightkg);
		var displaykg="<span class='fontSize'>"+ jQuery("#idealWeight").val() +" KG</span>";
		jQuery(".displaykg").html(displaykg);
		weightReduc=weight-jQuery("#idealWeight").val();
		if (weightReduc<=0) {
			weightReduc=0;
			calBurn=0;
		}
		else{
			calBurn=weightReduc*7700;
		}
		jQuery(".weightReduc").html(weightReduc+" KG");
		jQuery(".calBurn").html(calBurn);

	}
	else if(gender=="female"){
		bmr=(10*weight)+(6.25*height)-(5*age)-161; 
		jQuery("#bmr").val(bmr);
		idealWeightkg=45.5+(2.3*extrainches);
		idealWeightkg=Math.round(idealWeightkg);
		if (idealWeightkg<=0) {
			idealWeightkg=0;
		}
		jQuery("#idealWeight").val(idealWeightkg);
		var displaykg="<span class='fontSize'>"+ jQuery("#idealWeight").val() +" KG</span>";
		jQuery(".displaykg").html(displaykg);
		weightReduc=weight-jQuery("#idealWeight").val();
		if (weightReduc<=0) {
			weightReduc=0;
			calBurn=0;
		}
		else{
			calBurn=weightReduc*7700;
		}
		jQuery(".weightReduc").html(weightReduc+" KG");
		jQuery(".calBurn").html(calBurn);
	
		

	}
	else
	{

	}
		// Declare variables
var goalEnd=((weightReduc*7700)/500);
jQuery(".reachGoal").html(Math.round(goalEnd));


var today = new Date();
var anydate = addDays(today, goalEnd);
var weightReduc=jQuery("#weight").val()-jQuery("#idealWeight").val();
if (weightReduc<=0) {
	weightReduc=0;
}

// Set values
jQuery("#goalStart").val(getFormattedDate(today));
jQuery("#goalEnd").val(getFormattedDate(anydate));
$("#repetedCalories").text($("#initialCalNeed").val());
$("#repetedCalori").text($("#initialCalNeed").val());



// Get date formatted as YYYY-MM-DD
function getFormattedDate (date) {
    return date.getFullYear()
        + "-"
        + ("0" + (date.getMonth() + 1)).slice(-2)
        + "-"
        + ("0" + date.getDate()).slice(-2);
}
function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}



	if(lifestyle=="Sedentary"){
		activityFactor=1.2;
		reqCal=activityFactor*bmr;
		activityFactorExp="LITTLE TO NO EXERCISE";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(reqCal);
		jQuery("#initialCalNeed").val(reqCal-500);

	}
	else if(lifestyle=="Light activity"){
		activityFactor=1.375;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 1-2 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(reqCal);
		jQuery("#initialCalNeed").val(reqCal-500);
	}
		
	else if(lifestyle=="Moderate activity"){
		activityFactor=1.55;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 3-5 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(reqCal);
		jQuery("#initialCalNeed").val(reqCal-500);
	}
	else if(lifestyle=="Very Active"){
		activityFactor=1.725;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 6-7 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(reqCal);
		jQuery("#initialCalNeed").val(reqCal-500);
	}
	else if(lifestyle=="Extra Active"){
		activityFactor=1.9;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 6-7 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(reqCal);
		jQuery("#initialCalNeed").val(reqCal-500);
	}
	else{
		activityFactor=0;
		reqCal=activityFactor*bmr;
	}
	


})

//buttons inside Circle function
jQuery("#idealWeight").hide();
jQuery("#saveBtn").click(function(){

jQuery("#idealWeight").hide();
var displaykg="<span class='fontSize'>"+ jQuery("#idealWeight").val() +" KG</span>";
jQuery(".displaykg").show();
jQuery(".displaykg").html(displaykg);

});
jQuery("#editBtn").click(function(){

jQuery("#idealWeight").show().removeClass("disabledBg");
jQuery(".displaykg").hide();

});


jQuery("#reviewBtn").click(function(){
    
    var days = parseInt(jQuery(".reachGoal").text());
    //console.log(days);
    //console.log("start at" + jQuery("#goalStart").val());
    var startAt = new Date(jQuery("#goalStart").val());
    opt ='';
    for(var i = 0, j = 0; i < days; i+=7, j++) {
            //console.log(getFormattedDate(addDays(today, i)));
            opt +="<tr><td>"+getFormattedDate(addDays(startAt, i))+"</td><td>"+ (parseInt(jQuery("#weight").val()) - j * 0.5) +"</td><td></td></tr>";
    }

        jQuery("#reviewData").html("<table class='table table-striped'>"+
    "<thead><tr><th class='text-center'>Review Date</th><th class='text-center'>Expected Weight Reduction</th>"+
    "<th class='text-center'>Actual Weight reduction</th>"+
    "</tr></thead><tbody class='text-center'>"+opt+"</tbody></table>") ;
    
});


})//document.ready function

