let currentyear = new Date().getFullYear()

function AgeCalculator (birthyear, currentyear) {
    let result = currentyear - birthyear;
    return result;
}

console.log (AgeCalculator (1996, currentyear));
console.log (AgeCalculator (1946, currentyear));
console.log (AgeCalculator (2006, currentyear));
console.log (AgeCalculator (2020, currentyear));