import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
class EditClient extends React.Component {
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
                <h1 style={{color:'#AD1457',fontFamily:'Times New Romon' }}>Modifier Logiciels</h1>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Code: </label><br></br><input type="text" name="logCode" value={this.state.logCode} onChange={this.handleChange} />
                <br></br>
                 <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Title: </label><br></br><input type="text" name="logDesig" value={this.state.logDesig} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Prix </label><br></br><input type="text" name="logPrix" value={this.state.logPrix} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Description: </label><br></br><input type="text" name="logDesc" value={this.state.logDesc} onChange={this.handleChange} />
                <br></br>
               <br></br><br></br>
                <input type="submit" className="btn btn-danger" value="Submit" />
            </form>
        );
    }
}
export default EditClient;