import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ComposeTweet from "@/pages/ComposeTweet";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Search from "@/pages/Search";
import PrivateRoute from "@/components/PrivateRoute";
import RequireAuth from "@/components/RequireAuth";
import Logout from "./pages/Logout";
import Edit from "./pages/Profile/Edit";

function App() {
  return (
    <Router>
      <RequireAuth>
        <div className="App">
          <Switch>
            <PrivateRoute path="/search">
              <Search />
            </PrivateRoute>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/profile/edit">
              <Edit />
            </PrivateRoute>
            <PrivateRoute path="/compose">
              <ComposeTweet />
            </PrivateRoute>
            <PrivateRoute path="/reply">
              <ComposeTweet reply={true} />
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
