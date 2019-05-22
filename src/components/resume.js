import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Organization from './organization';
import Skills from './skills';
import paspot from './paspot.jpg';


class Resume extends Component {
  render() {
    return(
      <div className="resume-right-co">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={paspot}
                alt="Rajesh Siburian formal"
                style={{height: '428px'}}
                 />
            </div>
            <div className="resume-right-coll">
            <h4 style={{paddingTop: '0em', textAlign: 'center'}}>CEO REALIZE</h4>
            <hr style={{borderTop: '3px solid rgb(222, 216, 164)', width: '100%'}}/>
            <hr style={{borderTop: '3px solid rgb(0, 111, 131)', width: '50%'}}/>
            <h5>Phone</h5>
            <p>+628 15 3653 3943</p>
            <h5>Email</h5>
            <p>rajeshsiburian@gmail.com</p>
            <h5>Web</h5>
            <p>realize.com</p>
            <h5>Address</h5>
            <p>UGM Residence, Yogyakarta, Indonesia</p>
            <hr style={{borderTop: '3px solid rgb(0, 111, 131)', width: '50%'}}/>
            <h4 style={{textAlign: 'center'}}>Personal Skills</h4>
              <Skills 
                skill="Public Speaking"
                progress={70}
                />
              <Skills
                skill="Flexibilty"
                progress={77}
                />
              <Skills
                skill="Teamwork"
                progress={73}
                />
                <Skills
                skill="Copywriting"
                progress={75}
                />
            <h4 style={{textAlign: 'center'}}>Technical Skills</h4>
              <Skills
                skill="Web Developer"
                progress={70}
                />
              <Skills
                skill="Digital Marketing"
                progress={75}
                />
              <Skills
                skill="UI and UX Designer"
                progress={77}
                />
              <Skills
                skill="Graphic Designer"
                progress={73}
                />
            <h4 style={{textAlign: 'center'}}>Software</h4>
            <p style={{textAlign: 'center'}}>Adobe AI, PS, and XD - Intermediate</p>
            <p style={{textAlign: 'center'}}>MS.Office - Intermediate</p>
            <p style={{textAlign: 'center'}}>Visual studio code- Intermediate</p>
            <p style={{textAlign: 'center'}}>Adobe Indesign - Beginner</p>
            <hr style={{borderTop: '3px solid rgb(0, 111, 131)', width: '15%'}}/>
            <h4 style={{textAlign: 'center'}}>LANGUAGE PROFICIENCY</h4>
            <p style={{textAlign: 'center'}}>Bahasa Indonesia and English</p>
            <hr style={{borderTop: '3px solid rgb(0, 111, 131)', width: '15%'}}/>
            <h4 style={{textAlign: 'center'}}>REFERENCE</h4>
            <p style={{textAlign: 'center'}}>Available on Request</p>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{color: 'rgb(0, 111, 131)', fontFamily: 'tahoma black'}}>RAJESH SIBURIAN</h2>
            <p>Students in computer science and information systems from Universitas Gadjah Mada 
            with experience in designing user interfaces, user experience and Digital Marketing. Currently active as a student and is the Chief at his startup. for him, kindness is a virtue and he believes that every lesson, experience, and support from people around him are what makes him today.</p>
            <h3 style={{color: 'rgb(0, 111, 131)', fontFamily: 'source sans pro semibold'}}>EDUCATION</h3>
            <div className="resume-right-colo" col={8}>
            <Education 
              startYear={2017}
              endYear={2021}
              schoolName="UNIVERSITAS GADJAH MADA"
              schoolDescription="Semester 4th, majoring in
              computer science and information systems"
               />

               <Education
                 startYear={2014}
                 endYear={2017}
                 schoolName="SMA Negeri 1 Pancur Batu"
                 schoolDescription="Graduate from majoring in Natural Science"
                  /></div>

              <h3 style={{color: 'rgb(0, 111, 131)', fontFamily: 'source sans pro semibold'}}>ORGANIZATIONS</h3>
              <div className="resume-right-colo" col={8}>
            <Organization
              startYear={2018}
              endYear={2020}
              jobName="Media · UKK UGM"
              jobDescription="Responsible in the field of graphic design,
              public relations and social media management."
              />

              <Organization
                startYear={2017}
                endYear={2020}
                jobName="ADPA · HIMAKOMSI UGM"
                jobDescription="Responsible in the field of administration,
                student publication and advocacy."
                />

              <Organization
                startYear={2015}
                endYear={2017}
                jobName="Public Relations · KEK SMAN 1 PB"
                jobDescription="Coordinator of public relations at the school."
                /></div>

<h3 style={{color: 'rgb(0, 111, 131)', fontFamily: 'source sans pro semibold'}}>EXPERIENCES</h3>
            <div className="resume-right-colo" col={8}>
            <Experience 
              startYear={2018}
              endYear={2019}
              jobName="Public Relations · VOCOMFEST NASIONAL"
              jobDescription="Coordinator of the television media partner and
              liasion officer of sub-event Mobile Apps Development."
               />

               <Experience
                 startYear={2018}
                 endYear={2018}
                 jobName="PUBDOK · RN-HKBP YOGYAKARTA"
                  jobDescription="Coordinator of graphic designer on the
                  christmas event at NHKBP Yogyakarta."
                  />
                  
                  <Experience
                 startYear={2018}
                 endYear={2018}
                 jobName="PDD · RAINBOWCIS UGM"
                  jobDescription="Coordinator of publication, design & documentation."
                  />

                  <Experience
                 startYear={2018}
                 endYear={2018}
                 jobName="LO IT & T · ASIAN GAMES 18th JKT & PLG"
                  jobDescription="Responsible for 14 full days
                  become IT & T liaison officer at GBK, Jakarta."
                  />

                  <Experience
                 startYear={2018}
                 endYear={2018}
                 jobName="PDD · Creative Workshop UKK UGM"
                  jobDescription="Coordinator of publication, design & documentation."
                  />

                  <Experience
                 startYear={2017}
                 endYear={2017}
                 jobName="PDD · Christmas SV UGM"
                  jobDescription="Staff of publication, design & documentation."
                  />
                  
                  <Experience
                 startYear={2017}
                 endYear={2017}
                 jobName="Speaker · GSJA INDONESIA"
                  jobDescription="Become a speaker at the national seminar
                  about the introduction and utilization of IT."
                  />
                  </div>
                

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
