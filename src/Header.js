import React, {Component} from 'react'

class Header extends Component {

    render(){

        const {txt} = this.props

        return(
            <div><h1>{txt}</h1></div>
        )
    }
}

export default Header