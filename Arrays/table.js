let Employees=[
    {id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000},
    {id:103,name:"Priya",sal:65000},
    {id:104,name:"Modi",sal:75000}
    ]
function getEmployees()
{   
                     // WHILE LOOP
    let rows=""
    let i=0
    while(i<=Employees.length-1)
    {
        rows=rows+`<tr> <td>${Employees[i].id}</td>
                        <td>${Employees[i].name}</td>
                        <td>${Employees[i].sal}</td> 
                   </tr>`
        i++;
    
    }
    document.getElementsByTagName("tbody")[0].innerHTML=rows
}
                      // FOR OF LOOP
    let rows=""
    for(Emp of Employees)
    {
        rows=rows+`<tr> <td>${Emp.id}</td>
                        <td>${Emp.name}</td>
                        <td>${Emp.sal}</td> 
                   </tr>`
    
    }
    document.getElementsByTagName("tbody")[0].innerHTML=rows
                        // FOR LOOP
// let rows=""

// for(let i=0;i<=Employees.length-1;i++)
// {
//     rows=rows+`<tr> <td>${Employees[i].id}</td>
//                     <td>${Employees[i].name}</td>
//                     <td>${Employees[i].sal}</td> 
//                </tr>`
// }
// document.getElementsByTagName("tbody")[0].innerHTML=rows
// }
