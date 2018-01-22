# Contributing to hahow-recruitment mini project :tada:

## Table of Contents

- [Build from Source](#build-from-source)
- [Git Work Flow](#git-work-flow)
- [Commit Messages](#commit-messages)
- [Commentary](#commentary)

## Build from Source

To build the app from source, you need the check if your system meets the requirements decribed on top-level [README.md](../README.md). Once you are OK, run following commands:

```bash
yarn build
```

The production code would be generated under `dist/` directory.  However, due to default base URL of the app is set to `/hahow-recruitment`, launching any simple server to serve the app would not work. If you want to serve production code directly, run:

```bash
BASENAME= yarn build
cd dist
python3 -m http.server # or any static serve command line tool
```

Exporting `BASENAME` environment variable modifies the app's base URL at build time. Feel free to change to any basename you want.

## Git Work Flow

[~~GitHub Flow~~][github-flow] One master branch to rule them all.

[github-flow]: https://guides.github.com/introduction/flow/

## Commit Messages

There are several types of commit message. All commit messages must be prefixed with a type.

- `[feature]`: Implement new features.
- `[bugfix]`: Fix some bugs.
- `[build]`: Tune some build script or configuration.
- `[test]`: Add new tests.
- `[refactor]`: Do a refactor.
- `[doc]`: Update documentation.

An example message should look as following:

```bash
[bugfix] apply flexbox compatiable CSS for IE 11

The flexbox implementation in IE 11 follows the old spec. We figure out some
hack to fix the layout issue. Here is current approach:

# ... other information in this commit

```

## Commentary

All comments inside the project codebase must conform to some regulations:

- **Style**: Use [JSDoc][jsdoc] style documentation comments as possible as you can. If following JSDoc rules is troublesome to you, you may ignore some strict rules and write your own readable comments. These comments are only for clarification of our code. We do not plan to generate any documentation website in the near future.
- **Target**: Function, function, and function. Please always provide function signatures. All functions should be document regardless how straightforward they are. JavaScript is a weak-typed programming language. A function without any signature may become a catastrophe in someday. If you think of strong-typed JavaScript variant to reduce the boilerplate, you can send a pull request to move our codebase to [TypeScript][typescript].
- **Logic comments**: Some logic do not accompany with documentation comments, but for explanation of the code logic itself. We are welcome for these kind of comments. Especially documenting edge cases such as lower/upper bound of a function call.

[typescript]: http://www.typescriptlang.org/
[jsdoc]: http://usejsdoc.org/
