import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { MDBJumbotron, MDBContainer } from "mdbreact";
import { Col, Row } from 'react-bootstrap';


class Logiciels extends Component {

    constructor(props) {

        super(props);
        this.state = {logiciels:[]};
    }
    componentDidMount = async () => {
      this.getLogiciels();

  }
  componentDidUpdate() {this.getLogiciels(); }
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
    render() {
        return (
            <div className="Logiciels" style={{backgroundColor:'#E8EAF6'}} >
          <Row>
    <Col md="1"></Col>
    <Col md="12" style={{float:'left',backgroundColor:'#C5CAE9'}}>
        <MDBJumbotron fluid>
      <MDBContainer>
          <br></br>
        <h2 className="display-4" style={{float:'left',fontFamily:'times new romon',color:'darkslateblue',fontWeight:'bold',fontStyle:'italic',backgroundColor:'#C5CAE9'}}>Nos Logiciels</h2><br></br>
        <br></br>
        <br></br><br></br><p style={{float:'left',backgroundColor:'#C5CAE9',color:'#78909C'}} className="lead">Ci-dessous, les logiciels actuellement disponible;</p><br></br><br></br>
      </MDBContainer>
    </MDBJumbotron>              
    </Col>
    <Col lg="1"><br></br></Col>
  </Row>
                    {this.state.logiciels.map((l) =>
                    <div>
                      <h3 style={{color:'#6A1B9A',fontStyle:'times new romon',float:'left',fontSize:'30px',fontFamily:'italic'}}>{l.logDesig}</h3> <br></br><br></br>
                      <p style={{color:'black',fontStyle:'Arial',float:'left',fontSize:'21px'}}>&emsp;&emsp;{l.logDesc}</p><br></br><br></br><br></br>
                      </div>
                    )
                    }              
            </div>
        );
    }
}
export default Logiciels;