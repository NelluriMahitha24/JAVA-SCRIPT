class Account
{
    acc_id=10001
    acc_name="Mahitha"
    acc_bal=600
    acc_min_bal=100

    open_acc()
    {
console.log("sucessfully opened bank account");

    }

    deposit(amount)
    {
console.log("amount is",amount);

}
}

    with_draw()
    {
console.log("with drawal succesfully");

    }

    get_bal()
    {
console.log("bal is empty");

    }

    get_statement()
    {
console.log("statement found");

    }

    close_account()
    {
        console.log("account closed succesfully");
        
    } 

let A1= new Account()
let A2=new Account()
A1.close_account()
A1.open_acc()
A1.deposit(5000)
A2.deposit(6000)
A1.with_draw()
A1.get_statement()
console.log(A1.acc_name)
console.log(A1.acc_id)
console.log(A1.acc_bal)
console.log(A1.acc_min_bal)