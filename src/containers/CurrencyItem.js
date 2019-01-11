import React, {Component} from 'react'

class CurrencyItem extends Component {

    render(){

        const { code, currency, mid } = this.props

        return(
            <div><strong>{code}</strong> {mid} PLN <small>{currency}</small></div>
        )
    }
}

export default CurrencyItem