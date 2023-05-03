import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../client/imagess/ee.jpg";
import { Col, Row } from 'react-bootstrap';
import { fontWeight } from '@material-ui/system';



class Apropos extends Component {
    state = {

    }

    render() {

        return (
            <div className="Apropos" style={{backgroundColor:'#F3E5F5'}}>
                <Row>
                    <Col md="7">
                <div style={{ float: 'left'}}>
                <br></br>
                <br></br>
                <h1 style={{float: 'left', color: '#9C27B0',fontStyle:'italic',fontFamily:'times new romon',fontWeight:"bold" }}>Qui sommes nous ?</h1>
                <br></br><br></br>
                <hr></hr>
                <p style={{ float: 'left' }}>
                    <strong>Polysoft informatique</strong> est une sociétés de service et de conseil en informatique créée depuis 1989</p>
                <br></br>
                <p style={{ float: 'left' }}>&emsp;Nos activités principales sont:</p>
                <br></br><br></br><br></br>
                <p style={{ float: 'left' }}>&emsp;&emsp;&emsp;-&emsp;Le développement des logiciels de gestion</p>
                <br></br><br></br>
                <p style={{ float: 'left' }}>&emsp;&emsp;&emsp;-&emsp;La vente de matériel informatique</p>
                <br></br><br></br>
                <p style={{ float: 'left' }}>&emsp;&emsp;&emsp;-&emsp;L'installation des réseaux informatique</p>
                <br></br><br></br>
                <p style={{ float: 'left' }}>&emsp;&emsp;&emsp;-&emsp;Le maintenance du materiel et des système d'exploitation</p><br></br><br></br>
                <h2 style={{float: 'left', color: '#9C27B0',fontStyle:'italic',fontFamily:'times new romon',fontWeight:"bold" }}>PolySoft Informatique</h2>
                <br></br><br></br>
                <hr></hr>
                <p style={{ float: 'left' }}>&emsp;<strong>PolySoft</strong> vous propose une gamme de logiciels se de service totalment adaptés à vos besoins:</p>
                <br></br><br></br>
                <p style={{ float: 'left' }}>&emsp;Prise en main rapide, simplicité d'utilisation, touches de raccourci, tables interactives, sécurité évoluée,etc...</p>
                <br></br>
                <br></br>
                <h2 style={{ float: 'left', color: '#9C27B0',fontStyle:'italic',fontFamily:'times new romon',fontWeight:"bold" }}>Les logiciels</h2>
                <br></br><br></br>
                <hr></hr>
                <p style={{ float: 'left' }}>&emsp;&emsp;Les logiciels de <strong>PolySoft Informatique</strong> vous permettent de gérer votre activité avec toutes simplicité et efficacité.</p>
                <br></br><p style={{ float: 'left' }}>&emsp;&emsp;Notre service après-vente irréprochable est le secret de la fidélisation de nos client,ainsi vous bénéficierez d'une formation</p>
                <br></br><p style={{ float: 'left' }}>&emsp;&emsp;sur place et d'une assistance telephonique gratuite pou bien démarrer avec nos logiciels.</p>
                </div>
                </Col>
                <Col md="3">
                    <br></br><br></br><br></br><br></br>
                <img src={img} width="650px" height="500px" alt="Image "/>
                </Col>
                </Row>
            </div>
        );
    }
}
export default Apropos;