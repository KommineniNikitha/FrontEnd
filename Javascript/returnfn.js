//function return the function

function searchbook(book) {
  return function(name) {
    if (book === history) {
      console.log("the name of the book is:" + name);
    } else if (book === 'maths') {
      console.log("i need the:" + name + "book");
    } else {
      console.log("i don\'t need any one of the book");
    }
  }
}
var mathsbook = searchbook('maths');
mathsbook('mathematics');
//var nothing = searchbook('nobook');
//nothing();

//IIFE invoked function

/*(function(name){
  var counter;
  counter=counter+1;
console.log( counter);


})(5);*/
/*function retirement(){
  return function(age){
    console.log(65-age);
  }
}
var yearsleft=retirement();
yearsleft(26);
*/

/*function retirement(retirementage){
  return function(yearofbirth){
    var age=2018-yearofbirth;
    console.log(retirementage-age);
  }
}


var yearsleft=retirement(65);
yearsleft(1995);
retirement(68)(2004);*/

// call/apply/bind method

var mark={
  name:'Mark',
  age:30,
  job:'programmer',
  wishes:function(style,timeofday){
    if(style==='formal')
    {
      console.log("HI" + timeofday+ "i\'m" +this.name+ "i\'m" +this.age+ "i\'m" +this.job+ "have a nice day");

    }
    else if(style==='jovial')
    {
  console.log("HI hello how are you" + timeofday+ "i\'m" +this.name+ "i want to say something");
    }
  }
};
mark.wishes('jovial','good morning');
mark.wishes('formal','good morning');

var kelly={
  name:'emily',
  age:45,
  job:'designer'
};
mark.wishes.call(kelly,'formal','goodnight');
console.log(kelly);
var friendly=mark.wishes.bind(mark,'formal');
friendly('what are you doing');

var kellies=mark.wishes.bind(kelly,'formal');
