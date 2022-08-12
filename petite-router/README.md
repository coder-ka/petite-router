# Petite Router

Petite Router is a minimalistic router library for React.

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
import { createBrowserHistory } from "history";

const { Route, history } = PetiteRouter({
  history: createBrowserHistory(),
});

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

Usually, `router.ts` should be created and expose `Route` component and `history` variable.

```ts
import { PetiteRouter } from "@coder-ka/petite-router";
import { createBrowserHistory } from "history";

const router = PepiteRouter({
  history: createBrowserHistory(),
});

export const Route = router.Route;
export const history = router.history;
```

and import it.

```tsx
import { Route, history } from ". /router`
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

## Server-side rendering

Vite example below.

```ts
import { PetiteRouter } from "@coder-ka/petite-router";
import { createBrowserHistory, createMemoryHistory } from "history";

const router = PepiteRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createBrowserHistory(),
});
```

## TODO

- [ ] Query Parameters

## How to Contribute

There is no specific format.

Please feel free to send me a PR.

Also most of this README is translated by Deepl, so please send me a PR if you find something wrong with my english.
