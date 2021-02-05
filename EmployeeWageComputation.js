console.log('Welcome to EmployeeWageComputation !');
var isPresent = 1;
empRatePerHr = 20;
var empCheck = Math.floor(Math.random() * 2); 
if (empCheck == isPresent){
    console.log("Employee is present");
    empHrs = 8;
}
else{
    console.log("Employee is absent");
    empHrs = 0;
}
var salary = empRatePerHr * empHrs ;
console.log("Salary = ",salary)