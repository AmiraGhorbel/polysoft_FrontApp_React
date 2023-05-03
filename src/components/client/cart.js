import React from "react";
import {useCart } from "react-use-cart";
import img from "./imagess/remove.png";
import img1 from "./imagess/panier.png";
import { Badge, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBBadge} from 'mdb-react-ui-kit';
import AddFacture from "./addFct";
const Cart=()=>{
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
      if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
return(
    <section className="py-4 container">
   <div className="row justify-content-center">
   <fieldset style={{backgroundColor:'#C5CAE9',float:'left',fontSize:'15px',borderRadius:'3%'}}>
       <div className="col-12">
       <h1 align="center" style={{ color: 'black',float:'left', fontFamily: 'Times New Romon', fontSize: '50px' }}>Votre Panier</h1>
       <a className='mx-3'>
        <MDBBadge color='danger' style={{float:'right',fontSize:'13px'}} notification pill>
        {totalUniqueItems}
        </MDBBadge>
        <img src={img1} md="3" style={{float:'right',height:'40px',width:'40px'}}/>
      </a><br></br><br></br><br></br>
    <hr></hr>
    <h3 align="center" style={{ color: 'black',float:'left', fontFamily: 'Times New Romon',fontWeight:'bold', fontSize: '25px' }}>Total Price : <Badge pill bg="dark">{cartTotal} DT</Badge></h3><br></br><br></br>
    <hr></hr>
      <table className="table table-light table-hover m-0">
        <tbody>
        {items.map((item,index)=>{
          return(
          <tr key={index}>
              <td>
                <img src={item.img} style={{height:'4rem'}}/>
              </td>
              <td>{item.artDesig}</td>
              <td>{item.price}</td>
              <td>Quantity({item.quantity})</td>
              <td>
                  <button className="btn btn-info ms-1" onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button className="btn btn-info ms-1" onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <img src={img} style={{height:'50px',width:'50px'}} onClick={()=>removeItem(item.id)}/>
              </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      <Row>
        <Col md="5"></Col>
      <Col md="5">
        <div className="col-auto">
  
        <button className="btn btn-danger" onClick={()=>emptyCart()}>Clear Cart</button>
      </div>
      </Col>
      </Row>
      </fieldset>
      </div>
      <br></br><br></br>
      <AddFacture/>
      </section>
)
}
export default Cart;