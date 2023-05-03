import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';


class AddClient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clMat : '',
            clNom : '',
            clPrenom: '',
            clCin: '',
            clMail: '',
            clTel:'',
            clAdresse:'',
            clPass:'',
            clCodePostal:'',
            redirect: null
        }
    }

    
    Addclient = () => {
        const { id } = this.props.match.params;
        const clientObject = {
            _id: id,
            clMat:this.state.clMat,
            clNom: this.state.clNom,
            clPrenom: this.state.clPrenom,
            clCin: this.state.clCin,
            clMail: this.state.clMail,
            clTel: this.state.clTel,
            clAdresse: this.state.clAdresse,
            clPass: this.state.clPass,
            clCodePostal: this.state.clCodePostal
        };
        axios.post('http://localhost:3005/clients', clientObject)
            .then(res => console.log(res.data));
            this.setState({ redirect: "/addLiv" });
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
            <form onSubmit={this.Addclient}>
                <h1 style={{color:'#AD1457',float:'left',fontFamily:'Times New Romon' }}>S'il vous Plait remplir cette formulaire</h1><br></br><br></br><br></br>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formNom">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Nom</Form.Label>
      <Form.Control required type="text" name="clNom" placeholder="Entrer Nom" value={this.state.clNom} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formPrenom">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prenom</Form.Label>
      <Form.Control required type="text" name="clPrenom" placeholder="Entrer Prenom" value={this.state.clPrenom} onChange={this.handleChange}/>
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formMat">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Matricule</Form.Label>
      <Form.Control required type="text" name="clMat" placeholder="Entrer Matricule" value={this.state.clMat} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formCin">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Cin</Form.Label>
      <Form.Control required type="text" name="clCin" placeholder="Entrer Cin" value={this.state.clCin} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formPassword">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Password</Form.Label>
      <Form.Control required type="password" name="clPass" placeholder="Entrer Password" value={this.state.clPass} onChange={this.handleChange} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formMail">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Email</Form.Label>
      <Form.Control required type="email" name="clMail" placeholder="Entrer Email" value={this.state.clMail} onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formAdresse">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Adresse</Form.Label>
      <Form.Control required type="text" name="clAdresse" placeholder="Entrer Adresse" value={this.state.clAdresse} onChange={this.handleChange} />
    </Form.Group>
    </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formTel">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Telephone</Form.Label>
      <Form.Control required type="text" name="clTel" placeholder="Entrer Telephone" value={this.state.clTel} onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formCodePostal">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Code Postal</Form.Label>
      <Form.Control required type="text" name="clCodePostal" placeholder="Entrer Code Postal" value={this.state.clCodePostal} onChange={this.handleChange} />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check required type="checkbox" style={{float:'left'}} label="Confirmer Vos Donnés" />
  </Form.Group>
<div>
  
  <br></br><br></br><button className="btn btn-primary m-1" style={{float:'right'}} type="submit" href='/addCde'>
    Commander
  </button>
  <Link to="/addLiv" className="btn btn-success m-1" style={{float:'right'}}>Suivant</Link></div>
  <br></br><br></br>

            </form>
        );
    }
}
export default AddClient;