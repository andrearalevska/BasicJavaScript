let sumofArr = [4, 6, 859, 1236, 52];

let sum = 0;
let n = 0;

function sumofnumbers (somearray) {
    while (n < somearray.length) {
        sum = sum + somearray [n];
            if (typeof (somearray[n]) != "number") {
                return console.log ("Error, not a valid number i this array!");
            }
            else (n++);
    }
    return sum;

}

console.log (sumofnumbers(sumofArr));

