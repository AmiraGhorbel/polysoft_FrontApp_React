import React, { Component } from 'react';
import img from './imagess/poly.jpg';
import {MDBNavbar, MDBContainer, MDBIcon,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,
  MDBNavbarToggler,MDBDropdownLink,MDBNavbarBrand,MDBCollapse,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdb-react-ui-kit';
  import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class Nav extends Component {

    constructor(props) {

        super(props);
    }


    render() {
        return (
            <div className="Nav">
<MDBNavbar expand='md' style={{backgroundColor:'#0097A7'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src={img} height="60px" width="80px" /></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor03'
          aria-controls='navbarColor03'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar id='navbarColor0'>
          <MDBNavbarNav className='me-auto mb-1 mb-lg-0'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='/acceuil' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>
              &emsp;&emsp;&emsp;Acceuil
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBDropdown>
            <MDBNavbarLink aria-current='page' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>
        <MDBDropdownToggle  tag='b' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>
                Logiciels
      </MDBDropdownToggle>
      </MDBNavbarLink>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="/logiciels">Accueil</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="/venus">Venus</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">PolyCompta</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">PolyPaye</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Venus Optic</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Medix</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
      
    </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink aria-current='page' href='/activites' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>
                Activités
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/Boutique' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>Boutique</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/apropos' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>A Propos</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact' style={{color:'#B2EBF2',fontWeight:'bold',fontFamily:'times new romon',fontSize:'25px',fontStyle:'italic'}}>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        
      </MDBContainer>
      <Link to='/login'><button className='btn btn-outline-info m-1' style={{fontFamily:'Times new romon', fontSize:'15px',fontWeight:'bold'}}>Connecter</button></Link>
      <Link to='/signUp'><button className='btn btn-info m-1' style={{fontFamily:'Times new romon', fontSize:'15px',fontWeight:'bold'}}>S'inscrire </button></Link>
      <Link to='/admin'><button className='btn btn-outline-dark m-2' style={{fontFamily:'Times new romon', fontSize:'15px',fontWeight:'bold'}}>Admin </button></Link>
    </MDBNavbar>
    </div>
    );
}
}
export default Nav;