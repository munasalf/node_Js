// import User , {PrintName,PrintAge} from "./user.js";
// let user = new User ( "muna" , 24);
// PrintName(user.Name);
// PrintAge(user.age);
import Personal, {PrintName,Printyear,PrintSalary } from "./personal.js";
import {Printamount,Printnetsalary} from "./salary.js";

let personal = new Personal ("muna", 8/5/1999, 334);
PrintName(personal.Name);
Printyear(personal.YourfBirthday);
PrintSalary(personal.salary);
Printamount(556);
Printnetsalary(35);


