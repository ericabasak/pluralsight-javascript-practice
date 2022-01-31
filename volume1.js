// ----------create fizzbuzz problem ----- 

// var randomNumber7 = Math.round(Math.random() * 15);
// // console.log(randomNumber);
// randomNumber7 = 10;
// if(randomNumber7 % 3 === 0 && randomNumber7 % 5 === 0){
//     alert("FizzBuzz");
// } else if (randomNumber7 % 5 === 0 && randomNumber7 != 0) {
//     alert("buzz");
// } else if (randomNumber7 % 3 === 0 && randomNumber7 != 0) {
//     alert("fizz");
// } else {
//     console.log(randomNumber7);
// }

// if(randomNumber % 3 === 0 && randomNumber != 0){
//     if(randomNumber % 5 === 0) {
//         alert("FizzBuzz");
//     }
//     else {
//         alert("fizz");
//     }
// }
// else if (randomNumber % 5 === 0 && randomNumber != 0) {
//     alert("buzz");
// }
// else {
//     console.log("randomNumber");
// }


// --------zombie apocalypse------------
alert("It's a zombie apocalypse. They are coming for you! Watch out!!!!");
let weapon = prompt("Which weapon do you choose?: bow and arrow, an axe, or a rubber chicken");
let randomNumber = Math.round(Math.random());
alert("You attack the zombie with your" + " " + weapon);
if(randomNumber === 0) {
    alert("The zombie bites you. You lose!!");
} else if (randomNumber === 1) {
    alert("You killed the zombie with your" + " " + weapon);
};

// -----------------------------------------

let favFruit = "apple";

alert("Your favorite fruit is a" + " " + favFruit);

prompt("It that correct?")

if(favFruit === "banana"){
    alert()
} else if (favFruit === "watermelon"){
    alert()
}