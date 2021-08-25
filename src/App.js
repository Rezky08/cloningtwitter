import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ComposeTweet from "@/pages/ComposeTweet";
import Login from "@/pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <RequireAuth>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/compose">
              <ComposeTweet />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </div>
      </Router>
    </RequireAuth>
  );
}

export default App;
