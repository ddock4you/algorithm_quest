var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};
function collectStrings(obj) {
    var array = [];
    for (var i in obj) {
        if (typeof obj[i] === "object") {
            array = __spreadArray(__spreadArray([], array, true), collectStrings(obj[i]), true);
            // array = array.concat(collectStrings(obj[i]));
        }
        else {
            array.push(obj[i]);
        }
    }
    return array;
}
console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
