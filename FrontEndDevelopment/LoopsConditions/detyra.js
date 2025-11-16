// Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button 
// (for example, 1–!, 2–@, 3–# etc).  Display a result in the console.

let number = prompt ('enter a number from 0 to 9');

let symbol;

switch (number){
    case 1:
        symbol = "!";
    break;
    case 2:
        symbol = "@";
    break;
    case 3:
        symbol = '#';
    break;
    default:
        console.log("try again!")

}