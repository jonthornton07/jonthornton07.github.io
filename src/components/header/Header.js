import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 5vh;
    min-height: 5vh;
    width: 100%;
    background-color: transparent;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
`

function Header() {
    return (
        <Container>
            <Link to="/">
                <FontAwesomeIcon icon={faHome} color='#ffffff' style={{marginRight: '25px', marginLeft: '25px'}}/> 
            </Link>
            <Link to="/blog">
                <FontAwesomeIcon icon={faRss} color='#ffffff' style={{marginRight: '25px', marginLeft: '25px'}}/> 
            </Link>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUser} color='#ffffff' style={{marginRight: '25px', marginLeft: '25px'}}/> 
            </Link>
        </Container>
    )
}

export default Header