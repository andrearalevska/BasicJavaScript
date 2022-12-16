let sum = 0;

for (let n = 101; n <= 150; n++) {
    let m = Math.pow(n,2);
    sum = sum + m;
    
}

console.log("The sum of squares of the numbers from 101 to 150 is:")
console.log(sum);