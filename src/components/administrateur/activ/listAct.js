import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Tab} from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from '../navSide';


export class ListActivite extends Component {

  constructor(props) {
    super(props);
    this.state = { ca: [] };
  }
  componentDidMount = async () => {
    this.getActivites()

  }
  componentDidUpdate() { this.getActivites(); }
  getActivites = async () => {
    await axios.get("http://localhost:3005/activites")
      .then(response =>
        this.setState({
          ca: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteActivite = async (_id) => {
    await axios.delete('http://localhost:3005/activites/' + _id)
      .then((res) => {
        console.log('activite successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }
  

  ListActivites = () => {
    return this.state.ca.map((l) =>
      <tr>
        <td>{l.actCode}</td>
        <td>{l.actDesig}</td>
        <td>{l.actDesc}</td>
        <td>{l.createdAt}</td>
        <td>{l.updatedAt}</td>
        <td>
          <Link className="btn btn-secondary" to={"/editAct/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteActivite(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListActivite" style={{backgroundColor:'#E0E0E0'}}><br></br>
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px' }}>Activitè List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
        
    <Link style={{fontSize:'15px',float:'left'}} className="btn btn-primary" to={"/addAct"}> Ajout Activité </Link><br></br><br></br>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
            <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Code</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Designation</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Description</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Created At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Updated At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.ListActivites()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListActivite;