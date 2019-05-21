import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <img
              src="https://yt3.ggpht.com/a-/AN66SAynRGG_D-D4k5jUZyCJxl7NvPk-XM3AP81MsQ=s900-mo-c-c0xffffffff-rj-k-no"
              alt="avatar"
              style={{height: '250px'}}
               />
               <h2>Rajesh Siburian</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Students in computer science and information systems from Universitas Gadjah Mada 
            with experience in designing user interfaces, user experience and Digital Marketing.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'source sans pro Reguler'}}>
                    <i className="fa fa-linkedin" aria-hidden="true" text-color="blue"/>
                    Rajesh Siburian
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'source sans pro Reguler'}}>
                    <i className="fa fa-phone" aria-hidden="true"/>
                    +628 15 3653 3943
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'source sans pro Reguler'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    jeshvers@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', Color:'blue', fontFamily: 'source sans pro Reguler'}}>
                  <i class="material-icons">room</i>
                    UGMR, Yogyakarta
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
