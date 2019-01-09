import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NotFound extends Component {

   state = {
       counter: 5
   }

   componentDidMount = () => {
       const intervalId = setInterval(this.countdown, 1000)
       this.setState({intervalId})
   }

   countdown = () =>  this.setState({counter: this.state.counter - 1})

    render(){

        const { location } = this.props
        const { counter } =  this.state

        return(
            <div>
                <div>Path <code>{location.pathname}</code> not found...</div>
                <div>Redirect to homepage in {counter} seconds</div>
                {counter === 0 && <Redirect to='/' />}
            </div>
        );

    }

}

export default NotFound