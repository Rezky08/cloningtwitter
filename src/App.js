import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ComposeTweet from "@/pages/ComposeTweet";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/compose">
            <ComposeTweet />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
