// module pattern example

var greet=require('./greet1');
greet();
var greet=require('./greet2').greet;
greet();

var greet3=require('./greet3');
greet3.greet();
greet3.greeting="Changed my position";

var greet3b=require('./greet3');
greet3b.greet();

var greet4=require('./greet4');
var grt= new greet4();
grt.greet();

var greet5=require('./greet5').greet;
greet5();