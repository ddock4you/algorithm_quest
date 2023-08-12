let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

interface Iobj {
    [key: string]: any;
}

function stringifyNumbers(obj: Iobj) {
    for (let key in obj) {
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
