import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Row,Col,Form } from 'react-bootstrap';
class EditLogiciel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logCode: '5',
            logDesig: '',
            logDesc: '',
            logPrix:0.000,
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3005/logiciels/' + id)
            .then(response => {
                this.setState({
                    logCode: response.data.logCode,
                    logDesig : response.data.logDesig,
                    logDesc : response.data.logDesc,
                    logPrix : response.data.logPrix

                });
               
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Editlogiciel = () => {
        const { id } = this.props.match.params;
        const logicielObject = {
            _id: id,
            logCode: this.state.logCode,
            logDesig: this.state.logDesig,
            logDesc: this.state.logDesc,
            logPrix: this.state.logPrix
        };
        axios.put('http://localhost:3005/logiciels/' + id, logicielObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/logicielList" });
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
            <form  onSubmit={this.Editlogiciel}>
               <h1 style={{color:'#AD1457',float:'center',fontFamily:'Times New Romon' }}>Modifier Logiciel</h1><br></br>
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
    Modifier
  </button>
            </form>
        );
    }
}
export default EditLogiciel;