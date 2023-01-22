const sumAll = function(arg1, arg2) {
    if (typeof (arg1) != "number" || typeof (arg2) != "number" || (arg1 || arg2) < 0)
        return "ERROR";
    let sum = 0;
    for (i = Math.min(arg1, arg2); i <= Math.max(arg1, arg2); i++) {
        sum += i;
    }
    return sum;
};

/*const sumAll = function (num1, num2) {
    if (
        (typeof num1 != "number") |
        (typeof num2 != "number") |
        (num1 < 0) |
        (num2 < 0)
    ) {
        return "ERROR";
    } else {
        let sum = 0;
        for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
            sum += i;
        }
        return sum;
    }
}*/



// Do not edit below this line
module.exports = sumAll;
