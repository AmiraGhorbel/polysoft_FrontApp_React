import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Row,Col,Form } from 'react-bootstrap';
class EditAct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actCode: '',
            actDesig: '',
            actDesc: '',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3005/activites/' + id)
            .then(response => {
                this.setState({
                    actCode: response.data.actCode,
                    actDesig : response.data.actDesig,
                    actDesc : response.data.actDesc
                });
               
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Editactivite = () => {
        const { id } = this.props.match.params;
        const actObject = {
            _id: id,
            actCode: this.state.actCode,
            actDesig: this.state.actDesig,
            actDesc: this.state.actDesc
        };
        axios.put('http://localhost:3005/activites/' + id, actObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/listAct" });
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
            <form  onSubmit={this.Editactivite}>
                    <h1 style={{color:'#AD1457',float:'center',fontFamily:'Times New Romon' }}>Modifier Activite</h1><br></br>
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
    Modifier
  </button>
            </form>
        );
    }
}
export default EditAct;