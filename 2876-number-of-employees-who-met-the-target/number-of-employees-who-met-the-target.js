var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let res = hours.filter(x => x >= target)
   
    return res.length;
}