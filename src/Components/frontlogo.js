import React from 'react';
import { Signin } from './signin';
import { useHistory } from "react-router-dom";
import { useState,useEffect } from 'react'



export function Frontlogo() {
    const [fronta, setfronta] = useState(0)
    const history=useHistory()
    

    setTimeout(() => {
      history.push("/signin")
    }, 5800);

   
  return (
    <div className="finwall">

      <div className="logofin">
      <div className="fincont">
      <div className="finimg"> </div>
      </div>
      
      <p className="fintxt">FinWallet</p>

    

      </div>
    </div>
  );
}


