# Contributing to hahow-recruitment mini project :tada:

## Build from source

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
