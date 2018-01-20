# Project Architecture

## Table of Contents

- [Directories Arrangement](#directories-arrangement)
- [Components](#components)
- [Actions](#actions)
- [Epics](#epics)
- [Reducers](#reducers)
- [Selectors](#selectors)
- [Tests](#tests)

## Directories Arrangement

```bash
.
├── __tests__/
├── docs/                       # Documents (always out-of-date)
│  ├── architecture.md
│  └── CONTRIBUTING.md
├── src/
│  ├── actions/                 # Redux actions
│  ├── components/              # React components
│  │  ├── List/                 # Display Hero list
│  │  ├── Main.js               # Entry wrapper
│  │  └── Profile/              # Display a hero's profile
│  ├── reducers/                # Redux reducers
│  ├── store/                   # Redux store and middlewares
│  ├── App.js                   # Component handling redux store
│  ├── index.html
│  └── index.js
├── LICENSE
├── package.json
├── README.md
├── webpack.config.js
└── yarn.lock
```

## Components

The ideal component style in this project is [dumb components (a.k.a presentational components)][dumb-components]. All computations such as state selections and asynchronous actions should all keep outside a React component's life cycle as possible. The only exception is container conponents.

The components files are arranged as below:

- Put under `src/compoents` directory.
- The first letter of files or directories of compoents must be capitalized.
- All container components must be put in a directory named after itself. Under the directory, create two files:
    - An `index.js` file thats serve as a container compoents.
    - A `[dirname].js` file named after the directory serve as presentational components.

In this project, we put related container and presentational components as near as possible, instead of separating thems into two places.

[dumb-components]: https://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components

## Actions

## Epics

## Reducers

## Selectors

The project use `reselect` to select and memorize state of interest (SOI) of a component. The selector pattern can separate state from component rendering process, and make UI state more testable.

All reducer-specific selectors must be put in its dependant reducers. For example, `getButtonEnabled` selector only concern about `availablePoints` and `profile` state, so its can derive from `state.profile` without touching any other top-level reducers.

The directory to settle cross-reducer selectors is undefined. We should figure it out someday.

## Tests

This project adopts [Jest](jest) as the main testing framework. All test files are arranged with following rules:

- **Naming**: All test modules are named after the target module with `*.test.*` suffix. For example, test module of `selectors.js` must be named as `selectors.test.js`. Test module of `ProductList.tsx` must be named as `ProductList.test.tsx`.
- **Unit tests**: Put under the same directory of target module.
- **Integration tests**: Put under top level `__tests__/` directory.

[jest]: https://facebook.github.io/jest/
