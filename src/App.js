import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/compose">Compose</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
