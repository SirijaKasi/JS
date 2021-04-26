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

// function arrayString() {
//   let array = ["aaa", "hhh", "ddd", "yyy", "ccc", "zzz"];
//   c = array.sort();
//   document.write(c, "<br/>");
// }
// arrayString();

// function ArrayObject() {
//   let names = { fname: "AA", score: 80, lname: "zz", grade: "c" };

//   document.write(names.fname, names.lname);
// }
// ArrayObject();

// function popMethod() {
//   let fruits = ["apple", "banana", "grapes", "custurd Apple"];
//   bb = fruits[0] = "kiwi";
//   document.write(fruits);
// } //bb returns popped element i.e, last element of an array
// //pop() - deletes last element of an array
// // shift() - deleted first element of an array
// //unshift() - adds the first element to an array

// popMethod();

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
  var x = new String("Lucky HOme");
  // document.write(x.charAt(3)); //character at the given location
  // document.write(x.indexOf("u")); // location of the given character
  // document.write(x.toUpperCase()); //turns the entire string into UPPERCASE
  // document.write(x.toLowerCase()); //turns the entire string into lowercase
  document.write(x.slice(2, 8)); //slice is used to cut the part ratherthan the specified allocation
}
stringObj();

function mathObj() {
  var x = 9.22;
  document.write(Math.ceil(x)); //add +1 to the decimal values i.e, 89.76676 prints as 90
}
mathObj();
