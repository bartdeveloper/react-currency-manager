import React, { Component } from 'react'
import CurrencyItem from './CurrencyTableItem'

class CurrencyTable extends Component {

    state = {
        rates: this.props.rates
    }

    filterCurrencies(e) {
        const text = e.currentTarget.value;
        const filteredRates = this.getFilteredCurrenciesForText(text)
        this.setState({
          rates: filteredRates
        });
    }

    getFilteredCurrenciesForText(text) {
        return this.props.rates.filter(c => c.code.toLowerCase().includes(text.toLowerCase()))
    }

  render() {

    const { table, no, date } = this.props

    return(
        <div>
            <div className="currency-header">
                <strong>Table {table}</strong> no <strong>{no}</strong> from <strong>{date}</strong>
            </div>
            <div className="currency-input">
                <input onInput={this.filterCurrencies.bind(this)} placeholder="Type currency" />
            </div>
            <div className="currency-table">
                <div className="currency-table-items">
                    {this.state.rates.map(r =>
                        <CurrencyItem
                            key={r.code}
                            code={r.code}
                            currency={r.currency}
                            mid={r.mid}
                    />    
                    )}
                    {this.state.rates.length === 0 && <div className="alert alert-warning">No results!</div>}
                </div>
            </div>
        </div>
    )
    
  }
}

export default CurrencyTable