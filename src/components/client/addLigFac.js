import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Redirect} from "react-router-dom";
class addLigFac extends Component {

    constructor(props) {

            super(props);
            this.state = {
                qteStock:0,
                commande:'',
                facture:'',
                livraison:'',
                client:'',
            redirect: null
        }
        }
        componentDidMount = () => {
            const { id } = this.props.match.params;
            this.GetOne(this.state.commande);
            this.GetOne1(id);
            this.GetOne2(this.state.client);
            this.GetOne3(this.state.facture);
        }
        GetOne = async (id) => {
            await axios.get('http://localhost:3005/commandes/' + id)
                .then(response => {
                    this.setState({
                        comDate:response.data.comDate,
                        comQte:response.data.comQte,
                        comDesc:response.data.comDesc,
                        article:response.data.article
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        GetOne1 = async (id) => {
            await axios.get('http://localhost:3005/livraisons/' + id)
                .then(response => {
                    this.setState({
                        livDesig:response.data.livDesig,
                        livDesc: response.data.livDesc,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        GetOne2 = async (id) => {
            await axios.get('http://localhost:3005/clients/' + id)
                .then(response => {
                    this.setState({
                        clMat:response.data.clMat,
                        clNom: response.data.clNom,
                        clPrenom: response.data.clPrenom,
                        clCin: response.data.clCin,
                        clMail: response.data.clMail,
                        clTel: response.data.clTel,
                        clAdresse: response.data.clAdresse,
                        clPass: response.data.clPass,
                        clCodePostal: response.data.clCodePostal
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }


        GetOne3 = async (id) => {
            await axios.get('http://localhost:3005/factures/' + id)
                .then(response => {
                    this.setState({
                        factCod:response.data.factCod,
                        factRemise:response.data.factRemise,
                        factPrixHT:response.data.factPrixHT,
                        factPrixUnit:response.data.factPrixUnit,
                        factTva:response.data.factTva,
                        factPrixTotal:response.data.factPrixTotal
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        AddligFac = () => {
            const { id } = this.props.match.params;
            const ligObject = {
                _id: id,
                qteStock:this.state.qteStock,
                commande:this.state.commande,
                facture: this.state.facture,
                livraison: this.state.livraison,
                client:this.state.client
            };
            axios.post('http://localhost:3005/lignefacts', ligObject)
                .then(res => console.log(res.data));
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
            
            <div className="AddligFac">
                 <form onSubmit={this.Addarticle}>
                <h1 style={{color:'#AD1457',fontFamily:'Times New Romon' }}>Votre Facture</h1>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }} className="col"> Quantité du stock: </label><br></br><input type="text" name="qteStock" value={this.state.qteStock} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }} className="col"> Client: </label><br></br><input type="text" name="client" value={this.state.client.clNom} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Commande: </label><br></br><input type="textarea" name="commande" value={this.state.commande.comDate} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Facture: </label><br></br><input type="text" name="facture" value={this.state.facture.factCod} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Livraison: </label><br></br><input type="text" name="livraison" value={this.state.livraison.livDesig} onChange={this.handleChange} />
                <br></br>
                <br></br>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
            </div>
        );
    }
}
export default addLigFac;