import React, { Component } from 'react';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : "home"
    };
  }

  setCurrentPage = value => {
    this.setState({currentPage: value});
  }

  render() {
    return (
      <div>
        { this.state.currentPage === "signin" ? (
            <Signin />
          ) : this.state.currentPage === "signup" ? (
            <Signup />
          ) : <Home />
        }
      </div>
    );
  }
}

export default App;
