import React, { Component } from 'react';

class NotFound extends Component {

    render(){

        return(
            <div>Path {this.props.location.pathname} not found...</div>
        );

    }

}

export default NotFound