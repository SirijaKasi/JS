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

function fibonocci() {}
