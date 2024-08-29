let sum=(a,b)=>
{
    return a+b;
}
let multi=(a,b)=>
    {
        return a*b;
    }
let cal=(a,b,callback)=>
    {
        return callback(a,b);
    }
console.log(cal(10,20,sum));
console.log(cal(10,20,multi));




 