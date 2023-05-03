import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';


class AddLivraison extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            livDesig  : '',
            livDesc  : '',
            redirect: null
        }
    }

    
    Addlivraison = () => {
        const { id } = this.props.match.params;
        const livObject = {
            _id: id,
            livDesig:this.state.livDesig,
            livDesc: this.state.livDesc,
        };
        axios.post('http://localhost:3005/livraisons', livObject)
            .then(res => console.log(res.data));
            this.setState({ redirect: "/acceuil" });
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
            
            <form onSubmit={this.Addlivraison}>
                <h1 style={{color:'#AD1457',float:'left',fontFamily:'Times New Romon' }}>Choisir mode de Livraison</h1><br></br><br></br><br></br>
 
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesig">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Choix de livraison</Form.Label>
      <Form.Control type="text" name="livDesig" placeholder="Par Poste ou A Domicile" value={this.state.livDesig} onChange={this.handleChange}/>
    </Form.Group>
  </Row>
  <br></br><br></br><br></br><br></br>
  <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Description</Form.Label>
      <Form.Control type="text" name="livDesc" placeholder="Entrer Nom" value={this.state.livDesc} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
    
 <br></br><br></br><br></br><br></br>
 <label style={{color:'red',fontSize:'20px',float:'left'}}>Frais de livraison: 4 TND</label>
  <br></br><br></br><button className="btn btn-primary m-1" style={{float:'left'}} type="submit">
    Confirmer
  </button>
  <br></br><br></br>
            </form>
        );
    }
}
export default AddLivraison;