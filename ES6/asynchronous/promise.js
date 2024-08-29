let gotogoa=(sucess,failure)=>{
    let acc_bal=5000
    if (acc_bal>=15000)
    {
        sucess("Go And Enjoy")
    }
    else
    {
        failure("Sit in Home")
    }
}
gotogoa((msg)=>{console.log(msg)},(error)=>{console.log(error)});