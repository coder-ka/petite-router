import router from "./router";

const { Route, history } = router;

function App() {
  return (
    <div>
      <a href="/">goto home</a>
      <br />
      <button onClick={() => history.push('/about')}>goto about</button>
      <br />

      <Route path="/" exact>
        home
      </Route>
      <Route path="/about">about</Route>
    </div>
  );
}

export default App;
