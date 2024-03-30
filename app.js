const player1=document.querySelector('#player1');
const score1=document.querySelector('#playerScore1');
const player2=document.querySelector('#player2');
const score2=document.querySelector('#playerScore2');
const reset=document.querySelector('#reset');
const fin=document.querySelector('#fin');
const winner=document.querySelector('h3')


player1Score=0;
player2Score=0;




player1.addEventListener('click',function(){
    player1Score+=1;
    score1.textContent=player1Score;
})

player2.addEventListener('click',function(){
    player2Score+=1;
    score2.textContent=player2Score;
})

reset.addEventListener('click',function(){
    player1Score=0;
    player2Score=0;
    score1.innerHTML=0;
    score2.innerHTML=0;
    winner.innerHTML="";
     score1.style.color="#694569";
     score2.style.color="#694569";
   
})

fin.addEventListener('click',function(){
    if (player1Score>player2Score){
        winner.innerHTML="Player 1 is the winner."
        score1.style.color="green";
        score2.style.color="red";
    }else if (player1Score<player2Score){
        winner.innerHTML="Player 2 is the winner."
        score2.style.color="green";
        score1.style.color="red";
    }else if(player1Score==0 && player2Score==0){
        winner.innerHTML="Use player buttons to record score."
    }else{
        winner.innerHTML="It's a tie."
    }
})