let main = document.getElementById("main");
let btn = document.getElementById("btn");

let animal = {    
    name : name,     
    kind : kind,    
    speak : function speak(talk){ 
        return talk; 
    }
}


btn.addEventListener("click" , function(){
    animal.name = document.getElementById("name").value; 
    animal.kind = document.getElementById("kind").value; 
    let say = `Hello world. I am ${animal.name}. I am one happy ${animal.kind}.`; 
    let output = animal.speak(say);  

    main.innerHTML = output;
})