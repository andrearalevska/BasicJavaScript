let words = [
    {
        word: "kiwi",
        hint: "with a furry, greenish-brown skin"
    },
    {
        word: "mango",
        hint: "exotic, oddly shaped"
    },
    {
        word: "avocado",
        hint: "green fruit with a large pit"
    },
    {
        word: "peach",
        hint: "soft, round, slightly furry"
    },
    {
        word: "banana",
        hint: "curved, yellow"
    },
    {
        word: "watermelon",
        hint: "large, with many seeds"
    },
    {
        word: "lemon",
        hint: "goes with tequila"
    },
    {
        word: "strawberry",
        hint: "low-growing, bright red color"
    },
    {
        word: "blueberry",
        hint: "small and round"
    },
];
document.getElementById("head").style.visibility = "hidden";
document.getElementById("leftArm").style.visibility = "hidden";
document.getElementById("body").style.visibility = "hidden";
document.getElementById("rightArm").style.visibility = "hidden";
document.getElementById("leftLeg").style.visibility = "hidden";
document.getElementById("rightLeg").style.visibility = "hidden";

var word_obj = words[Math.floor(Math.random() * words.length)];
let alphabetArray = ["a", "b", "c", "d", "u", "v", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "y", "z"];
let alphabet = document.getElementById("alphabet");
let lives = document.getElementById("lives");
let result = Number(lives.innerText);
let btn = document.getElementById("hint");
let play_again_btn = document.getElementById("playagain");
let hintText = document.getElementById("hint-text");
let go = document.getElementById("gameover");
let text1 = document.getElementById("text1");

var counter = 0;

let reveal = document.getElementById("reveal-lines");
var num_of_lett = word_obj.word.split("");
var new_array = [];
function playAgain() {
    lives.style.visibility = "visible";
    text1.style.visibility = "visible";
    btn.style.visibility = "visible";
    go.innerHTML = "";
    word_obj = words[Math.floor(Math.random() * words.length)];
    document.getElementById("reveal-lines").innerHTML = "";
    document.getElementById("lines").innerHTML = "";
    document.getElementById("head").style.visibility = "hidden";
    document.getElementById("leftArm").style.visibility = "hidden";
    document.getElementById("body").style.visibility = "hidden";
    document.getElementById("rightArm").style.visibility = "hidden";
    document.getElementById("leftLeg").style.visibility = "hidden";
    document.getElementById("rightLeg").style.visibility = "hidden";
    hintText.innerText="";
    lives.innerHTML = 6;
    for (var i = 0; i < word_obj.word.length; i++) {
        let lines = document.getElementById("lines");
        lines.innerHTML += `<p>_</p>`;
    }
    new_array = [];
    num_of_lett = word_obj.word.split("");
    counter = 0;

    
}

function getValue(val) {
    var clicked_Alph = val;

    for (let i = 0; i < num_of_lett.length; i++) {

        if (clicked_Alph == num_of_lett[i]) {
            new_array[i] = clicked_Alph;
            }
       



    }
    
    if (new_array.includes(clicked_Alph)) {

    }
    else {
        result = Number(lives.innerText) - 1;
        lives.innerText = result;
        if (result === 5) {
            document.getElementById("head").style.visibility = "visible";
        }
        if (result === 4) {
            document.getElementById("leftArm").style.visibility = "visible";
        }
        if (result === 3) {
            document.getElementById("body").style.visibility = "visible";
        }
        if (result === 2) {
            document.getElementById("rightArm").style.visibility = "visible";
        }
        if (result === 1) {
            document.getElementById("leftLeg").style.visibility = "visible";
        }
        if (result === 0) {
            document.getElementById("rightLeg").style.visibility = "visible";
            go.innerText = "Game Over";
            go.style.color = "red";
            go.style.fontSize= "20px";
            lives.style.visibility = "hidden";
            text1.style.visibility = "hidden";
            btn.style.visibility = "hidden";
            
        }
        
    }

    var wrongtry = num_of_lett.length;
    for(let i = 0 ; i < num_of_lett.length ; i++){
        if (new_array[i] !== undefined ){
            wrongtry--
        }
    }
    if(wrongtry === 0){
        go.innerText = "WIN WIN WIN!!!!!!!";
            go.style.color = "red";
            go.style.fontSize= "20px";
            lives.style.visibility = "hidden";
            text1.style.visibility = "hidden";
            btn.style.visibility = "hidden";
    }

    for (let i = 0; i < num_of_lett.length; i++) {
        if (counter < num_of_lett.length) {
            reveal.innerHTML += `<p id="${i}">_</p>`;
            counter++;         
        }
        if (new_array[i] === undefined) {
            document.getElementById(i).innerHTML = "&nbsp;";
        }
        else {
            document.getElementById(i).innerHTML = new_array[i];
            
        }
    }
}

for (var i = 0; i < alphabetArray.length; i++) {
    alphabet.innerHTML += `<button id="test" onclick="getValue(this.value)" value="${alphabetArray[i]}">${alphabetArray[i]}</button>`;
}

function getHint() {
    hintText.innerText = word_obj.hint;
}

for (var i = 0; i < word_obj.word.length; i++) {
    let lines = document.getElementById("lines");
    lines.innerHTML += `<p>_</p>`;
}