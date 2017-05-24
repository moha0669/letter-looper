/*global console prompt*/

var letter;

while (!letter) {
       
      letter=prompt("please enter the value");
}

var i;
var k;

for (var i = 0; i < 10; i += 1) {
    for (k=0; k<=i; k +=1) {
       document.write(letter);
    }
    document.write("<br>");
}
