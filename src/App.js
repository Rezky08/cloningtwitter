import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ComposeTweet from "@/pages/ComposeTweet";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Search from "@/pages/Search";
import PrivateRoute from "@/components/PrivateRoute";
import RequireAuth from "@/components/RequireAuth";

function App() {
  return (
    <Router>
      <RequireAuth>
        <div className="App">
          <Switch>
            <PrivateRoute path="/search">
              <Search />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/compose">
              <ComposeTweet />
            </PrivateRoute>
            <Route path="/:username">
              <Profile />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </div>
      </RequireAuth>
    </Router>
  );
}

export default App;
