let firstArray = [25,6,9,89,59,89,9,4,25,9,63,777,85,9,9,9,9,45,9];
let secondArray = [25,69,85,66,456,968,9,32,569,74,81,5,25,96,87,32];
let thirdArray = [9,9,9,9,9,56,9,6,98,89,999,94,63,9,9,9,9,9,9,4,9,44,9,52,99];

function findArray (number, array){
    let x = 0;

    for(n = 0; n < array.length; n++){
        if (array[n] == number){
            x += 1
        }
    }

    console.log(`There is ${x} occurrences of number ${number} in the array.`)
}          
        
   
findArray(9,firstArray);
findArray(9,secondArray);
findArray(9,thirdArray);

