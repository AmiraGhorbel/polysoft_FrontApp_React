import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Tab} from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from '../navSide';


export class ListLig extends Component {

  constructor(props) {
    super(props);
    this.state = { lig: [] };
  }
  componentDidMount = async () => {
    this.getLigFacs()

  }
  componentDidUpdate() { this.getLigFacs(); }
  getLigFacs = async () => {
    await axios.get("http://localhost:3005/lignefacts")
      .then(response =>
        this.setState({
          lig: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteLigFac = async (_id) => {
    await axios.delete('http://localhost:3005/lignefacts/' + _id)
      .then((res) => {
        console.log('Ligne facture successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }

  ListligFacs = () => {
    return this.state.lig.map((l) =>
      <tr>
        <td>{l.qteStock}</td>
        <td>{l.commande.comDate}</td>
        <td>{l.facture.factCod}</td>
        <td>{l.livraison.livDesig}</td>
        <td>{l.client.clNom}</td>
        <td>{l.createdAt}</td>
        <td>{l.updatedAt}</td>        
        <td>
          <Link className="btn btn-secondary" to={"/editLig/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteLigFac(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListLig" style={{backgroundColor:'#E0E0E0'}}><br></br>
        
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px' }}>Ligne Facture List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
        
    <Link style={{fontSize:'15px',float:'left'}} className="btn btn-primary" to={"/addLig"}> Add Ligne Facture </Link><br></br><br></br>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Quantité du Stock</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>commande</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>facture</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>livraison</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Client</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Created at</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Updated At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.ListligFacs()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListLig;