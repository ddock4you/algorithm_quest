function capitalizeWords(array) {
    if (array.length < 0)
        return [];
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    var result = capitalizeWords(array.slice(0, -1));
    var lastWord = array[array.length - 1];
    var changeWord = lastWord.toUpperCase();
    result === null || result === void 0 ? void 0 : result.push(changeWord);
    return result;
}
console.log(capitalizeWords(["car", "taco", "banana"]));
