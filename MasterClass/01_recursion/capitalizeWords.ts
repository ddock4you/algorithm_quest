function capitalizeWords(array: string[]) {
    if (array.length < 0) return [];
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    const result: string[] = capitalizeWords(array.slice(0, -1));
    const lastWord = array[array.length - 1];
    const changeWord = lastWord.toUpperCase();
    result?.push(changeWord);
    return result;
}
console.log(capitalizeWords(["car", "taco", "banana"]));
