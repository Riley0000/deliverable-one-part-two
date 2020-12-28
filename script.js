var name = prompt("What amount of rain was received in inches?");

document.write ("you've submitted" + name + "inches");

console.log ( "*************************");

var y = 50

if (name>=20) {
  x = y * 0.9; 
  document.write ("resulting in" + x +  "bushels");
  console.log("bushels=45"); 
}
else if (name<10) {
  x = y * .8; 
  document.write ("resulting in" + x + "bushels");
  console.log ("bushels=40");
}

let fertilizer = prompt("Did you use fertilizer?");
console.log ("yes");

if (fertilizer === "yes") {
  var type = prompt("Did you use premium or regular fertilizer?");
}
console.log ("regular");

var regular = 1.1
var premium = 0.85

if (type === "regular") {
  bushels = x * 1.1;
  document.write ("with regular you yield" + bushels + "bushels");
}
else if (type === "premium"){
  bushels = x * 0.85;
  document.write ("with premium you yield" + bushels + "bushels");
}

console.log (">=20 inches and yes fertilizer and regular = yield 49.5 bushels");

console.log (">=20 inches and yes fertilizer and premium= yield 38.25 bushels");

console.log ("<10 inches and yes fertilizer and regular = yield 44 bushels");

console.log ("<10 inches and yes fertilizer and premium = yield 34 bushels");

console.log ("final yield result = 49.5 bushels");



