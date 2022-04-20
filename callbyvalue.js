//call by value
function change(b)
{
    b=2;
}

var a=1;
change(a);
console.log(a);

//call by refrence 
function changeobj(d)
{
    d.prop1=function(){ console.log("hi");}
    d.prop2={};
}

var c={};
c.prop1={};
changeobj(c);
console.log(c);
