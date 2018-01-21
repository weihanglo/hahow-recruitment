# Project Architecture

## Table of Contents

- [Directories Arrangement](#directories-arrangement)
- [Components](#components)
- [Actions](#actions)
- [Epics](#epics)
- [Reducers](#reducers)
- [Selectors](#selectors)
- [Tests](#tests)
- [Web UI](#web-ui)

## Directories Arrangement

```bash
.
├── __tests__/                  # Integration tests
├── docs/                       # Documents (always out-of-date)
│  ├── architecture.md
│  └── CONTRIBUTING.md
├── src/
│  ├── actions/                 # Redux actions
│  ├── components/              # React components
│  │  ├── List/                 # Display Hero list
│  │  ├── Profile/              # Display a hero's profile
│  │  └── Main.js               # Entry wrapper
│  ├── reducers/                # Redux reducers
│  ├── store/                   # Redux store and middlewares
│  ├── App.js                   # Component handling redux store
│  ├── index.html
│  └── index.js
├── dist.sh*                    # Simple script to push dist/* to gh-pages
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

There is no magic in reducers. We try our best to follow major design patterns and what Redux documentation says. All async action goes to [Epics](#epics). Modules under `src/actions/` directory are action constants action creators. The purpose of these modules is just for readability and traceability. 

The only action creators outside `src/actions/` are React Router history creators (e.g. `push`, `replace`). We may move them into the directory someday.

## Epics

Epics are asynchronous action handlers defined by [Redux-Observable][redux-observable]. The major difference between [Redux-Thunk][redux-thunk] and it is that Redux-Observable not only gives you the raw power to use Redux Store, but also enhances the action handling process more happier with the core concept of [RxJS][rxjs]: all data are observable streams.

In this project, all epics goes into the same module file of related reducers. The reason is that it would be closer to other epics to combine with. And then combined epic can easily inject into Redux as a middleware. Though the role of epics may be more similiar to action creators, and functions epics calling are almost action creators-related. As the project grows, we need to figure out a way to manage epics.

[redux-observable]: https://redux-observable.js.org/
[redux-thunk]: https://github.com/gaearon/redux-thunk
[rxjs]: http://reactivex.io/rxjs/

## Reducers

There is no magic in reducers. We try our best to follow major design patterns and what Redux documentation says. Again, no magic in reducers.

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

## Web UI

**UI framework**

The project apply styling with [Blueprint](blueprint) framework, a React-based framework targeting on data-dense website. It is only an opinionated decision.

The project uses [style-loader][style-loader] and [css-loader][css-loader] along with [Webpack][webpack] to bundle all CSS file into `index.html` at build time. We may need to split CSS from other scripts via [extract-text-webpack-plugin][extract-text] in the future.

**Custom CSS rules**

Besides UI framework we choose, all the other custom CSS styling file must be put under the same directory of the component it decorates, and the filename should be `style.css`. For example, `src/components/List/List.js` React component gets a CSS styling in `src/components/List/style.css`. This CSS file would decorate all components under the same level unless there is another subdirectory containing another component.

[webpack]: https://webpack.js.org
[extract-text]: https://github.com/webpack-contrib/extract-text-webpack-plugin
[style-loader]: https://github.com/webpack-contrib/style-loader
[css-loader]: https://github.com/webpack-contrib/css-loader
[blueprint]: http://blueprintjs.com/
