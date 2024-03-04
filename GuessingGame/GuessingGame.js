// "use strict"
//let secret = 89;

let secret = Math.floor(Math.random() * 10) + 1;
let guess;

while(true) {
    let answer = prompt("Please guess the secret number (1-10).");
    guess = parseInt(answer);

    if (guess === secret) {
        alert("CORRECT!");
        break;
    }else if (guess < secret) {
        alert("Incorrect, guess too low.");
    }else {
        alert("Incorrect, guess too high.")
    }
    
}