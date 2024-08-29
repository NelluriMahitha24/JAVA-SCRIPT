class Account
{
acc_id
acc_name 
constructor(id,name,bal)
{
 this.acc_id=id;
 this.acc_name=name;
}

}
class Savings_Account extends Account
{
    acc_balance=0
    acc_min_bal=500  
 constructor(i,n,b)
 {
super(i,n)
this.acc_balance=b
 }
 get_bal()
 {
    return this.acc_balance-this.acc_min_bal;
 }
}
class current_account extends Account
{
    acc_balance=0
    acc_min_bal=500  
 constructor(i,n,b)
 {
super(i,n)
this.acc_balance=b
 }
 get_bal()
 {
    return this.acc_balance-this.acc_min_bal;
 }
}
let B1= new Savings_Account(101,"mahi",9000)
console.log( B1.get_bal());
let B2= new current_account(102,"mahesh",10000)
console.log(B1)
console.log(B2.get_bal());
console.log(B2)
