import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CurrencyItem extends Component {

    render(){

        const { code, currency, mid } = this.props

        return(
            <div><strong><Link to={`/currency/${code}`}>{code}</Link></strong> {mid} PLN <small>{currency}</small></div>
        )
    }
}

export default CurrencyItem