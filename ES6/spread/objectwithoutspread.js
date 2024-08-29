let a={
    id:101,name:"mahi",sal:100000
}
let b={
    sal:80000,loc:"wayanad",email:"mahi@gmail.com"
}
let c={}
for(key in a)
{
    c[key]=a[key]
}
for (key in b)
{
    c[key]=b[key]
}
console.log(c);
