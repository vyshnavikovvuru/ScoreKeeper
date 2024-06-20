const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

 p1button.addEventListener('click', function(){
    if(!isGameOver){
    p1Score += 1;
    if(p1Score === winningScore){
        isGameOver = true;
        p1Display.classList.add('has-text-success'); 
        p2Display.classList.add('has-text-danger');  
        p1button.disabled = true;
        p2button.disabled = true;   

    }
        p1Display.textContent = p1Score; 
    }
 })
 p2button.addEventListener('click', function(){
    if(!isGameOver){
    p2Score += 1;
    if(p2Score === winningScore){
        isGameOver = true;
        p2Display.classList.add('has-text-success'); 
        p1Display.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;    
    }
        p2Display.textContent = p2Score; 
    }
 });

 winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    resetButton();
 })

 resetButton.addEventListener('click', reset)
 function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger'); 
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;     
 };