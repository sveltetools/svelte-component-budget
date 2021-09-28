# SvelteJS preprocessor to control component's size (loc).

[![NPM version](https://img.shields.io/npm/v/svelte-component-budget.svg?style=flat)](https://www.npmjs.com/package/svelte-component-budget) [![NPM downloads](https://img.shields.io/npm/dm/svelte-component-budget.svg?style=flat)](https://www.npmjs.com/package/svelte-component-budget)

## Install

```bash
npm i svelte-component-budget --save-dev
```

```bash
yarn add svelte-component-budget
```

## Usage

```javascript
import componentBudget from 'svelte-component-budget';

module.exports = {
    compilerOptions: {
     ...
    },
    preprocess: [
        componentBudget(),
    ]
};
```

## Options

* `budget` - line of code budget for Svelte components (default: 200).

## License

MIT &copy; [PaulMaly](https://github.com/PaulMaly)
