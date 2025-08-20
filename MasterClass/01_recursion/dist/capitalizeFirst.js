function capitalizeFirst(array) {
    if (array.length < 0)
        return [];
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].slice(1)];
    }
    var result = capitalizeFirst(array.slice(0, -1));
    var lastWord = array[array.length - 1];
    var changeWord = lastWord[0].toUpperCase() + lastWord.slice(1);
    result === null || result === void 0 ? void 0 : result.push(changeWord);
    return result;
}
console.log(capitalizeFirst(["car", "taco", "banana"]));
//  tsc -w --outDir dist capitalizeFirst.ts
