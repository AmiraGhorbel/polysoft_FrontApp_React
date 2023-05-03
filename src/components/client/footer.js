import React, { Component } from 'react';
  import "bootstrap/dist/css/bootstrap.min.css";
import {MDBContainer,MDBFooter, MDBRow, MDBCol} from 'mdb-react-ui-kit';
class Footer extends Component {

    constructor(props) {

        super(props);
    }


    render() {
        return (
            <div className="Footer">
                 <MDBFooter style={{backgroundColor: '#455A64'}} className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{float:'left'}}>A PROPOS DE POLYSOFT</h5><br></br><br></br>
            <p style={{float:'left'}}>Tél/Fax :74237637 - 74442637</p><br></br><br></br>
            <p style={{float:'left'}}>Tél :74 443 620</p><br></br><br></br>
            <p style={{float:'left'}}>E-mail : Polysoft@planet.tn</p><br></br><br></br>
            <p style={{float:'left'}}>Skype :polysoft.informatique1</p><br></br><br></br>
            <p style={{float:'left'}}>Adresse :Rte de taniour Km 1.5 - Av. Chedly kallala</p><br></br><br></br>
            <p style={{float:'left'}}>N°715- Ceint N°5 Sfax-Tunisie</p><br></br>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 style={{float:'left'}} className='text-uppercase'>Services Client</h5>

            <ul className='list-unstyled mb-0'>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='/boutique2' className='text-white'>
                  Vente des materiels Informatique
                </a>
              </li>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='/logiciels' className='text-white'>
                  Nos Logiciels
                </a>
              </li>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='/activites' className='text-white'>
                 Nos Activités
                </a>
              </li>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='' className='text-white'>
                 Assistance Télephonique
                </a>
              </li>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='' className='text-white'>
                 Livraison
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 style={{float:'left'}} className='text-uppercase mb-0'>Retrouver-nous sur</h5>

            <ul className='list-unstyled'>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='#!' className='text-white'>
                  Facebook
                </a>
              </li>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='#!' className='text-white'>
                  Instagram
                </a>
              </li>
              <li><br></br><br></br>
                <a  style={{float:'left'}} href='#!' className='text-white'>
                Linkedin
                </a>
              </li>
              <li><br></br><br></br>
                <a style={{float:'left'}} href='#!' className='text-white'>
                  Twitter
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          Polysoft.com
        </a>
      </div>
    </MDBFooter>
    </div>
    );
}
}
export default Footer;