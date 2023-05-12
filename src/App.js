import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CandidateForm from "./components/CandidateForm/CandidateForm";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Login from "./components/Login/Login";
import CandidateList from "./components/CandidateList/CandidateList";

const App = () => {
  return (
    <Router>
      <div>
        {/* add nav bar hear */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <CandidateForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/candidates-list">
            <CandidateList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// const App = () => {
//   let routes = Router([
//     { path: "/", element: <CandidateForm /> },
//     { path: "component2", element: <Component2 /> },
//     // ...
//   ]);
//   return routes;
// };

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <App />
        <Footer />
      </Router>
    </Provider>
  );
};

export default AppWrapper;
