type ObjectInit = { [key: string]: number };

const sameFrequency = (num1: number, num2: number) => {
    const stringNum1 = String(num1);
    const stringNum2 = String(num2);

    if (stringNum1.length !== stringNum2.length) return false;

    const objNum1 = convertObj(num1);
    const objNum2 = convertObj(num2);

    for (const key in objNum1) {
        if (objNum1[key] !== objNum2[key]) return false;
    }

    return true;
};

const convertObj = (num: number) => {
    const arr = String(num).split("");

    return arr.reduce((acc, item) => {
        item in acc ? acc[item] + 1 : (acc[item] = 1);
        return acc;
    }, {} as ObjectInit);
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
