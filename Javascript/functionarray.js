var years=[1990,2005,1998,1937,1950];
/*function arraycalc(x){
  var arrage=[];
  for(var i=0;i<x.length;i++)
    {
      console.log(x[i]);
    }
}
arraycalc(years);
var ages = [4,5,6];
arraycalc(ages);*/


function arrayfn(arr,fn){
var age=[];
  for(var i=0;i<arr.length;i++)
    {
      age[i]=fn(arr[i]);
    }
    return age;
}

function ageCalculator(a){
  return 2016-a;
}

var b=6;
function tip(a){
  return 0.2*a;
}

var arrayage=arrayfn(years,tip);
arrayfn(years,ageCalculator);
console.log(arrayage);
