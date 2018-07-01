var scores,roundScore,activePlayer,gamePlaying;
init();
/*scores=[0,0];
roundScore=0;
activePlayer=0;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
*/

document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){
    //1.Random number
    var dice=Math.floor(Math.random()*6)+1;
  //2.Display the result
  var diceDOM=document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-' + dice+'.png';
  if(dice===6 && count==2)
  {
    count+=6;
    document.querySelector()
  }
  //3.update the round score if the rolled number not a 1
  if(dice!==1)
  {//Add score
    roundScore+=dice;
    document.querySelector('#current-'+ activePlayer).textContent=roundScore;
  }
  else {
  //Next Player
  nextPlayer();
  }
  }

});

document.querySelector(".btn-hold").addEventListener('click',function() {
  if(gamePlaying){
    //add current score to global score
    scores[activePlayer]+=roundScore;
    //create an UI
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
  //check if the player won the Game
  if(scores[activePlayer]>=20)
  {
  document.querySelector('#name-'+ activePlayer).textContent='winner';
  document.querySelector('.dice').style.display='none';
  document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
  document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
  gamePlaying=false;
  }
  else{
    nextPlayer();
  }
  }

});

function nextPlayer(){
activePlayer===0?activePlayer=1:activePlayer=0;
roundScore=0;
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
//document.querySelector('.player-1-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');
diceDOM.style.display='none';
}

document.querySelector(".btn-new").addEventListener('click',init);
function init(){
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  gamePlaying=true;
  document.querySelector('.dice').style.display='none';
  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='player-1';
document.getElementById('name-1').textContent='player-2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
