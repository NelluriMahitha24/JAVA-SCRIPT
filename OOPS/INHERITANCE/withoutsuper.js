class Parent
{
    a=10
    b=20
    add()
    {
        console.log("hello from add method from parent class");   
    }
    constructor(){
        console.log("hello from parent"); 
    }
}
class Child extends Parent
{
     c=100
    constructor()
    {
        console.log("hello from child constructor");       
    }
}
let R= new Child()