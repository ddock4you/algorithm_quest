function capitalizeFirst(array: string[]) {
    if (array.length < 0) return [];
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].slice(1)];
    }
    const result: string[] = capitalizeFirst(array.slice(0, -1));
    const lastWord = array[array.length - 1];
    const changeWord = lastWord[0].toUpperCase() + lastWord.slice(1);
    result?.push(changeWord);
    return result;
}
console.log(capitalizeFirst(["car", "taco", "banana"]));

//  tsc -w --outDir dist capitalizeFirst.ts
