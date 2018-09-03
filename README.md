# Marko Bugs

This repo is a place to reproduce DOM node bugs on [Marko](https://markojs.com/) component.

**NOTE**: All bugs here are already fixed on the latest Marko 4.13.0 🎊🎉 For the details, please see:

- https://github.com/marko-js/marko/issues/1052 
- https://github.com/marko-js/marko/issues/1051


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

```
Uncaught TypeError: Cannot read property 'parentNode' of null
at init-components-browser.js:259
...
```

To re-produce the bug: Run the server and go to:

- `http://localhost:8080/clickable-expander`.
- or `http://localhost:8080/clickable-expander-no-textual-display`

However, if we remove the client-side behaviour (no `component.js` and click event handlers), the error is gone: `http://localhost:8080/non-clickable-expander`

### Client-side error on dialog component

We got client-side error on clsoign and showing dialog component:

```
Component.js:542 Uncaught TypeError: Cannot read property 'nextSibling' of null
  at Component.___forEachNode (Component.js:542)
  at Component.___detach (Component.js:533)
...
```

To re-produce the bug: Run the server and go to:

- `http://localhost:8080/bug-dialog-close`.

However, if we simplified the dialog (simple text instead of nested component Textual Display),
the error is gone (`http://localhost:8080/bug-dialog-close-no-textual-display`)

