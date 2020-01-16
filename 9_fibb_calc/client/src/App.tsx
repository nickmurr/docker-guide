import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OtherPage from "./components/other-page";
import "./styles/main.scss";
import MainPage from "./components/main-page";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/other" exact component={OtherPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
