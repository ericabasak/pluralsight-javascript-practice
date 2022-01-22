// create fizzbuzz 

var randomNumber7 = Math.round(Math.random() * 15);
// console.log(randomNumber);
randomNumber7 = 10;
if(randomNumber7 % 3 === 0 && randomNumber7 % 5 === 0){
    alert("FizzBuzz");
} else if (randomNumber7 % 5 === 0 && randomNumber7 != 0) {
    alert("buzz");
} else if (randomNumber7 % 3 === 0 && randomNumber7 != 0) {
    alert("fizz");
} else {
    console.log(randomNumber7);
}

if(randomNumber % 3 === 0 && randomNumber != 0){
    if(randomNumber % 5 === 0) {
        alert("FizzBuzz");
    }
    else {
        alert("fizz");
    }
}
else if (randomNumber % 5 === 0 && randomNumber != 0) {
    alert("buzz");
}
else {
    console.log("randomNumber");
}