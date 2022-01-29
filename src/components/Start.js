import React, {Component} from 'react'
import CurrencyTable from '../containers/CurrencyTable'
import * as currencyAPI from '../api/currencyAPI'

class Start extends Component {

    componentDidMount = async () => {
        const exchangeRates = await currencyAPI.getAll();
        this.setState({exchangeRates})
    }

    state = {
        exchangeRates: []
    }

    render(){

        const { exchangeRates } = this.state

        return(

            <div className="content col-md-12">

                {exchangeRates.map(c => 
                    <CurrencyTable
                            key={c.no}
                            table={c.table}
                            no={c.no}
                            date={c.effectiveDate}
                            rates={c.rates}
                    />
                )}

            </div>

        );

    }

}

export default Start;