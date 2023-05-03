import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol,MDBRow,MDBContainer,MDBCard,MDBCardImage,MDBCardOverlay } from 'mdb-react-ui-kit';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import img from '../image/login2.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
class Connection extends React.Component {
    state = {

    }

    render() {

        return (
            <div className="Connection" > 
            <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src={img} height="700px" alt='...' />
      <MDBCardOverlay>
      <MDBContainer>
      <br></br><br></br><br></br>
                <MDBRow><br></br><br></br><br></br></MDBRow>
  <MDBRow className='md-5'>
    <MDBCol md="4"></MDBCol>
    <MDBCol md="7" lg="3" >
      <br></br>
      <br></br>
      <br></br>
    <h1  style={{color:'#1A237E',fontWeight:'bold',fontSize:'30px',fontFamily:'Times New Roman',fontStyle:'italic'}}>Connectez-Vous</h1>
      <form onSubmit={(e)=>connection(e)}>
        <div className="form-group">
        <label style={{color:'#B71C1C',float:'left',fontFamily:'times new romon',fontSize:'21px'}}>Administrateur</label>
        <input type="text" required className="form-control" id="log"  placeholder="Nom administrateur" />
        </div>
        <div className="form-group">
        <label style={{color:'#B71C1C',float:'left',fontFamily:'times new romon',fontSize:'21px'}}>Mot de passe</label>
        <input type="password" required className="form-control" id="pass"  placeholder="Mot de passe" />
        </div><br></br>
          <Button type="submit" variant="outline-danger" style={{fontSize:'15px',width:'40%'}}>Verifier</Button>&emsp;&emsp;
          <Button type="submit" variant="danger" href="/articleList" style={{fontSize:'15px',width:'40%'}}>Connection</Button>
          <br></br>
          <MDBCol md="11" className="d-flex justify-content-end">
                </MDBCol>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</MDBCardOverlay>
</MDBCard>

 </div>
        );
};
}
function connection(e){
    e.preventDefault();
    let request={
        login: document.getElementById('log').value,
        password: document.getElementById('pass').value
    }
    axios.post('http://localhost:3005/logins', request)
    .then( resp =>{ alert(resp.data.message);
})
.catch(err =>{
    console.log(err);
})
}
export default Connection;