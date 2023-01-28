var sameFrequency = function (num1, num2) {
    var stringNum1 = String(num1);
    var stringNum2 = String(num2);
    if (stringNum1.length !== stringNum2.length)
        return false;
    var objNum1 = convertObj(num1);
    var objNum2 = convertObj(num2);
    for (var key in objNum1) {
        if (objNum1[key] !== objNum2[key])
            return false;
    }
    return true;
};
var convertObj = function (num) {
    var arr = String(num).split("");
    return arr.reduce(function (acc, item) {
        item in acc ? acc[item] + 1 : (acc[item] = 1);
        return acc;
    }, {});
};
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
