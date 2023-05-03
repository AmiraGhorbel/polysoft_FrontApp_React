import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Row,Col,Form } from 'react-bootstrap';
class EditFournisseur extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fourId : '',
            fourNom : '',
            fourDesc : '',
            fourTel : '',
            fourEmail : '',
            fourAdresse : '',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3005/fournisseurs/' + id)
            .then(response => {
                this.setState({
                    fourNom : response.data.fourNom,
                    fourDesc : response.data.fourDesc,
                    fourTel : response.data.fourTel,
                    fourEmail : response.data.fourEmail,
                    fourAdresse : response.data.fourAdresse
                });
               
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Editfournisseur = () => {
        const { id } = this.props.match.params;
        const fourObject = {
            _id: id,
            fourNom : this.state.fourNom,
            fourDesc : this.state.fourDesc,
            fourTel : this.state.fourTel,
            fourEmail : this.state.fourEmail,
            fourAdresse : this.state.fourAdresse
        };
        axios.put('http://localhost:3005/fournisseurs/' + id, fourObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/listFour" });
    }
    handleChange = (s) => {
        let nam = s.target.name;
        let val = s.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <form  onSubmit={this.Editfournisseur}>
                    <h1 style={{color:'#AD1457',float:'center',fontFamily:'Times New Romon' }}>Modifier Fournisseur</h1><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Nom</Form.Label>
      <Form.Control type="text" name="fourNom" value={this.state.fourNom} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formDesig">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Description</Form.Label>
      <Form.Control type="text" name="fourDesc" value={this.state.fourDesc} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Telephone</Form.Label>
      <Form.Control type="text" name="fourTel" value={this.state.fourTel} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
            <br></br><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesig">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Email</Form.Label>
      <Form.Control type="text" name="fourEmail" value={this.state.fourEmail} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Adresse</Form.Label>
      <Form.Control type="text" name="fourAdresse" value={this.state.fourAdresse} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
 <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <br></br><br></br><button className="btn btn-primary m-1" style={{float:'left'}} type="submit">
    Modifier
  </button>
            </form>
        );
    }
}
export default EditFournisseur;