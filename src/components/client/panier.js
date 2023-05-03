import React, { useEffect, useState } from 'react';
import { CartProvider} from "react-use-cart";
import Cart from './cart';
import Boutique2 from './boutique2';
import { Row,Col } from 'react-bootstrap';
import { MDBJumbotron, MDBContainer } from "mdbreact";
function Panier(){
  
    return(
    <CartProvider>
       <Row>
    <Col  md="10" style={{float:'left',backgroundColor:'#EEEEEE'}}>
        <MDBJumbotron fluid>
      <MDBContainer>
          <br></br>
        <h2 className="display-4" style={{float:'left',fontFamily:'times new romon',color:'darkslateblue',fontWeight:'bold',fontStyle:'italic',backgroundColor:'#EEEEEE'}}>Bienvenue</h2><br></br>
        <br></br>
        <br></br><br></br><p style={{float:'left',backgroundColor:'#EEEEEE',color:'#9E9E9E'}} className="lead">Ci-dessous, les produits actuellement disponible;</p><br></br><br></br>
      </MDBContainer>
    </MDBJumbotron>              
    </Col>
    <Col md="1"></Col>
  </Row>
      <Row>
        <Col md="8"><Boutique2 /></Col>
        <Col md="4"><Cart /></Col>
      </Row>      
    </CartProvider>
    );
};
export default Panier;