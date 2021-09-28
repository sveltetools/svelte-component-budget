module.exports = function ({ budget = 200 } = {}) {
    return  {
        markup: ({ content, filename }) => {
            const loc = content.split(/\r\n|\r|\n/).length;
            if (loc > budget) {
                console.log('\x1b[33m%s\x1b[0m', `Component ${filename} exceeded the budget: `);
                console.log('\x1b[31m%s\x1b[0m', `${loc} lines insted of ${budget}`);
            }
                
            return { code: content };
        },
    }
};