console.log('Welcome to EmployeeWageComputation !');
var isPresent = 1;
var isPartTime =2;
empRatePerHr = 20;
var empCheck = Math.floor(Math.random() * 3); 
if (empCheck == isPresent){
    console.log("Employee is present");
    empHrs = 8;
}
else if (empCheck == isPartTime){
    console.log("Employee is part Time");
    empHrs = 4;
}
else{
    console.log("Employee is absent");
    empHrs = 0;
}
var salary = empRatePerHr * empHrs ;
console.log("Salary = ",salary)