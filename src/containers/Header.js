import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    render(){

        const { txt } = this.props

        return(
            <div><Link to='/'><h1>{txt}</h1></Link></div>
        )
    }
}

export default Header