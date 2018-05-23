# Marko Bugs

This repo demos Marko component bugs we experienced.

## Install

We use Node.js v8.11.1, Marko v4.9.7, and the latest Yarn.

```bash
yarn install
```

## Starting the server

```bash
yarn start
```

Go to `http://localhost:8080/`.

## Bug Demos

### Client-side error on expander button

We got client-side error on expandable/accordion content.

To re-produce the bug: Run the server and go to:

- `http://localhost:8080/clickable-expander`.
- or `http://localhost:8080/clickable-expander-no-textual-display`

However, if we remove the client-side behaviour (no `component.js` and click event handlers), the error is gone: `http://localhost:8080/non-clickable-expander`
