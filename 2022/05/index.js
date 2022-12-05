const input = require("fs").readFileSync("input.txt", "utf8").split("\n"),
	formattedCrates = Object.fromEntries(
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
	);

function sortCrates(reverse) {
	const crates = JSON.parse(JSON.stringify(formattedCrates));

	for (const instruction of input.slice(10, -1)) {
		const [amount, from, to] = instruction.split(" ").filter(Number);
		crates[to].unshift(...crates[from].splice(0, amount)[reverse ? "reverse" : "slice"]());
	}

	return Object.values(crates)
		.map(_entry => _entry[0])
		.join("");
}

console.log("Part 1:", sortCrates(true));
console.log("Part 2:", sortCrates());
