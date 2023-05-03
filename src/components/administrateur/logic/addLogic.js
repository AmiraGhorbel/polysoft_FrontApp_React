import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


class AddLogic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            logCode:'12',
            logDesig:'',
            logDesc:'',
            logPrix:''
        }
    }
    

    ajoutlogi = () => {
        const logicObject = {
            logCode : this.state.logCode,
            logDesig : this.state.logDesig,
            logDesc : this.state.logDesc,
            logPrix : this.state.logPrix

        };

        axios.post('http://localhost:3005/logiciels',logicObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/logicielList" });
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
            
            <div className="AddLogic">
            <form onSubmit={this.ajoutlogi}>
   <h1 style={{color:'#AD1457',float:'center',fontFamily:'Times New Romon' }}>Ajouter Logiciel</h1><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Code</Form.Label>
      <Form.Control type="text" name="logCode" value={this.state.logCode} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Designation</Form.Label>
      <Form.Control type="text" name="logDesig" value={this.state.logDesig} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
    <br></br><br></br><br></br><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col} controlId="formDesc">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Description</Form.Label>
      <Form.Control type="text" name="logDesc" value={this.state.logDesc} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prix</Form.Label>
      <Form.Control type="text" name="logPrix" value={this.state.logPrix} onChange={this.handleChange}/>
    </Form.Group>
    </Row><br></br><br></br><br></br>
  <br></br><br></br><button className="btn btn-primary m-1" style={{float:'left'}} type="submit">
    Ajouter
  </button>
    </form>
    </div>
        );
    }
}
export default AddLogic;