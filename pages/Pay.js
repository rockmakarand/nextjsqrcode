/* eslint-disable react/jsx-key */
import axios from 'axios'

import { auth, db, storage } from "./firebase";
import React,{ useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp,collection, onSnapshot, orderBy, query, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Aos from "aos"

import "aos/dist/aos.css"



function App() {
    const[payid, setPayid]=useState("")
    const[credit, setCredit]=useState("")

    const [tran, setTran] = useState([]);
    const [user]=useAuthState(auth)
   

   

     


 
      useEffect(() => {
        const traRef = collection(db, "payment");
        const q = query(traRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
          const tran = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTran(tran);
          console.log(tran);
        });
      }, []);
    
  
  



return(
  <div>
   
     
    {tran.map(
    ({
     userId, credit, payid
     
    }) => 
    
    {
      if(user&&user.uid===userId)    

  
  return(
  
  
  <div>
  
  
  
  
  
   
  
    <br/>
    <h1>Credits = {credit}</h1>
    <h3>{payid}</h3>
    <h2>(if credits = 1 then your payment is successful)</h2>

  
    <br/>
    
    
    
              
        
                  
              
  
    
  
  </div>
  
  )
  
  
     
    }
  )
  }
  
  </div>
)

}

export default App;
