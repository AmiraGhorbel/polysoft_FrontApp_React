import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Tab,Nav,Col,Row } from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from '../navSide';


export class ListLogic extends Component {

  constructor(props) {
    super(props);
    this.state = { ca: [] };
  }
  componentDidMount = async () => {
    this.getLogiciels()

  }
  componentDidUpdate() { this.getLogiciels(); }
  getLogiciels = async () => {
    await axios.get("http://localhost:3005/logiciels")
      .then(response =>
        this.setState({
          ca: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteLogiciel = async (_id) => {
    await axios.delete('http://localhost:3005/logiciels/' + _id)
      .then((res) => {
        console.log('logiciel successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }
  

  ListLogiciels = () => {
    return this.state.ca.map((l) =>
      <tr>
        <td>{l.logCode}</td>
        <td>{l.logDesig}</td>
        <td>{l.logDesc}</td>
        <td>{l.logPrix}</td>
        <td>{l.createdAt}</td>
        <td>{l.updatedAt}</td>
        <td>
          <Link className="btn btn-secondary" to={"/editLog/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteLogiciel(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListLogic" style={{backgroundColor:'#E0E0E0'}}><br></br>
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px' }}>Logiciel List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
        
    <Link style={{fontSize:'15px',float:'left'}} className="btn btn-primary" to={"addLog"}> Add Logiciel </Link><br></br><br></br>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
            <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Code</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Designation</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Description</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prix</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Created At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Updated At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.ListLogiciels()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListLogic;