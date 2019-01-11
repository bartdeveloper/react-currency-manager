import React, {Component} from 'react'
import Footer from '../containers/Footer';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Currency from '../containers/Currency'
import * as currencyApi from '../api/currencyApi'
import Header from '../containers/Header'

const StyledLink = styled(Link)`
    color: palevioletred;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
        color: #fff;
    }
`
const Container = styled.div`
    background: #c0c0c0;
    color: #000;
    padding: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
`

class Start extends Component {

    componentDidMount = async () => {
        const exchangeRates = await currencyApi.getAll();
        this.setState({exchangeRates})
    }

    state = {
        exchangeRates: []
    }

    render(){

        const { exchangeRates } = this.state


        return(

            <div className="content col-md-12">
 
                <Header txt="Currency manager" />

                {exchangeRates.map(c => 
                   <Currency
                        key={c.no}
                        table={c.table}
                        no={c.no}
                        date={c.effectiveDate}
                        rates={c.rates}
                    />
                )}


                <Container>
                    <StyledLink to='Contact'>Contact</StyledLink>
                </Container>

                <Footer />

            </div>

        );

    }

}

export default Start;