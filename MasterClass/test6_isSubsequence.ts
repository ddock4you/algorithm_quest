const isSubsequence = (str1: string, str2: string) => {
    let i = 0;
    let j = 0;
    if (!str1) return true;

    while (j < str2.length) {
        if (str2[j] === str1[i]) i += 1;
        if (i === str1.length) return true;
        j += 1;
    }
    return false;
};

const isSubsequence2 = (str1: string, str2: string) => {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;

    const convertStr1 = str1[0] === str2[0] ? str1.slice(1) : str1;

    return isSubsequence2(convertStr1, str2.slice(1));
};
