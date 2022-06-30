# Petite Router

Petite Router is a minimalistic router library for React.

- [Universal](https://github.com/coder-ka/petite-router/blob/master/README_universal.md)
- [日本語版](https://github.com/coder-ka/petite-router/blob/master/README_ja.md)

## Features

- Super simple and intuitive.
- You can use it wherever you want to use it.
- And can be combined with other router libraries.

## Getting Started

```bash
npm install --save @coder-ka/petite-router
```

The following example implements two routes, `home` and `about`.

```tsx
import { PetiteRouter } from "@coder-ka/petite-router";

const { Route, history } = PetiteRouter();

// or shorter usage
// import { default as router, Route, history } from "@coder-ka/petite-router";

function App() {
  return (
    <div>
      <a href="/">home</a>
      <br />
      <a href="/about">about</a>
      <br />

      <Route path="/" exact>
        home
      </Route>
      <Route path="/about">about</Route>
    </div>
  );
}

export default App;
```

You can use `Route` component with `path` attirbute to create routings.

Usually, `router.ts` should be created and expose `router` variable.

```ts
import { PetiteRouter } from "@coder-ka/petite-router";

export default PepiteRouter();
```

and import it.

```tsx
import router from ". /router`

const { Route, history } = router;
```

### `exact` attribtue

I specified `exact` attribute for the `/` route in the previous example unless every url matches the route.

If you want to match the expression only for url like `http://example.com/`, just use this attribute.

### `history` variable

The `history` variable in the previous example is [createBrowserHistory](https://github.com/remix-run/history/blob/dev/docs/getting-started.md) of [history](https://github.com/remix-run/history).

Thus, you can navigate programmatically using `history` variable. (e.g. `history.push`).

## Nested Rotue

You can nest `<Route>` components like below.

```tsx
function App() {
  return (
    <div>
      <a href="/parent/child">link</a>
      <br />

      <Route path="/parent">
        <Route path="/child">child</Route>
      </Route>
    </div>
  );
}
```

## Path parameters

You can specify placeholder for path parameters.

Because petite-router internally depends on [path-to-regexp](https://github.com/pillarjs/path-to-regexp), so you can specify a `path` attribute as follows.

```tsx
function App() {
  return (
    <div>
      <a href="/fruits/apple">link</a>
      <br />

      <Route path="/fruits/:name">
        {({ name }) => <span>I like {name}. </span>}
      </Route>
    </div>
  );
}
```

The `name` argument is inferred by TypeScript and it help you preventing typos for parameter names.

## Changing behavior.

`PetiteRouter` function takes parameters as follows.

- `history` - A `history` object.

```ts
import { PetiteRouter } from "@coder-ka/petite-router";
import { createMemoryHistory } from "history";

export default PepiteRouter({
  history: createMemoryHistory(), // for React Native
});
```

## TODO

- [ ] Query Parameters

## How to Contribute

There is no specific format.

Please feel free to send me a PR.

Also most of this README is translated by Deepl, so please send me a PR if you find something wrong with my english.
