import React, { Component } from 'react';
import * as currencyAPI from '../api/currencyAPI'
import CurrencyRate from '../containers/CurrencyRate'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import DatePicker from 'react-date-picker';

class CurrencyDetails extends Component {

    state = {
        finish: false,
        exchangeRate: [],
        chosenDate: null
    }
    
    componentDidMount = async () => {
        const exchangeRate = await currencyAPI.getFewLastRatesByCode(`${this.props.match.params.name}`);
        this.setState({exchangeRate, finish: true});
    }

    getRateCurrencyForDate = async (date) => {
        this.setState({finish: false, chosenDate: date}); 
        if(date){
            let day = date.getDate();
            if (day < 10) day = `0${day}`;
            let month = date.getMonth() + 1;
            if (month < 10) month = `0${month}`;
            const preparedDate = `${date.getFullYear()}-${month}-${day}`;
            const exchangeRate = await currencyAPI.getRateForCodeByDate(this.props.match.params.name, preparedDate);
            this.setState({exchangeRate, finish: true});
        } else {
            const exchangeRate = await currencyAPI.getFewLastRatesByCode(`${this.props.match.params.name}`);
            this.setState({exchangeRate, finish: true});
        }
    }

    render(){

        const { chosenDate: dater, exchangeRate, finish } = this.state

        return(

            <div>
                <div className="currency-rates">Currency rates for <strong>{this.props.match.params.name}</strong></div>
                
                <div className="chart">
                    <LineChart width={550} height={300} data={exchangeRate.rates}>
                        <Line type="monotone" dataKey="mid" stroke="#8884d8" dot={false}/>
                        <CartesianGrid stroke="#a5a1a1" strokeDasharray="5 5" />
                        <XAxis dataKey="effectiveDate" />
                        <YAxis interval="preserveStartEnd" />
                        <Tooltip />
                    </LineChart>
                </div>

                <div>
                    <DatePicker
                        onChange={(value) => this.getRateCurrencyForDate(value)}
                        value={dater}
                    />
                </div>

                <div className="currency-rates-table">
                
                    <div className="currency-rates-table-items">

                        {finish === true &&  exchangeRate.rates.map(r => {
                            return <CurrencyRate
                            key={r.no}
                            no={r.no}
                            mid={r.mid}
                            date={r.effectiveDate}
                        />  
                        })}

                    </div>
                </div>
                
            </div>

        );

    }

}

export default CurrencyDetails