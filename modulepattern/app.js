// module pattern example

var greet=require('./greet1');
greet();
var greet=require('./greet2').greet;
greet();

var greet3=require('./greet3');
greet3.greet();