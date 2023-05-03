import React, { useState,useRef } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const AddFacture = ()=>{
    const {
        cartTotal,
      } = useCart();
    const [factCod,setFactCod]=useState("");  
    const [factPrixUnit,setFactPrixUnit]=useState(cartTotal);
    const [factPrixHT,setFactPrixHT]=useState(Number(factPrixUnit/1.19));
    const [factRemise,setFactRemise]=useState(10);
    const [factTva,setFactTva]=useState(19);
    const [factPrixTotal,setFactPrixTotal]=useState(Number((factPrixHT*0.9)+factPrixHT*0.9*(factTva/100)));
    const refId=useRef(0);
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3005/factures",{id:refId.current,
            factCod:factCod,factRemise:factRemise,factPrixHT:factPrixHT,factPrixUnit:factPrixUnit,factTva:factTva,
            factPrixTotal:factPrixTotal})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err);
            })
        }
        return (
            <div className="Addfacture">
            <fieldset style={{backgroundColor:'#E8EAF6',float:'left',fontSize:'15px',borderRadius:'3%',width:'530px'}}>
            <div className="col-12">
            <form onSubmit={handleSubmit}>
                <h1 style={{color:'#AD1457',float:'left',fontFamily:'Times New Romon' }}>Votre Facture</h1><br></br><br></br><br></br>
               <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Numero Facture</label>
                <input style={{backgroundColor:'#E8EAF6'}} type="text" name="factCod" value={factCod+1} onChange={e=>setFactCod(e.target.value)} />
                <br></br><br></br>                
                <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prix Unitaire TTC</label>
                <input disabled style={{backgroundColor:'#E8EAF6'}} type="text" name="factPrixUnit" value={factPrixUnit} onChange={e=>setFactPrixUnit(e.target.value)} />
                <br></br><br></br>
                <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prix HT avant Remise</label>
                <input disabled style={{backgroundColor:'#E8EAF6'}} type="text" name="factPrixHT" value={factPrixHT} onChange={e=>setFactPrixHT(e.target.value)} />
                <br></br><br></br>
                <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Remise</label>
                <input disabled style={{backgroundColor:'#E8EAF6'}} type="text" name="factRemise" value={factRemise} onChange={e=>setFactRemise(e.target.value)} />
                <br></br><br></br>
                <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prix HT après Remise</label>
                <input disabled style={{backgroundColor:'#E8EAF6'}} type="text" name="factPrixHT" value={factPrixHT*0.9} onChange={e=>setFactPrixHT(e.target.value)} />
                <br></br><br></br>
                <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>TVA</label>
                <input disabled style={{backgroundColor:'#E8EAF6'}} type="text" name="factTva" value={factPrixHT*0.9*(factTva/100)} onChange={e=>setFactTva(e.target.value)} />
                <br></br><br></br>
                <label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prix Total TTC</label>
                <input style={{backgroundColor:'#E8EAF6'}} type="text" name="factPrixTotal" disabled value={((factPrixHT*0.9)+factPrixHT*0.9*(factTva/100))} onChange={e=>setFactPrixTotal(e.target.value)} />
                <br></br><br></br>
                <input type="submit" className="btn btn-success m-1" value="Confirmer"/>
                <Link to='/addClt' className="btn btn-primary m-1">Suivant</Link>
            
            
            
            
            
            
            
            
            </form>
            </div>
            </fieldset>
            </div>
        );
}
export default AddFacture;