function $(id){ return document.getElementById(id);}
let wrapper = document.querySelector('.wrapper');
let counterInfo = document.querySelector('.counter-info');
let displayAlert = document.getElementById('counter-alert');
let random = Math.ceil(Math.random()*15);

let counter = 3;

console.log(random);


$('btn-guess').addEventListener('click', function(){
      
    counter--;
    
    counterInfo.innerHTML = `${counter}`;

    const userInput = $('user-guess').value;

    const userInfo = $('hints');

if(counter == 0){

        userInfo.innerHTML = `You lost the game,correct number was ${random}`;
        wrapper.style.backgroundColor = 'red';
    
        const gamePanel = document.querySelector('.game-panel');
        gamePanel.classList.add('hidden');
        $('play-again').classList.remove('hidden');

}

else{

    if(isNaN(userInput) || userInput === ''){
        userInfo.innerHTML = "Enter only numbers!";
        return;
    }

    if(userInput >=1 && userInput <=15){
        
        if(userInput > random){
        userInfo.innerHTML = "Your guess is higher";

         }else if(userInput < random){
        userInfo.innerHTML = "Your guess is lower";

         }else if(userInput == random){
        userInfo.innerHTML = `Congratulations, you guessed correctly`;
        wrapper.style.backgroundColor = 'green';

        const gamePanel = document.querySelector('.game-panel');
        gamePanel.classList.add('hidden');
        $('play-again').classList.remove('hidden');

    }
    }else {
        userInfo.innerHTML = "Enter numbers between 1 to 15";
    }
}

})

$('play-again').addEventListener('click', function(){
    location.reload();
})

setInterval(() => {
    displayAlert.style.display = 'none'; 
}, 2000);


