// export default class salaryCulculation {

//     constructor(salary, amount, netsalary) {
//         this.salary = salary;
//         this.amount = amount;
//         this.netsalary = netsalary;
//     }
   
   
// }

// export function PrintSalary(salary) {
//     console.log(`your salary ${salary}`)
// }
export function Printamount(amount) {
    console.log(`your amont ${amount}`)
    // amount = this.salary * 0.3;
    
}

export function Printnetsalary(amount) {
    let net = amount *0.3 ; 
    let  netsalary = amount - net ;
    console.log(`your netsalary ${netsalary}`)
    // netsalary = this.salary - this.amount;
}

