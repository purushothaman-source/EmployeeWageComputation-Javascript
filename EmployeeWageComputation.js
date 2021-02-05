class Employee {

    getWorkHrs(totalWorkingDays, MaxEmpHrs) {
        var workingDays = 0;
        var totalEmpHrs = 0;
        while (workingDays < totalWorkingDays && totalEmpHrs <= MaxEmpHrs) {
            var isPresent = 1;
            var isPartTime = 2;
            var empHrs = 0;
            var empCheck = Math.floor(Math.random() * 3);
            workingDays++;
            switch (empCheck) {
                case isPresent:
                    empHrs = 8;
                    break;
                case isPartTime:
                    empHrs = 4;
                    break;
                default:
                    empHrs = 0;
            }
            totalEmpHrs += empHrs;
        }
        return totalEmpHrs;
    }
}
empRatePerHr = 20;
const employeeWage = new Employee();
var wage = employeeWage.getWorkHrs(20, 100);
var salary = empRatePerHr * wage;
console.log("Salary = ", salary)