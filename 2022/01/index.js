const topElves = require("fs")
	.readFileSync("input.txt", "utf8")
	.split("\n\n")
	.map(_line => _line.split("\n").reduce((_acc, _cur) => +_acc + +_cur, 0))
	.sort((_prev, _next) => _next - _prev);

console.log("Part 1:", topElves[0]);

console.log(
	"Part 2:",
	topElves.slice(0, 3).reduce((_acc, _cur) => _acc + _cur)
);
