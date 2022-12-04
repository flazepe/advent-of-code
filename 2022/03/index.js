const rucksacks = require("fs").readFileSync("input.txt", "utf8").trim().split("\n"),
	priorities = [
		...[..."abcdefghijklmnopqrstuvwxyz"].map((_entry, _index) => [_entry, _index + 1]),
		...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((_entry, _index) => [_entry, _index + 27])
	];

console.log(
	"Part 1:",
	rucksacks
		.map(
			_entry =>
				priorities.find(
					([_letter]) => _entry.slice(0, _entry.length / 2).includes(_letter) && _entry.slice(_entry.length / 2).includes(_letter)
				)[1]
		)
		.reduce((_acc, _cur) => _acc + _cur)
);

console.log(
	"Part 2:",
	rucksacks
		.reduce((_acc, _cur, _index) => {
			if (_index % 3 === 0) _acc.push([]);
			_acc[_acc.length - 1].push(_cur);
			return _acc;
		}, [])
		.map(_rucksacks => priorities.find(([_letter]) => _rucksacks.every(_entry => _entry.includes(_letter)))[1])
		.reduce((_acc, _cur) => _acc + _cur)
);
