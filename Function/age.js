function age(born_year){
    let current_year= new Date().getFullYear()
    return current_year-born_year
}
let person_age=age(2002)
console.log(person_age);