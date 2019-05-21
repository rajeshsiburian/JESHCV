import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://yt3.ggpht.com/a-/AN66SAynRGG_D-D4k5jUZyCJxl7NvPk-XM3AP81MsQ=s900-mo-c-c0xffffffff-rj-k-no"
              alt="Rajesh Siburian"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Rajesh Siburian</h1>
          <p>CEO REALIZE</p>
          <p>Students in computer science and information systems from Universitas Gadjah Mada 
            with experience in designing user interfaces, user experience and Digital Marketing. Currently active as a student and is the Chief at his startup. for him, kindness is a virtue and he believes that every lesson, experience, and support from people around him are what makes him today.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
