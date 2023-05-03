import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table,Tab} from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import SideNav from '../navSide';
import "bootstrap/dist/css/bootstrap.min.css";


export class ListFour extends Component {

  constructor(props) {
    super(props);
    this.state = { four: [] };
  }
  componentDidMount = async () => {
    this.getFours()

  }
  componentDidUpdate() { this.getFours(); }
  getFours = async () => {
    await axios.get("http://localhost:3005/fournisseurs")
      .then(response =>
        this.setState({
          four: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteFour = async (_id) => {
    await axios.delete('http://localhost:3005/fournisseurs/' + _id)
      .then((res) => {
        console.log('fournisseur successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }

  Listfours = () => {
    return this.state.four.map((l) =>
      <tr>
        <td>{l.fourNom}</td>
        <td>{l.fourDesc}</td>
        <td>{l.fourTel}</td>
        <td>{l.createdAt}</td>
        <td>{l.updatedAt}</td>        
        <td>
          <Link className="btn btn-secondary" to={"/editFour/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteFour(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListLig" style={{backgroundColor:'#E0E0E0'}}><br></br>
        
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px' }}>Fournisseur List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
        
    <Link style={{fontSize:'15px',float:'left'}} className="btn btn-primary" to={"/addFour"}> Ajouter Fournisseur </Link><br></br><br></br>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Nom</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Description</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Telephone</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Created at</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Updated At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.Listfours()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListFour;