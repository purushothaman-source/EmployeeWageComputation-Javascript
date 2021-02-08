class Employee {
    constructor() {
        this.workingDays = 0;
        this.totalEmpHrs = 0;
        this.isPresent = 1;
        this.isPartTime = 2;
        this.empHrs = 0;
        this.dailywage =[];
        this.i=0;
    }

    getEmpTotalWage(company, totalWorkingDays, MaxEmpHrs, empRatePerHr) {
        while (this.workingDays < totalWorkingDays && this.totalEmpHrs <= MaxEmpHrs) {
            var empCheck = Math.floor(Math.random() * 10) % 3;
            var empHour = this.getEmpHrs(empCheck);
            this.workingDays++;
            this.totalEmpHrs += empHour;
        }
        var salary = empRatePerHr * this.totalEmpHrs;
        console.log("Company = ", company, " EmpWage = ", salary)
    }

    getEmpHrs(empCheck) {
        switch (empCheck) {
            case this.isPresent:
                this.empHrs = 8;
                break;
            case this.isPartTime:
                this.empHrs = 4;
                break;
            default:
                this.empHrs = 0;
        }
        this.storeinarr(this.empHrs,this.workingDays);
        return this.empHrs;
    }
   
    storeinarr(emphrs,workingDays){
         
        this.dailywage[this.i] = emphrs * 20;
        this.i++;
    }
}
const employeeWage = new Employee();
employeeWage.getEmpTotalWage("Dmart", 20, 100, 20);
console.log(employeeWage.dailywage);
const employeeWage1 = new Employee();
employeeWage1.getEmpTotalWage("Accenture", 10, 50, 10);
console.log(employeeWage1.dailywage);


