import React, {Component} from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

    render(){

        return(

            <div className="content">
 
                <p>
                    Rental manager
                </p>

                <Container>
                    <StyledLink to='Contact'>Contact</StyledLink>
                </Container>

                <Footer />

            </div>

        );

    }

}

export default Start;