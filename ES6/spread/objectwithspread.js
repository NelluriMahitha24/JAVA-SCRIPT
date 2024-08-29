let a={
    id:101,name:"mahi",sal:100000
}
let b={
    sal:80000,loc:"wayanad",email:"mahi@gmail.com"
}
let c={...a,...b}
console.log(c);
// {
//     id: 101,
//     name: 'mahi',
//     sal: 80000,
//     loc: 'wayanad',
//     email: 'mahi@gmail.com'
// }