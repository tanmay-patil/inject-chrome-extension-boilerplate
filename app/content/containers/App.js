import React, { PureComponent } from "react";
import "./app.scss";
import Test from "../components/Test/";

class App extends PureComponent {

  render() {

    return (
      <div className="app">
        App Test
        <Test />
      </div>
    );
  }
}

export default App;
