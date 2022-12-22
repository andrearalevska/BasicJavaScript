let header = document.getElementById("header");
let resultParagraph = document.getElementById("resultParagraph");
let btn = document.getElementById("btn");

function weightinChickens(input){
    let chickenWeight = 0.5;
    
    input = parseInt(prompt("Enter your weight in kilograms here:"));
    console.log(typeof(input))
    if (isNaN(input)){
        alert ("Invalid input");
    }else{
        header.innerText = "Your weight is equivalent to:";
        resultParagraph.innerText =input/chickenWeight + " " + "chickens."
    }
}

btn.addEventListener("click", weightinChickens);

