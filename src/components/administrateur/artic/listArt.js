import React, { Component } from 'react';
import axios from 'axios';
import SideNav from '../navSide';
import { Link } from 'react-router-dom';
import { Table,Tab,Nav,Col,Row } from 'react-bootstrap';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";


export class ListArt extends Component {

  constructor(props) {
    super(props);
    this.state = { ar: [] };
  }
  componentDidMount = async () => {
    this.getArticles()

  }
  componentDidUpdate() { this.getArticles(); }
  getArticles = async () => {
    await axios.get("http://localhost:3005/articles")
      .then(response =>
        this.setState({
          ar: response.data
        }))
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteArticle = async (_id) => {
    await axios.delete('http://localhost:3005/articles/' + _id)
      .then((res) => {
        console.log('Article successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }

  Listarticles = () => {
    return this.state.ar.map((l) =>
      <tr>
        <td>{l.id}</td>
        <td>{l.artDesig}</td>
        <td>{l.price}00Dt</td>
        <td>{l.artQte}</td>
        <td>{l.artDesc}</td>
        <td>{l.artMarque}</td>
        <td>{l.createdAt}</td>
        <td>{l.updatedAt}</td>
        <td><img src={l.img} alt={l.desigArt} higth={100} width={100} /></td>
        
        <td>
          <Link className="btn btn-secondary" to={"/editArt/" + l._id}> Edit </Link>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.deleteArticle(l._id) }}>Delete</button>
        </td>
      </tr>

    );

  }


  render() {
    return (
      <div className="ListArt" style={{backgroundColor:'#E0E0E0'}}><br></br>
    <h1 align="center" style={{ color: '#AD1457',fontWeight:'bold',fontStyle:'italic', fontFamily: 'Times New Romon', fontSize: '40px'}}>Article List</h1>
        <MDBRow>
    <MDBCol md='2' className='col-example'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <SideNav/>
    </Tab.Container>
    </MDBCol>
    <MDBCol md='10'>
        
    <Link style={{fontSize:'15px',float:'left'}} className="btn btn-primary" to={"/addArt"}> Add Article </Link><br></br><br></br>
        <Table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr style={{backgroundColor:'#212121'}}>
            <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Id</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Designation</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Prix</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Quantité</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Description</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Marque</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Created at</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Updated At</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Image</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Edit</th>
              <th style={{ color: '#BDBDBD', fontSize: '20px', fontFamily: 'Times New Romon' }}>Supprimer</th><br></br>
            </tr>
          </thead>
          <tbody>
            {this.Listarticles()}
          </tbody>
        </Table>
        </MDBCol></MDBRow>
      </div>
    );


  }



}
export default ListArt;