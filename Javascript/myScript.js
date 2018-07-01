//console.log('hello world');
/*var name="john";
var lastName="smith";
var age=60;
console.log(age);*/
//lecture: variables

/*var age=26;
var name='john';
var ismarried=false;
console.log(name+" "+age+" "+ismarried);*/

//lecture:operators

/*var birthyear=2016-25;
birthyear=2016-26*2 +15/3;

console.log(birthyear);
var agejohn=36;
var agemarc=25;*/

//operator procedence
/*var now=2018;
var yearofBirth=2002;
var fullAge=18;
var age=now-yearofBirth>=fullAge;
console.log(age);

var ageJohn=now-yearofBirth;
var agemarc=35;
var averageAge=(ageJohn+agemarc)/2;
console.log(averageAge);
console.log(2018-2002);
console.log((35+16)/2);
*/

//lecture if/else statements
/*var name='john';
var age=50;
var ismarried='no';
if(ismarried==='yes')
{
  console.log(name+ "is married");
}
else{
  console.log(name+ "hopefully is married");
}
ismarried=false;
if(ismarried)
{
  console.log("yes");
}
else{
  console.log("no")
}

if(23==="23"){
  console.log("number is equal");
}
else{
  console.log("number is not equal");
}
if(23=="23"){
  console.log("number is equal");
}
else{
  console.log("number is not equal");
}

//lecture-switch statements

var age=25;
if(age<20)
{
  console.log("Johan is teenager");
}
else if(age>=20&&age<30)
{
  console.log("john age between 20 and 30");
}
  else{
    console.log("john is an older");
  }

var job="worker";
switch(job){
  case 'teacher': console.log("john is teaching kids");
  break;
  case 'driver': console.log("john is driving car");
  break;
  case 'software': console.log("john is going to company");
  break;
  case 'worker': console.log("john is worker");
  break;
}*/

//Boolean logic

var johnage=15;
if(johnage>=18 && johnage<=30)
{
  console.log("john is young man and his age is:" +johnage);
}
else if(johnage>30){
  console.log("john is a man and his age is:" +johnage);

}
else{
  console.log("john is a teenager and his age is:" +johnage);
}

//switch statements
switch(true){
  case johnage>=18 && johnage<=30:
  console.log("john is young man and his age is:" +johnage);
  break;
  case johnage>30:
  console.log("john is a man and his age is:" +johnage);
  break;
  default:
  console.log("john is a teenager and his age is:" +johnage);
  break;
}
