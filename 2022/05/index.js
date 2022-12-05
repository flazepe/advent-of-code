const input = require("fs").readFileSync("input.txt", "utf8").split("\n"),
	crates = Object.fromEntries(
		Array(9)
			.fill(0)
			.map((_, _index) => [
				_index + 1,
				input
					.slice(0, 8)
					.map(_entry =>
						[..._entry]
							.map((_char, _index) => ((_index + 1) % 4 ? _char : "-"))
							.join("")
							.split("-")
					)
					.map(_crates => _crates[_index])
					.map(_entry => _entry.replace(/\W/g, ""))
					.filter(Boolean)
			])
	),
	part1 = JSON.parse(JSON.stringify(crates)),
	part2 = JSON.parse(JSON.stringify(crates));

for (const instruction of input.slice(10, -1)) {
	const [amount, from, to] = instruction.split(" ").filter(Number);

	// Part 1
	part1[to].unshift(...part1[from].splice(0, amount).reverse());

	// Part 2
	part2[to].unshift(...part2[from].splice(0, amount));
}

console.log(
	"Part 1:",
	Object.values(part1)
		.map(_entry => _entry[0])
		.join("")
);

console.log(
	"Part 2:",
	Object.values(part2)
		.map(_entry => _entry[0])
		.join("")
);
