console.log('Welcome to EmployeeWageComputation !');
var isPresent = 1;
var isPartTime =2;
empRatePerHr = 20;
var empCheck = Math.floor(Math.random() * 3); 
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
var salary = empRatePerHr * empHrs ;
console.log("Salary = ",salary)