import React, { Component } from 'react';
import {NavSideData} from '../administrateur/navSideData';
class SideNav extends Component {

    constructor(props) {

        super(props);
    }


    render() {
        return (
            
            <div className="SideNav" style={{height:'100%',width:'250px',backgroundColor:'#2F4050'}}>
                <ul className="sidenavlist" style={{height:'auto',width:'100%',padding:'0%'}}>
                {NavSideData.map((val,key)=>{
                    return(
                    <li id={window.location.pathname == val.link ? "active": ""} className="row" key={key} 
                    style={{cursor:'pointer',width:'100%',height:'60px',listStyleType:'none'
                    ,margin:'0%',display: 'flex', flexDirection:'row',color:'white',justifyContent:'right',fontFamily:'times new romon',alignItems:'right'}} onClick={()=>{window.location.pathname=val.link}}>
                        {" "}
                        <div style={{flex:'30%',display:'grid',placeItems:'center'}}>{val.icon}</div>
                        {" "}
                        <div style={{flex:'70%'}}>{val.title}</div>
                    </li>
                    )
                }
                )
                }
                </ul>
            </div>
        )
    }
}
export default SideNav;