import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';


class AddCommande extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comQte  : 0,
            comDate : '',
            comDesc : '',
            article: '',
            redirect: null
        }
    }

    
    Addcommande = () => {
        const { id } = this.props.match.params;
        const comObject = {
            _id: id,
            comDate:this.state.comDate,
            comQte:this.state.comQte,
            comDesc: this.state.comDesc,
            article: this.state.article
        };
        axios.post('http://localhost:3005/commandes', comObject)
            .then(res => console.log(res.data));
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <div className="AddCommande">
            <fieldset style={{backgroundColor:'#C5CAE9',float:'left',fontSize:'15px',borderRadius:'3%',width:'530px'}}>
            <div className="col-12">
            <form onSubmit={this.Addcommande}>
                <h1 style={{color:'#AD1457',float:'left',fontFamily:'Times New Romon' }}>Verifier votre Commande</h1><br></br><br></br><br></br>
                <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDate">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Date</Form.Label>
      <Form.Control required type="text" name="comDate" placeholder="date du article" value={this.state.comDate} onChange={this.handleChange}/>
    </Form.Group>
  </Row>
  <br></br><br></br><br></br><br></br><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formQte">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Quantité</Form.Label>
      <Form.Control type="number" name="comQte" placeholder="Quantite du article" value={this.state.comQte} onChange={this.handleChange}/>
    </Form.Group>
  </Row>
  <br></br><br></br><br></br><br></br>
  <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Description</Form.Label>
      <Form.Control type="text" name="comDesc" placeholder="Votre Comantaire" value={this.state.comDesc} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
    <br></br><br></br><br></br><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Articles</Form.Label>
      <Form.Control type="text" name="article" placeholder="Vos Articles" value={this.state.article} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
 <br></br><br></br>
  <br></br><br></br><input type="submit" className="btn btn-primary" value="Submit" />
            </form>
            </div>
            </fieldset>
            </div>
        );
    }
}
export default AddCommande;