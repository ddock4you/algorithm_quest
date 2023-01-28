type objType = {
    [key: string | number]: number;
};

const areThereDuplicates = (...arg: string[] | number[]) => {
    const obj: objType = {};

    for (let value of arg) {
        obj[value] = (obj[value] || 0) + 1;

        if (obj[value] > 1) return true;
    }

    return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
