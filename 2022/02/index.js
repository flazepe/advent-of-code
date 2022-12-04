const moves = require("fs").readFileSync("input.txt", "utf8").trim().split("\n");

console.log(
	"Part 1:",
	moves
		.map(_entry => {
			const [opponent, me] = _entry.split(" ");
			return [
				{ X: 1, Y: 2, Z: 3 }[me],
				{ A: "X", B: "Y", C: "Z" }[opponent] === me ? 3 : { A: "Y", B: "Z", C: "X" }[opponent] === me ? 6 : 0
			].reduce((_acc, _cur) => _acc + _cur);
		})
		.reduce((_acc, _cur) => _acc + _cur)
);

console.log(
	"Part 2:",
	moves
		.map(_entry => {
			const [opponent, method] = _entry.split(" "),
				me = { X: { A: "Z", B: "X", C: "Y" }[opponent], Y: { A: "X", B: "Y", C: "Z" }[opponent], Z: { A: "Y", B: "Z", C: "X" }[opponent] }[
					method
				];
			return [
				{ X: 1, Y: 2, Z: 3 }[me],
				{ A: "X", B: "Y", C: "Z" }[opponent] === me ? 3 : { A: "Y", B: "Z", C: "X" }[opponent] === me ? 6 : 0
			].reduce((_acc, _cur) => _acc + _cur);
		})
		.reduce((_acc, _cur) => _acc + _cur)
);
