import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol,MDBRow,MDBContainer,MDBCard,MDBCardImage,MDBCardOverlay } from 'mdb-react-ui-kit';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import img from '../image/login2.jpg';
import { Link } from "react-router-dom";
import ErrorMessage from './ErrorMessage';
import { Redirect } from 'react-router';

const Login=()=>{
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [erreur, setErreur]= useState(false);
  const [redirect, setRedirect]= useState(false);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
          const config={
            Headers:{
            "content-type":"application/json",
          },
        };
        const {data}=await axios.post('http://localhost:3005/api/auth/login',{
          email,
          password,
        },config);
        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify(data));
      }catch(erreur){
          console.log(erreur.message)
        }
        if(erreur){
          setErreur("Bienvenu sur notre site");
        }else{
          setErreur("Verifiez votre Email et Password");
        }
        setRedirect(true);
      };
      if(redirect){
        return<Redirect to="/panier"/>
      }
        return (
            <div className="login" > 
            {erreur && <ErrorMessage  variant="danger">{erreur}</ErrorMessage>}
            <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src={img} height="700px" alt='...' />
      <MDBCardOverlay>
      <MDBContainer>
        <br></br><br></br><br></br>
      <Button type="submit" variant="outline-dark" href="/acceuil" style={{float:'right',fontSize:'20px',width:'12%'}}>Deconnection</Button>
                <MDBRow><br></br><br></br><br></br></MDBRow>
  <MDBRow className='md-5'>
    <MDBCol md="4"></MDBCol>
    <MDBCol md="7" lg="3" >
      <br></br>
      <br></br>
      <br></br>
    <h1  style={{color:'#1A237E',fontWeight:'bold',fontSize:'30px',fontFamily:'Times New Roman',fontStyle:'italic'}}>Connectez-Vous</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label style={{color:'#B71C1C',float:'left',fontFamily:'times new romon',fontSize:'21px'}}>Email</label>
        <input type="email" required className="form-control" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="form-group">
        <label style={{color:'#B71C1C',float:'left',fontFamily:'times new romon',fontSize:'21px'}}>Mot de passe</label>
        <input type="password" required className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mot de passe" />
        </div><br></br>
          <Button type="submit" variant="outline-danger" style={{fontSize:'15px',width:'40%'}}>Verifier</Button>&emsp;&emsp;
          <Button type="submit" variant="danger" href="/panier" style={{fontSize:'15px',width:'40%'}}>Connection</Button>
          <br></br>
          <MDBCol md="11" className="d-flex justify-content-end">
                  <p className="font-small grey-text mt-3" style={{color:'#303F9F'}}>
                  Vous n’avez pas de compte&emsp;  
                    <Link to='/signup' className="dark-grey-text ml-1 font-weight-bold">
                      S'inscrire
                    </Link>
                  </p>
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
export default Login;