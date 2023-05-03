import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button,Badge} from 'react-bootstrap';
import axios from 'axios';
import { Redirect} from "react-router-dom";
import { MDBCard,MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
class Detail extends Component {

    constructor(props) {

            super(props);
            this.state = {
                ar: [],
                artDesig: 'React',
                price: 0.000,
                artQte: '',
                artDesc: '',
                artMarque: '',
                fournisseur:'',
            redirect: null
        }
}
        componentDidMount = () => {
            const { id } = this.props.match.params;
            this.GetOne(id);
            this.GetOne1(this.state.fournisseur);
            this.getArticles();
        }
        componentDidUpdate() { this.getArticles(); }
        getArticles = async () => {
            await axios.get("http://localhost:3005/articles")
              .then(response =>
                this.setState({
                  ar: response.data
                }))
              .catch(function (error) {
                console.log(error);
              })
          }
        GetOne = async (id) => {
            await axios.get('http://localhost:3005/articles/' + id)
                .then(response => {
                    this.setState({
                        artDesig: response.data.artDesig,
                        price : response.data.price,
                        artQte : response.data.artQte,
                        artDesc : response.data.artDesc,
                        artMarque: response.data.artMarque,
                        fournisseur: response.data.fournisseur,
                        img: response.data.img
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        GetOne1 = async (id) => {
            await axios.get('http://localhost:3005/fournisseurs/' + id)
                .then(response => {
                    this.setState({
                        fourNom: response.data.fourNom,
                        fourDesc: response.data.fourDesc,
                        fourTel: response.data.fourTel,
                        fourEmail: response.data.fourEmail,
                        fourAdresse: response.data.fourAdresse,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }




    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            
            <div className="Detail" style={{ width: '100%', padding: '3rem 4rem' }}>
                <label style={{ display: 'flex', justifyContent: 'center',fontWeight:'bold',color:'#D500F9',fontSize:'60px',fontStyle:'italic',fontFamily:'Times new Romon' }}>{this.state.artDesig}</label><br></br><br></br>
                <Row className="justify-content-md-center">
                    <Col lg="4"></Col>
                    <Col md="8">
                        <MDBCard style={{ maxWidth: '600px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='5'>
                                    <MDBCardImage src={this.state.img} height={280} width={220} alt={this.state.artDesig}/>
                                        </MDBCol>
                                        <MDBCol md='7'>
                                            <MDBCardBody style={{backgroundColor:'#F3E5F5'}}>
                                                 <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Description:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.artDesc}</h4></MDBCardText><br></br>
                                                <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Quantité du Stock:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.artQte} Pièce</h4></MDBCardText><br></br>
                                                 <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Prix:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}><Badge pill bg="secondary">{this.state.price}DT</Badge></h4></MDBCardText><br></br>
                                            <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Marque:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.artMarque}</h4></MDBCardText><br></br>
                                        <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Fournisseur:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.fournisseur.fourNom}</h4></MDBCardText><br></br>
                                        <hr></hr>
                                        <div className="d-grid gap-2">
  <Button variant="outline-secondary" size="lg"  href="/panier">
    Retour au Boutique
  </Button>
  </div>
</MDBCardBody>
                                        
</MDBCol>
</MDBRow>
</MDBCard>
</Col>
<Col lg="1"></Col>
</Row>
<br></br>
<div className="text-center" style={{backgroundColor:'#EC407A',color:'#B2EBF2',fontFamily:'times new romon',fontStyle:'italic', fontSize:'20px'}}>Voir plus de produit</div>
<MDBRow>
    {this.state.ar.map((l) =>
      <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage src={l.img} alt={l.desigArt} position='top' height="200px" width="150px"/>
        </MDBCard>
      </MDBCol>
    )
      }
      </MDBRow>
</div>
        );
    }
}
export default Detail;