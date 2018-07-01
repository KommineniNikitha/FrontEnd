//creating objects using function constructor as well as inheritance property applies

/*var Person=function(name,yearOfBirth,job){
  this.name=name;
  this.yearOfBirth=yearOfBirth;
  this.job=job;
}

Person.prototype.calculateAge=function(){
console.log(2018-this.yearOfBirth);
};
Person.prototype.lastName='smith';
var john=new Person('john',1990,'driver');
var jane=new Person('jane',2004,'teacher');
var mark=new Person('mark',1942,'programmer');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(john,jane,mark);*/

//creating objects using object.create
var personproto={calculateAge:function(){
  console.log(2018-yearOfBirth);
}
}
var john=Object.create(personproto);
john.name='nikki';
john.age=26;
john.job='programmer';
console.log(john);

//anotherway
var jane=Object.create(personproto,{
  name:{value:'manu'},
  age:{value:30},
  job:{value:'developer'}
});
console.log(jane);

//primitive vs objects
//primitives
var a=23;
var b=a;
a=45;

console.log(a,b);

//objects
var obj1={name:'nikki',age:25};
var obj2=obj1;
obj1.age=45;
obj2.name='manu';
console.log(obj1,obj2);

/*example of createing objects using function constructor

var House=function(name,rooms,furniture){
  this.name=name;
  this.rooms=rooms;
  this.furniture=furniture;
}
House.prototype.lastName='kommineni';

House.prototype.age='26';
var nikitha=new House('nikki',3,'cot');
var manoj=new House('manu',4,'watercan');
var jaswanth=new House('jash',5,'diwanacot');
var sai=new House('sai',6,'chairs');

console.log(jaswanth.lastName);
console.log(nikitha.lastName);
console.log(manoj.lastName);
console.log(sai.age);
console.log(nikitha,manoj,jaswanth,sai);
*/
