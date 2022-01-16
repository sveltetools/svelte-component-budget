module.exports = function ({ budget = 200, include = [], exclude = [] } = {}) {
	return {
		markup: ({ content, filename }) => {
			const test = testFile(filename);

			if (
				(!include.length || include.some(test)) &&
				(!exclude.length || !exclude.some(test))
			) {
				const loc = content.split(/\r\n|\r|\n/).length;
				if (loc > budget) {
					console.log('\x1b[33m%s\x1b[0m', `Component ${filename} exceeded the budget: `);
					console.log('\x1b[31m%s\x1b[0m', `${loc} lines insted of ${budget}`);
				}
			}

			return { code: content };
		},
	};
};

function testFile(filename) {
	return (patten) => new RegExp(patten).test(filename);
}
