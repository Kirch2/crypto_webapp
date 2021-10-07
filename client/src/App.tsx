import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { CryptoList } from "./pages/CryptoList";
import { WatchLists } from "./pages/WatchList";
import { WatchListNew } from "./pages/WatchListNew";
import { WatchListEdit } from "./pages/WatchListEdit";
import { Register } from "./pages/Register";
import { ResetUser } from "./pages/ResetUser";
import { WatchListId } from "./pages/WatchListId";

function App() {
  return (
    <Router>
      <Navbar hideLinks={false} user={{}} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoList />
              </Route>
              <Route exact path="/watchlists">
                <WatchLists />
              </Route>
              <Route exact path="/watchlists/new">
                <WatchListNew />
              </Route>
              <Route exact path="/watchlists/:id">
                <WatchListId />
              </Route>
              <Route exact path="/watchlists/:id/edit">
                <WatchListEdit />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/reset-password">
                <ResetUser />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
