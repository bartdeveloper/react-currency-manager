import React, { Component } from 'react'
import CurrencyItem from './CurrencyItem'

class Currency extends Component {

  render() {

    const { table, no, date, rates } = this.props

    return(
        <div>
            <div>
                Table {table} <strong>{no}</strong> from {date}
            </div>
            <div>
                <div>
                    {rates.map(r =>
                        <CurrencyItem
                            key={r.code}
                            code={r.code}
                            currency={r.currency}
                            mid={r.mid}
                    />    
                    )}
                </div>
            </div>
        </div>
    )
  }
}

export default Currency