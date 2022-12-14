let examplearray = [25, 666, 89, 13, 9, 48, 369, 6];

function maxnum (numbers) {
    
    let i = 0;
    let max = numbers[0];

    while (i < numbers.length) {

        if(numbers[i] > max) {
            
            max = numbers[i];
        }
        i++;
    }
    return max;
}

function minnum (numbers) {
    
    let i = 0;
    let min = numbers[0];

    while (i < numbers.length) {

        if (numbers[i] < min) {

            min = numbers[i];
        }
        i++;
    }
    return min;
}

function sum (a, b) {

    let result = a + b;
    return result;
}

let a = maxnum (examplearray);
let b = minnum (examplearray);

console.log (sum (a, b));

