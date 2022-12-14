function tellstory (name, mood, activity) {
    let result = `Hello there. My name is ${name}. Usualy I am very happy person, but today I feel very ${mood}. That is because I am ${activity} all day long.`
    return result;
}

let name = prompt ("What is your name?");
let mood = prompt ("How are you feeling today?");
let activity = prompt ("What are you doing today?");

alert (tellstory (name, mood, activity));