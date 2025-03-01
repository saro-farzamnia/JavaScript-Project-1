const randomNumber=Math.ceil(Math.random() *100);
console.log(randomNumber);
let numberOfGuess = 0;

const checkGuess=(Guess)=>{
    console.log(Guess);
    numberOfGuess++;
    if( Guess === randomNumber){
        console.log("Your guessed is correctly");      
    }else if( Guess < randomNumber){
        console.log("Too low,Try agin");
        play();
    }else{
        console.log("Too high,Tyr agin");
        play();
    }
};


const validateNumber=(value)=>{

    if (isNaN(value)) {
        return "Please enter a valid number";
    } else if(+value < 1 || +value > 100){
        return "Please enter a number between 1 and 100";
    }
};

const play=()=>{
    const number = prompt("Enter a number between 1 to 100");

    if(number === null)return;
    console.log(numberOfGuess);
    if (numberOfGuess >=10) {
        console.log("Game Over");
        return;
    }

    const validation=validateNumber(number);
    if(validation){
        return play();
    }
    checkGuess(+number);
};
play();