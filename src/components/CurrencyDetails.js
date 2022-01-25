import React, {Component} from 'react';
import * as currencyApi from '../api/currencyApi'
import CurrencyRate from '../containers/CurrencyRate'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
class CurrencyDetails extends Component {

    componentDidMount = async () => {
        const exchangeRate = await currencyApi.get(`${this.props.match.params.name}`);
        this.setState({exchangeRate, finish: true})
    }

    state = {
        finish: false,
        exchangeRate: []
    }

    render(){

        //todo
        let mini = 0;
        let maxi = 6;

        const { exchangeRate, finish } = this.state

        return(

            <div>
                <div className="currency-rates">Currency rates for <strong>{this.props.match.params.name}</strong></div>
                
                <div className="chart">
                    <LineChart width={550} height={300} data={exchangeRate.rates}>
                        <Line type="monotone" dataKey="mid" stroke="#8884d8" dot={false}/>
                        <CartesianGrid stroke="#a5a1a1" strokeDasharray="5 5" />
                        <XAxis dataKey="effectiveDate" />
                        <YAxis interval="preserveStartEnd" domain={[mini, maxi]} />
                        <Tooltip />
                    </LineChart>
                </div>

                <div className="currency-rates-table">
                
                    <div className="currency-rates-table-items">

                        {finish === true &&  exchangeRate.rates.map(r => {
                            return <CurrencyRate
                            key={r.no}
                            no={r.no}
                            mid={r.mid}
                        />  
                        })}

                    </div>
                </div>
                
            </div>

        );

    }

}

export default CurrencyDetails