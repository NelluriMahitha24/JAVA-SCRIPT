class Parent
{
    a=10
    b=20
    add()
    {
        console.log("hello from parent");   
    }
}
class Child extends Parent
{
    c=100
}
let R= new Child()
console.log(R.a);                                     
console.log(R.c);                                     
console.log(R.add());
// let v= new Parent()
// console.log(v.c);
