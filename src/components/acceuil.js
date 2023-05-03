import React, { Component } from 'react';
import img1 from './image/info.jpg';
import img2 from './image/logicie.jpg';
import img3 from './image/conseil.png';
import img4 from './image/services.jpg';
import img5 from './image/welcome.jpg';
import img11 from './image/pc gamer.jpg';
import img21 from './image/mini-haut-parleur.jpg';
import img31 from './image/flash.jpg';
import img41 from './image/memoire.jpg';
import img51 from './image/disque-dur.jpg';

import axios from 'axios';
import {MDBRow, MDBCol,MDBCarousel,MDBCarouselInner, MDBCarouselItem,MDBCarouselElement,MDBCard, MDBCardImage, MDBCardTitle, MDBCardText,
   } from 'mdb-react-ui-kit';
  import "bootstrap/dist/css/bootstrap.min.css";
    class Acceuil extends Component {
      constructor(props) {

        super(props);
        this.state = { activites: [],logiciels:[]};
    }
    componentDidMount = async () => {
      this.getActivites();
      this.getLogiciels();

  }
  componentDidUpdate() { this.getActivites();
  this.getLogiciels(); }
  getActivites = async () => {
      await axios.get("http://localhost:3005/activites")
          .then(response =>
              this.setState({
                  activites: response.data
              }))
          .catch(function (error) {
              console.log(error);
          })
  }
  getLogiciels = async () => {
    await axios.get("http://localhost:3005/logiciels")
        .then(response =>
            this.setState({
                logiciels: response.data
            }))
        .catch(function (error) {
            console.log(error);
        })
}
      
      render(){
    return (
<div className="Acceuil" style={{backgroundColor:'#E0F2F1'}}>
    <MDBRow>
    <MDBCol md='1' className='col-example'></MDBCol>
        <MDBCol md='10' className='col-example'>
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={img5} height="500px" alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src={img3} height="500px" alt='...' />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src={img2} height="500px" alt='...' />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src={img1} height="500px" alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <MDBCarouselElement src={img4} height="500px" alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    <div className="text-center" style={{backgroundColor:'#006064',color:'#B2EBF2',fontFamily:'times new romon',fontStyle:'italic', fontSize:'30px'}}>Nos Services</div>

    <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
    {this.state.logiciels.map((l) =>
      <MDBCol>
        <MDBCard style={{backgroundColor:'#BBDEFB'}} className='h-100'>
        <MDBCardTitle style={{color:'#0D47A1',fontStyle:'times new romon',fontSize:'23px',float:'left',fontSize:'30px',fontFamily:'italic'}}><strong>{l.logDesig}</strong></MDBCardTitle>
          <MDBCardText style={{color:'#1565C0',fontStyle:'times new romon',fontSize:'23px',float:'left',fontSize:'21px'}}>{l.logDesc}</MDBCardText>
        </MDBCard>
      </MDBCol>
    )
      }
    </MDBRow>
    <div className="text-center" style={{backgroundColor:'#AB47BC',color:'#B2EBF2',fontFamily:'times new romon',fontStyle:'italic', fontSize:'30px'}}>Nos Activités</div>
    <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
    {this.state.activites.map((l) =>
      <MDBCol>
        <MDBCard style={{backgroundColor:'#F3E5F5'}} className='h-100'>
          <MDBCardTitle style={{color:'#6A1B9A',fontStyle:'times new romon',fontSize:'23px',float:'left',fontSize:'30px',fontFamily:'italic'}}><strong>{l.actDesig}</strong></MDBCardTitle>
          <MDBCardText style={{color:'#9C27B0',fontStyle:'times new romon',fontSize:'23px',float:'left',fontSize:'23px'}}>{l.actDesc}</MDBCardText>
        </MDBCard>
      </MDBCol>
    )
  }
    </MDBRow>


    <div className="text-center" style={{backgroundColor:'#EC407A',color:'#B2EBF2',fontFamily:'times new romon',fontStyle:'italic', fontSize:'30px'}}>Nos Produits</div>

<MDBRow className='row-cols-1 row-cols-md-5 g-4'>
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage src={img11} alt='...' position='top' height="200px" width="150px"/>
    </MDBCard>
  </MDBCol>
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage src={img31} alt='...' position='top' height="200px" width="150px"/>
    </MDBCard>
  </MDBCol>
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage src={img21} alt='...' position='top' height="200px" width="150px"/>
    </MDBCard>
  </MDBCol>
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage src={img51} alt='...' position='top' height="200px" width="150px"/>
    </MDBCard>
  </MDBCol>
  <MDBCol>
    <MDBCard className='h-100'>
      <MDBCardImage src={img41} alt='...' position='top' height="200px" width="150px"/>
    </MDBCard>
  </MDBCol>
</MDBRow>
    </MDBCol>
    <MDBCol md='1' className='col-example'></MDBCol>
    </MDBRow>
</div>
    );
  }
}
  
  export default Acceuil;