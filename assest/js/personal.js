export default class Personal{

    constructor (Name , YourfBirthday, salary){
        this.Name = Name;
        this.YourfBirthday = YourfBirthday ;
        this.salary = salary;
    }
}
export function PrintName(Name){
    console.log(`your name ${Name}`)
    }
    
    export function Printyear(YourfBirthday){
    console.log(`your year is ${YourfBirthday}`)
    }
    export function PrintSalary(salary){
        console.log(`your salary ${salary}`)
        }
