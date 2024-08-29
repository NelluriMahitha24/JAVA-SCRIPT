class Account{
    acc_bal=0
    acc_min_bal=500
    deposit(amount){
     console.log(this.acc_bal=this.acc_bal+amount);

    }
    with_draw(expense)
    {
console.log(this.acc_bal=this.acc_bal-expense);

    }
    get_bal(){
return this.acc_bal-this.acc_min_bal
    }
}
let A1= new Account()
let A2= new Account()
let A3= new Account()
A1.deposit(50000)
A1.deposit(500)
A2.deposit(60000)
A2.deposit(600)
A3.deposit(70000)
A3.deposit(700)
A1.with_draw(100)
A2.with_draw(100)
A3.with_draw(100)
console.log(A1.get_bal())
console.log(A2.get_bal())
console.log(A3.get_bal())
console.log(A1);
console.log(A2);
console.log(A3);