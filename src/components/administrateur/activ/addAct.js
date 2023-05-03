import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";


class AddAct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            actCode:'1',
            actDesig:'',
            actDesc:''
        }
    }
    

    ajoutact = () => {
        const actObject = {
            actCode : this.state.actCode,
            actDesig : this.state.actDesig,
            actDesc : this.state.actDesc

        };

        axios.post('http://localhost:3005/activites',actObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/listAct" });
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
        <div className="AddAct">
            <form onSubmit={this.ajoutact}>
                <h1 style={{color:'#AD1457',float:'center',fontFamily:'Times New Romon' }}>Ajouter Activite</h1><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Code</Form.Label>
      <Form.Control type="text" name="actCode" value={this.state.actCode} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Designation</Form.Label>
      <Form.Control type="text" name="actDesig" value={this.state.actDesig} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
    <br></br><br></br><br></br><br></br>
    <Row className="mb-3" style={{float:'left'}}>
    <Form.Group as={Col}>
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Description</Form.Label>
      <Form.Control type="text" name="actDesc" value={this.state.actDesc} onChange={this.handleChange}/>
    </Form.Group>
    </Row>
    <br></br><br></br><br></br>
  <br></br><br></br><button className="btn btn-primary m-1" style={{float:'left'}} type="submit">
    Ajouter
  </button>
            </form>
        </div>
        );
    }
}
export default AddAct;