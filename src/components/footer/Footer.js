import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
    height: 5vh;
    min-height: 5vh;
    width: 100%;
    background-color: transparent;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const linkedInClickHandler = () => window.open('https://www.linkedin.com/in/jthornton07')
const githubClickHandler = () => window.open('https://github.com/jonthornton07')
const twitterClickHandler = () => window.open('https://twitter.com/jthornton07')

function Footer() {
    return (
        <Container>
            {/* <FontAwesomeIcon icon={faEnvelope} color='#ffffff' onClick={twitterClickHandler} style={{marginRight: '25px', marginLeft: '25px'}}/> */}
            <FontAwesomeIcon icon={faLinkedinIn} color='#ffffff' onClick={linkedInClickHandler} style={{marginRight: '25px', marginLeft: '25px'}}/>
            <FontAwesomeIcon icon={faGithubAlt} color='#ffffff' onClick={githubClickHandler} style={{marginRight: '25px', marginLeft: '25px'}}/>
            <FontAwesomeIcon icon={faTwitter} color='#ffffff' onClick={twitterClickHandler} style={{marginRight: '25px', marginLeft: '25px'}}/>
        </Container>
    )
}

export default Footer