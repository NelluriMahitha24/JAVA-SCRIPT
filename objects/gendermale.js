let arr=[ 
    { id:101,name:'mahi',gender:'female'},
    { id:102,name:'kohli',gender:'male'},
    { id:103,name:'pandya',gender:'male'}
]
for(ar of arr)
{
    if(ar.gender==='male')
    {
        console.log(ar.name);
    }
}
console.log("hello");
let i=0
while (i<=arr.length-1) {
    if(arr.gender==='male')
        {
            console.log(arr.name);
        }
        i++
}