const employee={
    sam: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign ({}, employee, {[key]:value})
}

employee.name = value
employee.streetAddress= value

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee= {...employee};
    delete newEmployee [key];
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(Obj, key, value){
    delete employee [key];
    return employee
}