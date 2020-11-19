import React, { Component, Fragment } from "react";
import {Route , Switch }  from "react-router-dom";
import Login from "./HotStarComponent/AuthComponent/Login";
import Register from "./HotStarComponent/AuthComponent/Register";
 
import HeaderComponent from "./HotStarComponent/HeaderComponent/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <header>
          <HeaderComponent />
        </header>
        <main>
            <Switch>
                <Route path ="/login" exact component = {Login}/>
                <Route path ="/register" exact component = {Register}/>
            </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
