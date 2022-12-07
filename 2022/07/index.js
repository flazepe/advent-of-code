let paths = {},
	currentPath = [];

for (const entry of require("fs").readFileSync("input.txt", "utf8").trim().split("\n")) {
	if (entry[0] === "$") {
		[command, arg] = entry.slice(2).split(" ");
		if (command === "cd") currentPath = arg === "/" ? [] : arg === ".." ? currentPath.slice(0, -1) : [...currentPath, arg];
	} else {
		const [size, name] = entry.split(" ");
		paths[[...currentPath, name].join("/")] = isNaN(size) ? 0 : +size;
	}
}

paths = Object.entries(paths);

const files = Object.fromEntries(paths.filter(([, _size]) => _size)),
	dirs = Object.fromEntries(paths.filter(([, _size]) => !_size));

for (let [path, size] of Object.entries(files)) {
	path = path.split("/");

	const individualPaths = Array(path.length)
		.fill(0)
		.map((_, _index) => path.slice(0, -_index).join("/"))
		.slice(1);

	for (const individualPath of individualPaths) dirs[individualPath] += size;
}

console.log(
	"Part 1:",
	Object.values(dirs).reduce((_acc, _cur) => _acc + (_cur <= 100000 ? _cur : 0), 0)
);

const available = 70000000 - Object.values(files).reduce((_acc, _cur) => _acc + _cur);

console.log(
	"Part 2:",
	Object.values(dirs)
		.sort((_prev, _next) => _prev - _next)
		.find(_value => available + _value >= 30000000)
);
