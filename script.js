var age = document.getElementById("age")
var height = document.getElementById("measureH")
var weight = document.getElementById("measureW")
var male = document.getElementById("m")
var female = document.getElementById("f")

function calculate(){
    if(age.value=='' || height.value== '' || weight.value== '' || (male.checked ==false && female.checked==false)){
        alert('All fields are reqired!!');
    }
    else{
        countBmi();
    }
}

function countBmi(){
    var p= [age.value, height.value, weight.value];
    if(male.checked){
       p.push("male"); 
    }
    else
    {
        p.push("female");
    }


var bmi = (Number(p[2])/Number(p[1])/Number(p[1]))*10000;

var result ='';
if(bmi<18.5){
    result= 'Underweight';
}
else if(18.5<=bmi && bmi<=24.9){
    result='Healthy';
}
else if(25<=bmi && bmi<=29.9){
    result='Overweight';
}
else if(30<=bmi && bmi<=34.9){
    result='Obese';
}
else if(35<=bmi){
    result='fat mah boi!!! lose weight fast';
}


    document.querySelector(".result").style.display = "block";
    document.querySelector(".comment").innerHTML =`You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML= bmi.toFixed(2);

}