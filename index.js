// Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell then whether the guess was correct,greater or lower than the original number.
// 100-(Number of guesses) is the scope of the user.The program is expected to terminate once the number is guessed.Number should be between 1-100

let Chances=10;
let Score=100;
let RNumber=Math.floor(Math.random()*50);
// console.log(RNumber);
console.log("The guessing number is between 1-50");
console.log("Lets start the guessing........!");

do{
let Guess=prompt("Enter your Guess....: ");
Guess=Number.parseInt(Guess);
if(Guess==RNumber){
    console.log("Perfect Guess")
    console.log("Your Score: ",100-(100-Score)*5);
}
else if(Guess<RNumber){
  console.log("Number is less than required :")
  Score=Score-1;
  Chances=Chances-1;
}
else{
  console.log("Number is bigger than required: ")
  Score=Score-1
  Chances=Chances-1;
}
}while(Chances!=0);

console.log("==================================================");
console.log("Sorry......You have exhausted your charnces.!")

console.log("=====Game Over=========")