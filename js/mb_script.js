


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

jQuery(document).ready(function(){
 

jQuery("#goalEnd").change(function(){

if (jQuery("#goalStart").val()=="") {
	jQuery("#goalStart").after("<b class='text-danger'>Please select start date</b>");
}



});

jQuery("#goalStart").change(function(){
if (jQuery("#goalStart").val()!=="") {
console.log(jQuery("#goalStart").val());

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
		jQuery("#bmr").val(parseInt(bmr));
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
		jQuery("#bmr").val(parseInt(bmr));
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





	if(lifestyle=="Sedentary"){
		activityFactor=1.2;
		reqCal=activityFactor*bmr;
		activityFactorExp="LITTLE TO NO EXERCISE";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(parseInt(reqCal));
		jQuery("#initialCalNeed").val(parseInt(reqCal-500));

	}
	else if(lifestyle=="Light activity"){
		activityFactor=1.375;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 1-2 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(parseInt(reqCal));
		jQuery("#initialCalNeed").val(parseInt(reqCal-500));
	}
		
	else if(lifestyle=="Moderate activity"){
		activityFactor=1.55;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 3-5 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(parseInt(reqCal));
		jQuery("#initialCalNeed").val(parseInt(reqCal-500));
	}
	else if(lifestyle=="Very Active"){
		activityFactor=1.725;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 6-7 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(parseInt(reqCal));
		jQuery("#initialCalNeed").val(parseInt(reqCal-500));
	}
	else if(lifestyle=="Extra Active"){
		activityFactor=1.9;
		reqCal=activityFactor*bmr;
		activityFactorExp="EXERCISE 6-7 DAYS/WEEK";
		jQuery("#autolife").val(activityFactorExp);
		jQuery("#reqCal").val(parseInt(reqCal));
		jQuery("#initialCalNeed").val(parseInt(reqCal-500));
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

 


// jQuery("#reviewBtn").click(function(){
//         alert("jello");
//         var days = parseInt(jQuery(".reachGoal").text());
//         var startAt = new Date(jQuery("#goalStart").val());
//         opt ='';
//         for(var i = 0, j = 0; i < days; i+=7, j++) {
//                 //console.log(getFormattedDate(addDays(today, i)));
//                 opt +="<tr><td>"+getFormattedDate(addDays(startAt, i))+"</td><td>"+ (parseInt(jQuery("#weight").val()) - j * 0.5) +"</td><td></td></tr>";
//         }

//         console.log("hello");
//             jQuery("#reviewData").html("<table class='table table-striped'>"+
//         "<thead><tr><th class='text-center'>Review Date</th><th class='text-center'>Expected Weight Reduction</th>"+
//         "<th class='text-center'>Actual Weight reduction</th>"+
//         "</tr></thead><tbody class='text-center'>"+opt+"</tbody></table>") ;
        
// });


});//document.ready function



