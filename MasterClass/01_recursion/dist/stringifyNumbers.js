var obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = stringifyNumbers(obj[key]);
        }
        else if (typeof obj[key] === "number") {
            newObj[key] = obj[key] + "";
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
console.log(stringifyNumbers(obj));
