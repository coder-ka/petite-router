import { PetiteRouter } from "@coder-ka/petite-router";

const { Route, history } = PetiteRouter();

function App() {
  return (
    <div>
      <a href="/">home</a>
      <br />
      <a href="/about">about</a>
      <br />
      <a href="/fruits/apple">apple</a>
      <br />

      <button onClick={() => history.push("/fruits/banana")}>banana</button>
      <br />

      <Route path="/" exact>
        home
      </Route>
      <Route path="/about">about</Route>
      <Route path="fruits">
        I like
        <Route path="/:fruitsName">
          {({ fruitsName }) => <span>{fruitsName}.</span>}
        </Route>
      </Route>
    </div>
  );
}

export default App;
