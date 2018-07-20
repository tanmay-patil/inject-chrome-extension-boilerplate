import React, { PureComponent } from "react";
import "./app.scss";
import { Login } from "../components/Login/";

class App extends PureComponent {

  render() {

    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;
