let old_array=["rahul","sonia","priya"]
let new_array=old_array.map((ename)=>{
  return ename.toUpperCase()
})
console.log(new_array);

// partialObjectArray = ObjectArray.map((
//     {key 1, key 2, ...key n}) => ({key 1, key 2, ...key n}));