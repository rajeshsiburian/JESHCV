import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import paspot from './jejelogo.png';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link to="/"><img
                src={paspot}
                alt="Rajesh Siburian formal"
                style={{height: '78px'}}
                 /></Link>}>
              <Navigation>
                  <Link to="/resume" style={{color: 'rgb(222, 216, 164)', fontFamily: 'tahoma black'}}>Curriculum vitae</Link>
                  <Link to="/projects" style={{color: 'rgb(222, 216, 164)', fontFamily: 'tahoma black'}}>Projects</Link>
                  <Link to="/contact" style={{color: 'rgb(222, 216, 164)', fontFamily: 'tahoma black'}}>Contact</Link>
              </Navigation>
          </Header>
          <Drawer style={{background: 'rgb(0, 111, 131)'}}>
              <Navigation >
              <Link to="/">  
              <img
                src={paspot}
                alt="Rajesh Siburian formal"
                style={{height: '78px'}}
                 /></Link>
                <Link to="/resume" style={{color: 'rgb(222, 216, 164)', fontFamily: 'tahoma black'}}>Resume</Link>  
                <Link to="/projects" style={{color: 'rgb(222, 216, 164)', fontFamily: 'tahoma black'}}>Projects</Link>
                <Link to="/contact" style={{color: 'rgb(222, 216, 164)', fontFamily: 'tahoma black'}}>Contact</Link>
              </Navigation>
          </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
