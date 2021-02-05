class Employee {

    getWorkHrs(company, totalWorkingDays, MaxEmpHrs, empRatePerHr) {
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
        var salary = empRatePerHr * totalEmpHrs;
        console.log("Company = ",company," Salary = ", salary)
    }
}
const employeeWage = new Employee();
employeeWage.getWorkHrs("Dmart",20, 100,20);
employeeWage.getWorkHrs("Accenture",10, 50,10);
