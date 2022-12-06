const input = require("fs").readFileSync("input.txt", "utf8");

function findUniquePacket(length) {
	for (let i = 0; i < input.length; i++) {
		const packet = Array(length)
			.fill(0)
			.map((_, _index) => input[i + _index]);
		if (new Set(packet).size === length) return i + length;
	}
}

console.log("Part 1:", findUniquePacket(4));
console.log("Part 2:", findUniquePacket(14));
