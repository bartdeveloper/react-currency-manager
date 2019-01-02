import React, { Component } from 'react';
import './App.css';
import Start from './Start';
import Contact from './Contact';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path='/' component={Start} />
          <Route path='/contact' component={Contact} />
          <Route path='/welcome/:name' component={Welcome} />
        </div>
      </Router>

    );
  }
}

export default App;
