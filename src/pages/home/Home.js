import React from 'react';
import styled from 'styled-components'
import homeBackground from '../../assets/homeBackground.png'
import profilePicture from '../../assets/profilePicture.png'


const Container = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
`

const BackgroundImage = styled.img`
    filter: blur(15px);
    height: auto;
    display: block;
    transform: scale(1.1);
`

const Sign = styled.div`
    width: 60%;
    top: 20%;
    margin-left: 20%;
    background: #ffffff;
    position: absolute;
    background-color: #282c34;
    
`

const SignText = styled.h1`
    color: #ffffff;
    text-align: center;
    float: left;
`

const ProfileIamge = styled.img`
    border-radius: 50%;
	border: 3px solid #ffffff;
    margin: 20px;
	height: 200px;
	width: 200px;
    float: left;
`

function Home() {
    return (
        <Container>
            <Container>
                <BackgroundImage src={homeBackground}/>
            </Container>
            <Sign>
                <ProfileIamge src={profilePicture}/>
                <SignText>Father • Husband • Developer • Gamer</SignText>
            </Sign>
        </Container>
    )
}

export default Home