let table = new Map([
	["I", 1],
	["V", 5],
	["X", 10],
	["L", 50],
	["C", 100],
	["D", 500],
	["M", 1000]
]);

function romanToInt(s: string): number {
	let arrray = s.split("");
	let sum = 0;

	for (let index = 0; index < arrray.length; index++) {
		const currentSymbol = arrray[index];

		if (!isSymbolePlaceBefore(currentSymbol)) {
			sum += table.get(currentSymbol);
		}
		else {
			if (index + 1 >= arrray.length) {
				sum += table.get(currentSymbol);
			}
			else {
				let nextSymbole = arrray[index + 1];
				switch (currentSymbol) {
					case "I":
						if (nextSymbole == "V" || nextSymbole == "X") {
							sum += (table.get(nextSymbole) - table.get(currentSymbol));
							index++;
						}
						else {
							sum += table.get(currentSymbol);
						}
						break;
					case "X":
						if (nextSymbole == "L" || nextSymbole == "C") {
							sum += (table.get(nextSymbole) - table.get(currentSymbol));
							index++;
						}
						else {
							sum += table.get(currentSymbol);
						}
						break;
					case "C":
						if (nextSymbole == "D" || nextSymbole == "M") {
							sum += (table.get(nextSymbole) - table.get(currentSymbol));
							index++;
						}
						else {
							sum += table.get(currentSymbol);
						}
						break;
				}
			}
		}
	}
	return sum;
};

function isSymbolePlaceBefore(symbol: string): boolean {
	return symbol == "I" || symbol == "X" || symbol == "C"
}