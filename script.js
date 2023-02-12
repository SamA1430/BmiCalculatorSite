$(document).ready(function(){
    $("#calculate").click(function(){
        var weight = $("#weight").val();
        var height = $("#height").val();
        height = (height/100)**2;
        var bmi = weight/height;
        bmi = Math.round(bmi);
        if (isNaN(bmi)){
            $(".result").html("<h1>Please enter valids values</h1>");
        }
        else{
            $(".result").html("<h1>Your BMI is : "+ bmi +"</h1>");
        }
    })
});