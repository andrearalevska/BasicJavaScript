 let stringArr = ["Hello", "there", "students", "of", "SEDC", "!"];

let n = 0;
let result = "";
function greeting (somearray) {
    while (n < somearray.length) {
        result = result + " " + (somearray[n]);
        n++;
    }
    return result;
}

alert (greeting (stringArr));
