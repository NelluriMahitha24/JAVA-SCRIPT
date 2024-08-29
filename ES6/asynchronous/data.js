let employees=[{id:101,name:"RAHUL",sal:45000},
    {id:102,name:"SONIA",sal:55000}
]
let create_employee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}
let get_details=()=>{
    setTimeout(()=>{
        let rows=""
    for(emp of employees)
    {
        rows=rows+`<tr> <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td> 
                   </tr>`
    }
    document.getElementById("ABC").innerHTML=rows
    },1000)
}
create_employee({id:103,name:"PRIYANKA",sal:60000},get_details)
// get_details()