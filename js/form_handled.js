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

function get_food_options(data){
    opt ='';
    //console.log(data);
    for(var i = 0; i < data.length; i++) {
    var obj = data[i];
    opt +="<option value='"+ obj['food_id'] +"'>"+obj['food_name']+"</option>";
    
    }
    console.log(opt);
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

$(document).ready(function() {


    var max_food_fields = 10; //Maximum allowed input fields 
    var food_wrapper    = $(".food-wrapper"); //Input fields wrapper
    var add_food_button = $(".add_food_fields"); //Add button class or ID
    var x = 1; //Initial input field is set to 1
	var y = 1;
    var foodData;
    var foodOpt;
    
    $.ajax({
        url: "https://weightloss.ohsclub.com/classes/foodsOptions.php",
        dataType: "jsonp",
        success: function (data) {
            foodData = JSON.parse(data);
            foodOpt = get_food_options(foodData);
        }
      });

    $.get("https://weightloss.ohsclub.com/classes/foodsOptions.php", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    //foodData = JSON.parse(data);
    foodData =data;
    foodOpt = get_food_options(foodData);
    },"json" );
    
    var exData;
    var exOpt;
    

    $.get("https://weightloss.ohsclub.com/classes/exOptions.php", function(data, status){
    //exData = JSON.parse(data);
    exData=data;
    exOpt = get_ex_options(exData);
    },"json" );
    


	//When user click on add input button
	$(add_food_button).click(function(e){
        e.preventDefault();
		//Check maximum allowed input fields
        if(x < max_food_fields){ 
            x++; //input field increment
			 //add input field <option value="">Food Item </option></select>
            $(food_wrapper).append('<div style="margin: 15px 0px 15px 0px;"><div class="row"><div class="col-md-3"><select name="food_array[]" onchange="foodChange("food_array[]")" class="form-control">'+foodOpt+'</select></div><div class="col-md-3"><input type="number" class="form-control" name="servings_array[]" placeholder="" value="" min="1"></div><div class="col-md-3"><input type="number" class="form-control" name="calories_array[]" placeholder="" value="" min="0" readonly></div><div class="col-md-2"><input type="number" class="form-control" name="protein_array[]" placeholder="" min="0" value="" readonly></div><a href="javascript:void(0);" class="remove_field btn">X</a><br></div></div>');
        }
    });
	
    //when user click on remove button
    $(food_wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault();
		$(this).parent('div').remove(); //remove inout field
		x--; //inout field decrement
    })


    //Exercise items
    var max_ex_fields = 10; //Maximum allowed input fields 
    var ex_wrapper    = $(".ex-wrapper"); //Input fields wrapper
    var add_ex_button = $(".add_ex_fields"); //Add button class or ID
    var y = 1; //Initial input field is set to 1
	
	//When user click on add input button
	$(add_ex_button).click(function(e){
        e.preventDefault();
		//Check maximum allowed input fields
        if(y < max_ex_fields){ 
            y++;
            $(ex_wrapper).append('<div style="margin: 15px 0px 15px 0px;"><div class="row"><div class="col-md-3"><select name="ex_array[]" class="form-control">'+exOpt+'</select></div><div class="col-md-3"><input type="number" class="form-control" name="minutes_array[]" placeholder="" value="1" min="1"></div><div class="col-md-3"><input type="number" class="form-control" name="ex_calories_array[]" value="1" placeholder="" readonly></div><a href="javascript:void(0);" class="remove_field btn" >X</a><br></div></div>');
        }
    });
	
    //when user click on remove button
    $(ex_wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault();
		$(this).parent('div').remove(); //remove inout field
		y--; //inout field decrement
    });

    $(ex_wrapper).on("change","select", function(e){ 
        e.preventDefault();
        selected = $(this).val();
        o = getObject(exData,'ex_id',selected);
        console.log(o['ex_cal']); //remove inout field
        parent = $(this).parent('div');
        siblings = parent.siblings()
        cals = siblings[1].children;
        cals = cals[0];
        cals.value=o['ex_cal'];
        //console.log(cals.value);
        //console.log(cals.val());
        
            
    });
    
    $(food_wrapper).on("change","input[name='servings_array[]']", function(e){ 
        e.preventDefault();
        selected = $(this).val();
        //console.log(selected);
        parent = $(this).parent('div');
        siblings = parent.siblings()
        //console.log(siblings);
        // get food and its object form food objects
        food = siblings[0].children;
        food = food[0];
        o = getFoodObject(foodData,food.value);  
        pro = siblings[2].children;
        pro = pro[0];
        pro.value = o['food_protein']*selected; 
        cals = siblings[1].children;
        cals = cals[0];
        cals.value=o['food_cal']*selected;
        //console.log(cals.value);                
    });
    
    //on select change in Foods
    $(food_wrapper).on("change","select", function(e){ 
        e.preventDefault();
        selected = $(this).val();
        //console.log(selected);
        o = getFoodObject(foodData,selected);
        //console.log(o['food_protein']); //remove inout field
        parent = $(this).parent('div');
        siblings = parent.siblings()
        ser = siblings[0].children;
        ser = ser[0];
        ser.value = 1;
        pro = siblings[2].children;
        pro = pro[0];
        pro.value = o['food_protein']; 
        cals = siblings[1].children;
        cals = cals[0];
        cals.value=o['food_cal'];
        //console.log(cals.value);                
    });
    
    $(".foodPlanSection").on("change","div", function(e){
        
        e.preventDefault();

        foodAll=$(".food-wrapper").find("div.row");
        exAll=$(".ex-wrapper").find("div.row");
        var calo=0;
        var prot=0;
        for(j =0;j < foodAll.length; j++){
             
                ch = foodAll[j].children;
                c = ch[2].children;
                p = ch[3].children;
                calo = calo + parseInt(c[0].value);
                prot = prot + parseInt(p[0].value);
            
        }

        for(i =0;i < exAll.length; i++){
             
             ea = exAll[i].children;
             ea = ea[2].children;
             calo = calo + parseInt(ea[0].value);
        }
        //console.log("calories: "+ calo +" prot: "+ prot);
        $("#sumCalories").text("Total calories: "+ calo +" and protiens: "+ prot);
        
        $("#repetedCalories").text($("#initialCalNeed").val());
        $("#repetedCalori").text($("#initialCalNeed").val());
        
    });
    
    
   


$("#reviewBtn").on("click",function(){
        alert("jello");
        var days = parseInt(jQuery(".reachGoal").text());
        var startAt = new Date(jQuery("#goalStart").val());
        opt ='';
        for(var i = 0, j = 0; i < days; i+=7, j++) {
                //console.log(getFormattedDate(addDays(today, i)));
                opt +="<tr><td>"+getFormattedDate(addDays(startAt, i))+"</td><td>"+ (parseInt(jQuery("#weight").val()) - j * 0.5) +"</td><td></td></tr>";
        }

        console.log("hello");
            jQuery("#reviewData").html("<table class='table table-striped'>"+
        "<thead><tr><th class='text-center'>Review Date</th><th class='text-center'>Expected Weight Reduction</th>"+
        "<th class='text-center'>Actual Weight reduction</th>"+
        "</tr></thead><tbody class='text-center'>"+opt+"</tbody></table>") ;
        
});

});
