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
    const newObj: Iobj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = stringifyNumbers(obj[key]);
        } else if (typeof obj[key] === "number") {
            newObj[key] = obj[key] + "";
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

console.log(stringifyNumbers(obj));
