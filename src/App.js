import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import Start from './components/Start';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './containers/Header'
import Footer from './containers/Footer';
import { Link } from 'react-router-dom'

const Currency = lazy( () => import('./components/Currency'))

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

const SmallContainer = styled.div`
    background: #c0c0c0;
    color: #000;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
`

const StyledLink = styled(Link)`
    color: palevioletred;
    text-decoration: none;

      &:hover {
          color: #fff;
      }
`
class App extends Component {
  render() {
    return (

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
          
            <Header txt="Currency manager" />
              
            <Switch>
              <Route exact path='/' component={Start} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/currency/:name' component={Currency} />
              <Route component={NotFound} />
            </Switch>
            
            <SmallContainer>
              <StyledLink to='/Contact'>Contact</StyledLink>
            </SmallContainer>

            <Footer />

          </Container>
        </Suspense>
      </Router>

    );
  }
}

export default App;
