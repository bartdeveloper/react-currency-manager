import React, { Component } from 'react'

class Currency extends Component {

  render() {

    const { table, no, date, rates } = this.props

    return(
        <div>
            <div>
                Table {table} <strong>{no}</strong> from {date}
            </div>
            <div>
                
            </div>
        </div>
    )
  }
}

export default Currency