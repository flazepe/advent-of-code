console.log(
	require("fs")
		.readFileSync("./input.txt", "utf8")
		.trim()
		.split("\n")
		.reduce(
			(_acc, _cur) => {
				const ranges = _cur.split(",").map(_pair => {
					_pair = _pair.split("-");
					let range = [];
					for (let i = +_pair[0]; i <= _pair[1]; i++) range.push(i);
					return range;
				});

				if (ranges[0].every(_entry => ranges[1].includes(_entry)) || ranges[1].every(_entry => ranges[0].includes(_entry))) _acc["Part 1"]++;
				if (ranges[0].some(_entry => ranges[1].includes(_entry)) || ranges[1].some(_entry => ranges[0].includes(_entry))) _acc["Part 2"]++;

				return _acc;
			},
			{ "Part 1": 0, "Part 2": 0 }
		)
);
