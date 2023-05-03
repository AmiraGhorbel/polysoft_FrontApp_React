import React, {useEffect,useState} from "react";
import axios from "axios";
import {Button,Row,Col,Container,Badge} from "react-bootstrap";
import { MDBRow,MDBCol,MDBCard, MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit';
import { useCart } from "react-use-cart";
function Boutique(){
    const [articles,setArticles]=useState([])
    const{ addItem }=useCart();
    useEffect(()=>{
        axios.get("http://localhost:3005/articles")
        .then(res=>{
            console.log(res)
            setArticles(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
return(
    <div className="Boutique" >
                <Container>
                    <br></br>
               
  <Row className="justify-content-md-center">
    <Col md="auto">
        <MDBRow className='row-cols-1 row-cols-md-3 g-3'>
        {
                articles.map(item=>(
                    <MDBCol >
                    <MDBCard>
                            
                            <MDBCardBody>
                    <div class="card-body" key={item.id} item={item}>
                        <img  style={{ width: '16rem', height: '13rem' }} src={item.img} alt={item.artDesig}/>
                        <MDBCardTitle style={{Color:'#1A237E',fontStyle:'times new romon',fontSize:'23px',float:'left'}}>{item.artDesig}</MDBCardTitle><br></br><br></br><br></br>
                        <h4 style={{color:'#1A237E',fontStyle:'Times new romon',fontSize:'23px',float:'left'}}>Prix: <Badge pill bg="dark">{item.price}.00 DT</Badge></h4><br></br><br></br>
                        <hr></hr>
                        <Button variant="dark" href={"/detail/"+item._id}
                        >Plus de Detail</Button>
                        <Button variant="outline-dark" href="/login" onClick={() => addItem(item)}>Ajouter au Panier</Button>
                    </div>
                    </MDBCardBody>
                          </MDBCard>
                          </MDBCol>
                ))
            }
            
            </MDBRow>
    </Col>
  </Row>
  </Container>                
            </div>
)
}
export default Boutique;