/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import { auth, db } from "./firebase";
import React,{ useState } from "react";
import { signOut } from "firebase/auth";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Account = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  if(isAuth)
  {
    return (
    
        <div style={{backgroundColor:'black'}}>
          <br/>
            <br/>
           
            <div className="iuu">
            <br/>
            <br/>
            
        
        <h2 style={{textAlign:'center',marginLeft:10,marginRight:10, padding:20, color:'white'}}> Name:{auth.currentUser?.displayName}</h2>
        <br/>
        <h2 style={{textAlign:'center',marginLeft:10,marginRight:10, padding:20, paddingRight:20,color:'white'}}>Email:{auth.currentUser?.email}</h2>
        <br/>
        <h2 style={{textAlign:'center',marginLeft:10,marginRight:10, color:'white'}}>Profile Picture:</h2>
        <img src={auth.currentUser?.photoURL} className="bb" style={{borderColor:'white'}}></img>
        <br/>
        <br/>
       
              <Button onClick={signUserOut} className="jkl btn btn-danger" > <n >Log Out</n></Button>
             
        </div>
        <br/>
        <br/>
            <br/>
           
           
        <br/>
        <br/>
        </div>
      )
    }
    
  }
 
export default Account