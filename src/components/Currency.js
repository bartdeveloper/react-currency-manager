import React, {Component} from 'react';
import * as currencyApi from '../api/currencyApi'
import CurrencyTable from '../containers/CurrencyTable'

class Currency extends Component {

    componentDidMount = async () => {
        const exchangeRate = await currencyApi.get(`${this.props.match.params.name}`);
        this.setState({exchangeRate})
    }

    state = {
        exchangeRate: []
    }

    render(){

        const { exchangeRate } = this.state

        return(

            <div>
                <div>Currency rates for <strong>{this.props.match.params.name}</strong></div>
                
            </div>

        );

    }

}

export default Currency