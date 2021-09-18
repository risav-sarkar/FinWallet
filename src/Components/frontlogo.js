import React from 'react';
import { useHistory } from "react-router-dom";




export function Frontlogo() {
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


