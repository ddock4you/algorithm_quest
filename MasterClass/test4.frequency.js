var areThereDuplicates = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var obj = {};
    for (var _a = 0, arg_1 = arg; _a < arg_1.length; _a++) {
        var value = arg_1[_a];
        obj[value] = (obj[value] || 0) + 1;
        if (obj[value] > 1)
            return true;
    }
    return false;
};
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
