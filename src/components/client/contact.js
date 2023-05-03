import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Button,Form} from 'react-bootstrap';
import img from '../client/imagess/contact.jpg';

class Contact extends Component {
    state = {

    }

    render() {

        return (
            <div className="Contact">
                <br></br>
                <Row>
                    <Col md="7">
                    <h2 style={{ float: 'left',color:'#AD1457',fontFamily:'Times New Romon' }}>Contacter Nous</h2>
                <br></br>
                <hr></hr>
                <Form style={{ color:'#EC407A',fontSize:'20px' }}>
                    <Row >
                        <Col sm={6} controlId="formGridEmail">
                            <label style={{ float: 'left' }}>Email</label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Form.Group sm={6} as={Col} controlId="formGridPassword">
                            <label style={{ float: 'left' }}>Nom et Prenom</label>
                            <Form.Control type="text" placeholder="Nom et Prenom" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col sm={6} controlId="formGridAddress1">
                            <label style={{ float: 'left' }}>Address</label>
                            <Form.Control placeholder="Route..." />
                        </Col>
                        <Form.Group sm={6} as={Col} controlId="formGridAddress2">
                            <label style={{ float: 'left' }}>Votre Message</label>
                            <Form.Control placeholder="Message" />
                        </Form.Group>
                    </Row>
                    <br></br><br></br><Button style={{ float: 'left' }} variant="primary" type="submit">
                        Submit
  </Button><br></br>
                </Form>
                <p style={{float:'center'}}>Tél/Fax :74237637</p><br></br>
            <p style={{float:'center'}}>E-mail : Polysoft@planet.tn</p><br></br>
            <p style={{float:'center'}}>Adresse :Rte de taniour Km 1.5 - Av. Chedly kallala</p><br></br>
            <p style={{float:'center'}}>N°715- Ceint N°5 Sfax-Tunisie</p><br></br>
            </Col>
            <Col md="3">
            <br></br><br></br>
                <img src={img} width="650px" height="500px" alt="Image "/>
            </Col>
            </Row>
            </div>
        );
    }
}
export default Contact;