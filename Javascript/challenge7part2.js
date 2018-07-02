function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}
var ques1 = new Question('1.what is your favourite name?', ['nikki', 'puppy', 'ammadu'], '2');
var ques2 = new Question('2. what is your profession?', ['programmer', 'JS learner', 'home maker'], '1');
var ques3 = new Question('3. where are you right now?', ['banglore', 'khammam', 'tammara'], '0');

Question.prototype.displayQuestion=function()
{
  console.log(this.question);
  for(var i=0;i<storearray.length;i++)
  {
  console.log(i+ ':' +this.choices[i]);
  }
}

  var count=0;

Question.prototype.displayanswer=function(ans){

if(ans=== this.answer) {
console.log("correct answer");
console.log("The current score is:" +count);
count++;
}
else{
console.log("wrong answer try again:");
}
}

var storearray=[ques1,ques2,ques3];
function afterResult(){
  var selectques=Math.floor(Math.random()*3);
  storearray[selectques].displayQuestion();
  var n = prompt("Please select the correct answer");
  if(n!=='exit' ){
  storearray[selectques].displayanswer(n);
  afterResult();
}
}
afterResult();
