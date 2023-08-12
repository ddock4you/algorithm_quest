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
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            stringifyNumbers(obj[key]);
        }
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] + "";
        }
    }
    return obj;
}
console.log(stringifyNumbers(obj));
