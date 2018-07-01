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
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
  //2.Display the result
  document.getElementById('dice-1').style.display='block';
  document.getElementById('dice-2').style.display='block';

  document.getElementById('dice-1').src='dice-' + dice1+'.png';
  document.getElementById('dice-2').src='dice-' + dice2+'.png';

  //3.update the round score if the rolled number not a 1
 if(dice1!==1 && dice2!==1)
  {//Add score
    roundScore+=dice1 + dice2;
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
  document.getElementById('dice-1').style.display='none';
  document.getElementById('dice-2').style.display='none';
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
document.getElementById('dice-1').style.display='block';
document.getElementById('dice-2').style.display='block';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
//document.querySelector('.player-1-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');
document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
}

document.querySelector(".btn-new").addEventListener('click',init);
function init(){
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  gamePlaying=true;
  document.getElementById('dice-1').style.display='none';
  document.getElementById('dice-2').style.display='none';
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
