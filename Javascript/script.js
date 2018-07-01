///////////////////////////////////////
// Lecture: Hoisting
/*var ab=25;//global execution
function foo(){
  console.log(ab);
  var age=65; //its own execusion b
  console.log(age);
}
foo();
console.log(age);*/













///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
        console.log(b+c);
    }


function third() {
    var d = 'John';
    console.log(a + b  + d);
}
}*/




///////////////////////////////////////
// Lecture: The this keyword
