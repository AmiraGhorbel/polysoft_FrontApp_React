import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
class EditArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:0,
            artDesig: 'React',
            price: 0.000,
            artQte: '',
            artDesc:'',
            artMarque:'',
            img:'',
            fournisseur:'',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
        this.GetOne1(this.state.fournisseur);
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3005/articles/' + id)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    artDesig: response.data.artDesig,
                    price : response.data.price,
                    artQte : response.data.artQte,
                    artDesc : response.data.artDesc,
                    artMarque: response.data.artMarque,
                    img: response.data.img,
                    fournisseur: response.data.fournisseur

                });
               
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    GetOne1 = async (id) => {
        await axios.get("http://localhost:3005/fournisseurs/" + id)
            .then(response => {
                this.setState({
                    fourNom: response.data.fourNom,
                    fourDesc: response.data.fourDesc,
                    fourTel: response.data.fourTel,
                    fourEmail: response.data.fourEmail,
                    fourAdresse: response.data.fourAdresse,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Editarticle = () => {
        const { id } = this.props.match.params;
        const articleObject = {
            _id: id,
            id:this.state.id,
            artDesig: this.state.artDesig,
            price: this.state.price,
            artQte: this.state.artQte,
            artDesc: this.state.artDesc,
            artMarque: this.state.artMarque,
            img: this.state.img,
            fournisseur: this.state.fournisseur
        };
        axios.put('http://localhost:3005/articles/' + id, articleObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/articleList" });
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
            <form  onSubmit={this.Editarticle}>
                <h1 style={{color:'#AD1457',fontFamily:'Times New Romon' }}>Modifier Article</h1>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Id: </label><br></br><input type="text" name="id" value={this.state.id} onChange={this.handleChange} />
                <br></br>
                 <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Title: </label><br></br><input type="text" name="artDesig" value={this.state.artDesig} onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Prix </label><br></br><input type="text" name="price" value={this.state.price } onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Quantité: </label><br></br><input type="text" name="artQte" value={this.state.artQte } onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Description: </label><br></br><input type="text" name="artDesc" value={this.state.artDesc } onChange={this.handleChange} />
                <br></br>
                <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}> Marque: </label><br></br><input type="text" name="artMarque" value={this.state.artMarque} onChange={this.handleChange} />
                <br></br>
               
               <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}>Fournisseur:</label><br></br><br></br>
               <select id="fournisseur" name="fournisseur">
                   <option value={this.state.fournisseur.fourNom}>{this.state.fournisseur.fourNom}</option>
               </select>
               <br></br><br></br>
               <label style={{fontSize:'22px',color:'#F50057',fontFamily:'Times New Romon' }}><img src={this.state.img} height={100} width={100} alt=""/></label><br></br><br></br><input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
               <br></br><br></br>
                <input type="submit" className="btn btn-danger" value="Submit" />
            </form>
        );
    }
}
export default EditArticle;