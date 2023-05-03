import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


class AddArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:0,
            artDesig: '',
            price: 0.000,
            artQte: '',
            artDesc:'',
            artMarque:'',
            img:'',
            fournisseur:'',
            redirect: null
        }
    }

    
    Addarticle = () => {
        const { id } = this.props.match.params;
        const articleObject = {
            _id: id,
            id:this.state.id,
            artDesig: this.state.artDesig,
            price: this.state.price,
            artQte: this.state.artQte,
            artDesc: this.state.artDesc,
            artMarque: this.state.artMarque,
            img: this.state.img,
            fournisseur: this.state.fournisseur
        };
        axios.post('http://localhost:3005/articles', articleObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/articleList" });
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <form onSubmit={this.Addarticle}>   
             <h1 style={{color:'#AD1457',float:'center',fontFamily:'Times New Romon' }}>Ajouter Article</h1><br></br>  
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Id</Form.Label>
      <Form.Control type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Title</Form.Label>
      <Form.Control type="text" name="artDesig" value={this.state.artDesig} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Description</Form.Label>
      <Form.Control type="text" name="artDesc" value={this.state.artDesc} onChange={this.handleChange} />
    </Form.Group>
  </Row>
                <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Quantité</Form.Label>
      <Form.Control type="text" name="artQte" value={this.state.artQte} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prix</Form.Label>
      <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleChange}/>
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Marque</Form.Label>
      <Form.Control type="text" name="artMarque" value={this.state.artMarque} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Image</Form.Label>
      <Form.Control type="text" name="img" value={this.state.img} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Fournisseur</Form.Label>
      <Form.Control type="text" name="fournisseur" value={this.state.fournisseur} onChange={this.handleChange} />
    </Form.Group>
  </Row>
  <br></br><br></br><br></br><button className="btn btn-primary m-1" style={{float:'left'}} type="submit">
    Ajouter
  </button><br></br><br></br>
            </form>
        );
    }
}
export default AddArticle;