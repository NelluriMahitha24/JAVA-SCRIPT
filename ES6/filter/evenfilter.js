let numbers=[1,2,3,4,5,6,7,8,9,10]
let even=numbers.filter((num)=>{
    return num%2===0;
  })
  console.log(even);
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let even=numbers.filter((num)=>{
//     return true
//   })
//   console.log(even);
//   [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]
// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let even=numbers.filter((num)=>{
//     return false;
//   })
//   console.log(even);
// []