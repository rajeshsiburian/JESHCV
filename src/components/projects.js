import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.dribbble.com/users/2443050/screenshots/5984016/ui_cecoca_full_2x.jpg) center / cover'}} >CECOCA Project #1</CardTitle>
            <CardText>
            CECOCA is a hotel price comparison application from various different websites, as an innovation in making it easy for people to find cheap hotels easily. 
            </CardText>
            <CardActions border>
              <Button colored href="https://dribbble.com/shots/5984016-User-Interface-CECOCA-Travel-app" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.dribbble.com/users/2443050/screenshots/6153819/ui_note_side_2x.jpg'}} >WriteME Project #2</CardTitle>
            <CardText>
            writeME is a simple note application that makes it easy for you to focus on what's most important and has access to your information when you need it.
            </CardText>
            <CardActions border>
            <Button colored href="https://dribbble.com/shots/6153819-UI-Note-writeME" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.dribbble.com/users/2443050/screenshots/6159891/imart3.gif'}} >Mart Project #3</CardTitle>
            <CardText>
            Mart is a solution for business owners who need commodities such as coffee, rice, cloth and others, especially in large quantities in large quantities.
            </CardText>
            <CardActions border>
              <Button colored href="https://dribbble.com/shots/6159891-UI-UX-Imart-Indonesia" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } 
    
    if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.dribbble.com/users/2443050/screenshots/6187363/ui_zarment_2x.jpg'}} >Zarment Project #1</CardTitle>
            <CardText>
            ZARMENT is an online apparel manufacturing platform that gives you the freedom to design and customize all your fashion needs. Credit: PT. ZARMENT GLOBAL TEKNOLOGI  
            </CardText>
            <CardActions border>
              <Button colored href="https://dribbble.com/shots/6187363-User-Interface-Zarment" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/60978451_2016196511842775_2260607842421571584_n.jpg?_nc_cat=100&_nc_ht=scontent.fcgk18-2.fna&oh=8da831fb0d067d1b844e32dc608e38eb&oe=5D69A5B7'}} >GOCIN Project #2</CardTitle>
            <CardText>
            GOCIN is a simple cinema web application that makes it easy for you to focus on what's most important and has access to your information when you need it.
            </CardText>
            <CardActions border>
            <Button colored href="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/60978451_2016196511842775_2260607842421571584_n.jpg?_nc_cat=100&_nc_ht=scontent.fcgk18-2.fna&oh=8da831fb0d067d1b844e32dc608e38eb&oe=5D69A5B7" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        
        </div>


      )
    }

    if(this.state.activeTab === 3){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/61140031_2016216518507441_5164644340319911936_n.jpg?_nc_cat=107&_nc_ht=scontent.fcgk18-2.fna&oh=f218eea3ef1c4e2bdb586dc875d309bd&oe=5D56EB4C'}} >New Life Project #1</CardTitle>
            <CardText>
            New life website, can change your mindset from various different websites, as an innovation in making it easy for people to find cheap hotels easily. 
            </CardText>
            <CardActions border>
              <Button colored href="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/61140031_2016216518507441_5164644340319911936_n.jpg?_nc_cat=107&_nc_ht=scontent.fcgk18-2.fna&oh=f218eea3ef1c4e2bdb586dc875d309bd&oe=5D56EB4C" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/60898732_2016207878508305_2728933734962167808_n.jpg?_nc_cat=102&_nc_ht=scontent.fcgk18-2.fna&oh=af1150355750c96e7d3eac30d18e7e46&oe=5D9C9E08'}} >Himakomsi Project #2</CardTitle>
            <CardText>
            Himakomsi UGM create website can that makes it easy for you to focus on what's most important and has access to your information when you need it.
            </CardText>
            <CardActions border>
            <Button colored href="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/60898732_2016207878508305_2728933734962167808_n.jpg?_nc_cat=102&_nc_ht=scontent.fcgk18-2.fna&oh=af1150355750c96e7d3eac30d18e7e46&oe=5D9C9E08" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/60827481_2016206851841741_3353106965424242688_n.jpg?_nc_cat=106&_nc_ht=scontent.fcgk18-2.fna&oh=b561fbbb9e2064e497f274a0b921be31&oe=5D6F2D23'}} >Amazing Project #3</CardTitle>
            <CardText>
            Amazing Grace website created by UKK UGM can that makes it easy for you to focus on what's most important and has access to your information when you need it.
            </CardText>
            <CardActions border>
              <Button colored href="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/60827481_2016206851841741_3353106965424242688_n.jpg?_nc_cat=106&_nc_ht=scontent.fcgk18-2.fna&oh=b561fbbb9e2064e497f274a0b921be31&oe=5D6F2D23" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    }

    if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://scontent.fcgk18-1.fna.fbcdn.net/v/t1.0-9/60870183_2016198571842569_70524758864691200_n.jpg?_nc_cat=103&_nc_ht=scontent.fcgk18-1.fna&oh=2c277109f7e08048c8e9115c069f54e0&oe=5D99D806'}} >Google Project #1</CardTitle>
            <CardText>
            Google marketing Certification is the best Certification from various different websites, as an innovation in making it easy for people to find cheap hotels easily. 
            </CardText>
            <CardActions border>
              <Button colored href="https://scontent.fcgk18-1.fna.fbcdn.net/v/t1.0-9/60870183_2016198571842569_70524758864691200_n.jpg?_nc_cat=103&_nc_ht=scontent.fcgk18-1.fna&oh=2c277109f7e08048c8e9115c069f54e0&oe=5D99D806" target="_blank">Visit Project</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Website coloumn</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is marketing coloumn</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Desain coloumn</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Mobile</Tab>
          <Tab>Website</Tab>
          <Tab>Marketing</Tab>
          <Tab>Desain</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
