# Petite Router

Petite Router はミニマルな React 用ルーターライブラリです。

## 特徴

- 超シンプルで直観的。
- 使いたい場所で使えます。
- 他のルーターライブラリと組み合わせることができます。

## Getting Started

```bash
npm install --save @coder-ka/petite-router
```

下記の例は、`home`と`about`の２つのルートが存在する例です。

```tsx
import { PetiteRouter } from "@coder-ka/petite-router";

const { Route, history } = PetiteRouter();

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

`Route` コンポーネントに`path`（任意で`exact`）を指定することでルーティングを構築できます。

通常は、`router.ts`を作り、以下のように公開することを想定しています。

```ts
import { PetiteRouter } from "@coder-ka/petite-router";

export default PepiteRouter();
```

そして、下記のように`import`します。

```tsx
import router from ". /router`

const { Route, history } = router;
```

## `exact`

先の例で `/` に `exact` 属性を指定したのは、すべてのルートが `/` というパスに一致してしまうからです。

`http://example.com/` のような URL に完全一致した場合のみルーティングを適用するために`exact`属性を指定していたのです。

## `history`

先の例の`history`変数は、[history](https://github.com/remix-run/history)の[createBrowserHistory](https://github.com/remix-run/history/blob/v4/docs/GettingStarted.md#basic-usage)によってつくられています。

よって`history.push`を使ってプログラマティカルな遷移ができます。

## 入れ子にする

当然ですが、`<Route>` コンポーネントは入れ子にできます。

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

## パスパラメータ

パスパラメータも指定できます。

Petite Router は内部的に[path-to-regexp](https://github.com/pillarjs/path-to-regexp)に依存するため、下記のように指定できます。

```tsx
function App() {
  return (
    <div>
      <a href="/fruits/apple">link</a>
      <br />

      <Route path="/fruits/:name">
        {({ name }) => <span>I like {name}.</span>}
      </Route>
    </div>
  );
}
```

`name` は TypeScript によって推論され、パラメータ名のスペルミスを防ぐことができます。

## `PetiteRouter` 関数のパラメータ

- `history` ・・・ `history` オブジェクトを指定できます

```ts
import { PetiteRouter } from "@coder-ka/petite-router";
import { createMemoryHistory } from "history";

export default PepiteRouter({
  history: createMemoryHistory(), // React Native等の場合
});
```

## TODO

- [ ] クエリパラメータの利用

## How to Contribute

特定のフォーマットはありません。

お気軽に Pull Request を送ってください。
