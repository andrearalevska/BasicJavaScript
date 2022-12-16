let numbers = [];

for (n = 0; n <10; n++){
    numbers.push (parseInt(prompt("Insert a number to create an array")))
}

let checktype = prompt ("Do you want to check for even or odd numbers?");
if(checktype !== "odd" && checktype !== "even"){
    alert("Please choose valid type.");
}

function findNumber (array, type){

    for (n = 0; n < array.length; n++){
        
        if(type == "even"){
            if(array[n] % 2 == 0){
                console.log(array[n]);
            }
        }
        else if(type == "odd"){
            if(array[n] % 2 !== 0){
                console.log(array[n]);
            }

        }

    }
}


findNumber(numbers, checktype);

