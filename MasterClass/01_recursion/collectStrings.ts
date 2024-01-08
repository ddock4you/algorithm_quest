const obj: any = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

function collectStrings(obj: any): any {
    let array: string[] = [];

    for (let i in obj) {
        if (typeof obj[i] === "object") {
            array = [...array, ...collectStrings(obj[i])];
            // array = array.concat(collectStrings(obj[i]));
        } else {
            array.push(obj[i]);
        }
    }
    return array;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
