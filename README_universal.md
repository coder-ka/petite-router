# Petite Router

Router for React.

## Getting Started

```bash
npm install --save @coder-ka/petite-router
```

**router.ts**

```ts
import { PetiteRouter } from "@coder-ka/petite-router";

export default PetiteRouter();
```

**App.tsx**

`/` -> home

`/about` -> about

```tsx
import router from "./router.ts";

const { Route, history } = router;

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

## `exact`

`/` -> home

`/hoge` -> x

```tsx
import { Route, history } from "./router.ts";

function App() {
  return (
    <div>
      <a href="/">home</a>
      <br />

      <Route path="/" exact>
        home
      </Route>
    </div>
  );
}

export default App;
```

## Nested Rotue

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

## Setting

```ts
import { PetiteRouter } from "@coder-ka/petite-router";
import { createMemoryHistory } from "history";

export default PepiteRouter({
  history: createMemoryHistory(), // React Native
});
```

## TODO

- [ ] Query Parameters

## How to Contribute

Send PR!!
