import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Tab,Nav,Col,Row } from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from '../navSide';


export class ListFacture extends Component {

  constructor(props) {
    super(props);
    this.state = { ca: [] };
  }
  componentDidMount = async () => {
    this.getFactures()

  }
  componentDidUpdate() { this.getFactures(); }
  getFactures = async () => {
    await axios.get("http://localhost:3005/factures")
      .then(response =>
        this.setState({
          ca: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteFacture = async (_id) => {
    await axios.delete('http://localhost:3005/factures/' + _id)
      .then((res) => {
        console.log('facture successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }
  

  ListFactures = () => {
    return this.state.ca.map((l) =>
      <tr>
        <td>{l.factCod}</td>
        <td>{l.factRemise}</td>
        <td>{l.factPrixHT}</td>
        <td>{l.factPrixUnit}</td>
        <td>{l.factTva}</td>
        <td>{l.factPrixTotal}</td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteFacture(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListFacture" style={{backgroundColor:'#E0E0E0'}}>
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px' }}>Facture List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
            <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Code</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Remise</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prix HT</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prix Unit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>TVA</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prix Total</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.ListFactures()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListFacture;