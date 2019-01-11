import React, { Component } from 'react';
import './App.css';
import Start from './components/Start';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background: #c0c0c0;
    color: #000;
    padding: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 820px;
    text-align: center;
    border-radius: 7px;
`
class App extends Component {
  render() {
    return (

      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={Start} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/welcome/:name' component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>

    );
  }
}

export default App;
