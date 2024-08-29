class Account{
    acc_id;
    acc_name;
    acc_bal;

  constructor(id,
    name,
    bal)
    {
     this.acc_id=id;
    this.acc_name=name;
      this.acc_bal=bal; 
    }
open_account()
    {
        console.log("opened succesfully");  
    }
    deposit(bal)
    {
        console.log(this.acc_bal=this.acc_bal+bal);
         
    }
 with_drawal(bal)
    {
        console.log(this.acc_bal=this.acc_bal-bal);
 
    }
}
let a1=new Account(101,"rahul",500)
a1.open_account()
a1.with_drawal(50)
a1.deposit(500)
a1.deposit(500)
a1.deposit(500)
a1.deposit(500)
let  a2= new Account(102,"sonia",600)
a2.open_account()
a2.with_drawal(100)
a2.deposit(1000)
a2.deposit(1000)
a2.deposit(1000)
let  a3= new Account(103,"priya",1)
a3.open_account()
a3.with_drawal(1)
a3.deposit(1)
a3.deposit(1)
a3.deposit(1)
// a1.mahi()
// a2.mahi()
console.log(a1);
console.log(a2);
console.log(a3);
