let year = parseInt (prompt ("Enter your birthyear"));
let formulavalue = (year - 4) % 12;

switch (formulavalue) {
    case 0:
        alert ("Your chinesse zodiac sign is: Rat");
        break;
    case 1:
        alert ("Your chinesse zodiac sign is: Ox");
        break;
    case 2:
        alert ("Your chinesse zodiac sign is: Tiger");
        break;
    case 3:
        alert ("Your chinesse zodiac sign is: Rabbit");
        break;
    case 4:
        alert ("Your chinesse zodiac sign is: Dragon");
        break;
    case 5:
        alert ("Your chinesse zodiac sign is: Snake");
        break;
    case 6:
        alert ("Your chinesse zodiac sign is: Horse");
        break;
    case 7:
        alert ("Your chinesse zodiac sign is: Goat");
        break;
    case 8:
        alert ("Your chinesse zodiac sign is: Monkey");
        break;
    case 9:
        alert ("Your chinesse zodiac sign is: Rooster");
        break;
    case 10:
        alert ("Your chinesse zodiac sign is: Dog");
        break;
    case 11:
        alert ("Your chinesse zodiac sign is: Pig");
        break;
    default:
        alert ("Not a valid year!");
        break;
        
            

  
    
}