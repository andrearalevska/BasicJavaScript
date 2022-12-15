let choice = prompt("If you want to convert dog years - Type 'dog', for human years, type 'human'")
let years = prompt ("Enter the year here:");


function calculateYears (year, type) {
    if(type === "dog"){
        return year / 7;
    }
    else if (type === "human"){
        return  year * 7;
    }

}

alert(calculateYears(years, choice))