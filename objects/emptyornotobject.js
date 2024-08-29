let emp={ 'id': 101,'name':'rahul'}
let keys=Object.keys(emp)
let value=Object.values(emp)
console.log(keys);
console.log(value);
if (Object.keys(emp).length>0) 
{
    console.log("not empty object");
}
else
{
    console.log("empty object");
}

