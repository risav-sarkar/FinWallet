import { auth } from "../firebase/firebase";
import React, { useState } from 'react'


const Header = () => {
  const [name,setName] = useState('Hi anonymous')
  const checkUser = auth.onAuthStateChanged((user) =>{
    if (user){
      setName('Hi '+user.displayName) 
    }
  })
  checkUser();
  return (<h1 className="headerText">{name}</h1>);
};

export default Header;
