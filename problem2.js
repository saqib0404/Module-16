var maths = 75;
var biology = 25;
var chemistry = 65;
var physics = 80;
var bangla = 35.45;
var english = 99.50;

var total = maths + biology + chemistry + physics + bangla + english;
var gpa = total / 6;
gpa = gpa.toFixed(2);
gpa = parseFloat(gpa);

console.log(gpa);