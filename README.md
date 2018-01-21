# Hahow Recruitment Mini Project

This project is for Hahow recruitment only. Feel free to watch [the demo site](https://weihanglo.tw/hahow-recruiment).

## 🍛 Requirements

- An Unix-like system (macOS, Linux).
- [Node.js][nodejs] 8+ with [yarn][yarn] 1.3+.
- A [fine-tuned editor][vimrc].

## 🚀 Quick start

To run this project website locally,

1. clone this repository first.
2. Under project root, run `yarn` to install all dependencies.
2. Make sure that `localhost:8080` port is available (not bebind firewall or in use).
3. Run `yarn start`. It would launch the web app with your default browser.

All commands you need:

```bash
git clone https://github.com/weihanglo/hahow-recruitment.git
cd hahow-recruitment
yarn
yarn start
# open localhost:8080
```

## 🏠 Project Information

- **Platform**: compatible with **IE 11** and **iOS Safari 9**
- **UI Framework**: [React][react] bound with [React-Redux][react-redux]
- **State Management**: [Redux][redux] + [Redux-Observable][redux-observable]
- **Language**: ECMAScript 6+ transpiled by [Babel 7][babel]
- **Coding Style**: [Standard][standardjs] (with [ESLint][eslint])
- **Bundler**: [Webpack][webpack]
- **Git Hoosk**: [Husky][husky]
- **CSS Framework**: [Blueprint][blueprint]
- **Test Framework**: [Jest][jest]

## 📚 Documentation

**Project Architecture**

See [the app architecture](docs/architecture.md) in `docs/` directory.

**Contributing**

See [contributing guideline](docs/CONTRIBUTING.md) in `docs/` directory.

**Issues and Notes**

See some [issues and notes](docs/issues-and-notes.md) in `docs/` directory.

## 🎫 License

[The MIT License (MIT)](LICENSE)

Copyright © 2018 Weihang Lo

[babel]: https://babeljs.io/
[eslint]: https://eslint.org/
[husky]: https://github.com/typicode/husky
[jest]: https://facebook.github.io/jest/
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[react-redux]: https://github.com/reactjs/react-redux
[react]: https://facebook.github.io/react/
[redux-observable]: https://redux-observable.js.org/
[redux]: http://redux.js.org/
[standardjs]: https://standardjs.com
[vimrc]: https://github.com/weihanglo/dotfiles/blob/master/.config/nvim/init.vim
[webpack]: https://webpack.js.org/
[yarn]: https://yarnpkg.com/
[blueprint]: http://blueprintjs.com/
