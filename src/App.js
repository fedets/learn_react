import React, { Component } from "react";
import ReactDOM from "react-dom";

import css from "../node_modules/bootstrap/dist/css/bootstrap.css";

const Button = () => {
  return <button className="btn btn-primary">Button</button>;
};
class App extends Component {
  render() {
    return (
      <div className="container">
        React
        <Button />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
