function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}
var ques1 = new Question('1.what is your favourite name?', ['nikki', 'puppy', 'ammadu'], '2');
var ques2 = new Question('2. what is your profession?', ['programmer', 'JS learner', 'home maker'], '1');
var ques3 = new Question('3. where are you right now?', ['banglore', 'khammam', 'tammara'], '0');

var storearray=[ques1,ques2,ques3];
var selectques=Math.floor(Math.random()*3);

Question.prototype.displayQuestion=function()
{
  console.log(this.question);
  for(var i=0;i<storearray.length;i++)
  {
  console.log(i+ ':' +this.choices[i]);
  }
var n = prompt("Please enter your name");
if(n=== this.answer) {
console.log("correct answer");
}
else{
console.log("wrong answer try again:");
}
}
storearray[selectques].displayQuestion();


/*
storearray.push(ques1,ques2,ques3);
console.log(storearray);
//function quesobj()
  selectques=Math.floor(Math.random()*2)+1;
  console.log(storearray[selectques]);
*/
