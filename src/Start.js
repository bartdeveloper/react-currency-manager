import React, {Component} from 'react'
import logo from './logo.svg';
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
    margin: 15px;
`

class Start extends Component {

    render(){

        return(

            <div className="">
                    
                <img src={logo} className="App-logo" alt="logo" />
                        
                <p>
                    <code>Test project</code>.
                </p>
                        
                <p>
                    <StyledLink to={`Contact`}>Contact</StyledLink>
                </p>

                <Container>Test styled div</Container>

                <Footer />

            </div>

        );

    }

}

export default Start;