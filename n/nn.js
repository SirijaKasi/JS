myResult();
function myResult() {
  document.getElementById("demo").innerHTML = "welcome.......";
}

function output() {
  var n = 160;
  if (n < 100) {
    document.write("value of n :" + n);
  } else {
    document.write(" n < 100", "<br/>");
  }
}
output();

function onClick() {
  document.write("button Clicked");
}

function number() {
  let value = 60;
  if (value % 2 == 0) {
    document.write("the" + value + " is even");
  } else {
    document.write("the value is odd");
  }
}
number();

function forloop() {
  for (let a = 0; a <= 3; a++) {
    document.write("<br/>", "enter", "<br/>");
  }
}
forloop();

// function fibonacci() {
//   let A = 0;
//   B = 1;
//   c = A + B;
//   while (c <= 10) {
//     document.write(c);
//     A = B;
//     B = A;
//     c = A + B;
//   }
// }
// fibonacci();

function ArrayNum() {
  let Array = [2, 50, 1, 36, 6];
  c = Array.sort((a, b) => a - b);
  document.write(c, "<br/>");
}
ArrayNum();

function arrayString() {
  let array = ["aaa", "hhh", "ddd", "yyy", "ccc", "zzz"];
  c = array.sort();
  document.write(c, "<br/>");
}
arrayString();

function ArrayObject() {
  let names = { fname: "AA", score: 80, lname: "zz", grade: "c" };

  document.write(names.fname, names.lname);
}
ArrayObject();

function popMethod() {
  let fruits = ["apple", "banana", "grapes", "custurd Apple"];
  bb = fruits[0] = "kiwi";
  document.write(fruits);
} //bb returns popped element i.e, last element of an array
//pop() - deletes last element of an array
// shift() - deleted first element of an array
//unshift() - adds the first element to an array

popMethod();

// function main(){
// let people=[{id=10,designation="JS",subject="css"},
// {id=11,designation="pp",subject="AJS"}];

// function comparision(a,b){
//   let A =a.people.toUpperCase();
//   let B=b.people.toUpperCase();

//   let comparision=0;
//   if(A>B){
//     comparision=1;
//   }
//   else if(A<B){
//     comparision=-1;
//   }
//   return comparision;
// }document.write(comparision);
// comparision();
// }main();

function getTime() {
  let today = new Date();
  var h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  setInterval("getTime()", 1000);
  // document.write(h + ":" + m + ":" + s); // prints entire time repeatedly for 1000 millisecs
  document.getElementById("demo").innerHTML = h + ":" + m + ":" + s; //now the time prints at once but changes accordingly
}
getTime();

function stringObj() {
  var x = new string("lucky");
  document.write(x.charAt(1));
}
stringObj();
