import React, {Component} from 'react';

class Currency extends Component {

    render(){

        return(

            <div>Currency rates for <strong>{this.props.match.params.name}</strong></div>

        );

    }

}

export default Currency