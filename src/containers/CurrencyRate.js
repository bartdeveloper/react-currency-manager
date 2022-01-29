import React, {Component} from 'react'
import styled from 'styled-components'

const RateContainer = styled.div`
    background: #f0f0f0;
    color: #000;
    padding: 15px;
    margin-top: 15px;
`

class CurrencyRate extends Component {

    render(){

        const { no, mid, date } = this.props

        return(
            <RateContainer><div>{date} <strong>{mid}</strong> PLN<br/><small>{no}</small></div></RateContainer>
        )
    }
}

export default CurrencyRate