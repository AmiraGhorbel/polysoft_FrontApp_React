import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Tab,Nav,Col,Row } from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from '../administrateur/navSide';


export class ListClient extends Component {

  constructor(props) {
    super(props);
    this.state = { ca: [] };
  }
  componentDidMount = async () => {
    this.getClients()

  }
  componentDidUpdate() { this.getClients(); }
  getClients = async () => {
    await axios.get("http://localhost:3005/clients")
      .then(response =>
        this.setState({
          ca: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteClient = async (_id) => {
    await axios.delete('http://localhost:3005/clients/' + _id)
      .then((res) => {
        console.log('client successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }
  

  ListClients = () => {
    return this.state.ca.map((l) =>
      <tr>
        <td>{l.clMat}</td>
        <td>{l.clNom}</td>
        <td>{l.clPrenom}</td>
        <td>{l.clCin}</td>
        <td>{l.clTel}</td>
        <td>{l.createdAt}</td>
        <td>{l.updatedAt}</td>
        <td>
          <Link className="btn btn-secondary" to={"/editClt/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteClient(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListClt" style={{backgroundColor:'#E0E0E0'}}>
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px' }}>Client List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
    <Link style={{fontSize:'15px',float:'left'}} className="btn btn-primary" to={"/addClt"}> Add Client </Link><br></br><br></br>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
            <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Matricule</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Nom</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prenom</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Cin</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Telephone</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Created At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Updated At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.ListClients()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListClient;