# Petite Router

Petite Router is a minimalistic router for React.

## Features

- Super simple and intuitive.
- You can use it wherever you want.
- You can combine it with other router libraries.

## Getting Started

```bash
npm install --save @coder-ka/petite-router history
```

Petite Route requires `history` to be installed.(peer dependency)

`history` doc is [here](https://github.com/remix-run/history).

```tsx
import { PetiteRouter } from "@coder-ka/petite-router";
import { createBrowserHistory } from "history";

// create router
const { Route, history } = PetiteRouter({
  history: createBrowserHistory(),
});

function App() {
  return (
    <div>
      <!-- two links -->
      <a href="/">home</a>
      <br />
      <a href="/about">about</a>
      <br />

      <!-- two routes -->
      <Route path="/" exact>
        home
      </Route>
      <Route path="/about">about</Route>
    </div>
  );
}

export default App;
```

[example here](../example).

## Route

Use `path` attribtue to define route.

`<Route path="/about">about me</Route>`

The route above matches urls like

- `/about`
- `/about/hoge`
- `/about/hoge/fuga`

If you want it matches only `/about`, Use `exact` attribute.

`<Route path="/about" exact>about me</Route>`

matches only for

- `/about`

### Nested Route

Of course you can nest `<Route>` components like below.

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

### Path parameters

You can define path parameters in [path-to-regexp](https://github.com/pillarjs/path-to-regexp) style.(Petite Route internally depends on path-to-regexp)

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

**Type inference supported** , so the `name` argument is inferred correctly and it help avoiding typos.

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

Also please send me a PR if you find something wrong with my english.(I'm Japanese!!)
