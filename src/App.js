import React from 'react';
import styled from 'styled-components'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Blog from './pages/blog/Blog';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`

function App() {
  return (
    <Router>
      <Container>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/blog" component={Blog} />
        <Footer/>
      </Container>
  </Router>
  );
}

export default App;
