function titleToNumber(columnTitle: string): number {
    let arrayString = columnTitle.split("");
    let columnNumber = 0;
    let stringLength = arrayString.length;

    for (let i = stringLength - 1; i >= 0; i--) {
        columnNumber += Math.pow(26, stringLength - i - 1) * columnNumberForOneLetter(arrayString[i]);
    }

    return columnNumber;
};


function columnNumberForOneLetter(letter: string): number {
    return letter.charCodeAt(0) - 64;
}
