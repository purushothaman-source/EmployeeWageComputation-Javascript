console.log('Welcome to EmployeeWageComputation !');
var isPresent = 1;
var isPartTime =2;
empRatePerHr = 20;
var MaxEmpHrs = 100;
var totalWorkingDays = 20;
workingDays = 0;
totalEmpHrs =0;
while (workingDays < totalWorkingDays && totalEmpHrs <= MaxEmpHrs) {
var empCheck = Math.floor(Math.random() * 3);
workingDays++; 
switch(empCheck){
 case isPresent :
    console.log("Employee is present");
    empHrs = 8;
    break;
 case isPartTime :
    console.log("Employee is part Time");
    empHrs = 4;
    break;
 default :   
    console.log("Employee is absent");
    empHrs = 0;
}
 totalEmpHrs += empHrs;
}
var salary = empRatePerHr * totalEmpHrs ;
console.log("Salary = ",salary)