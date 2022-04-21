function Greetr()
{
    this.greeting="Hello World!s";
    this.greet=function()
    {
        console.log(this.greeting);
    }
}

module.exports=Greetr; 