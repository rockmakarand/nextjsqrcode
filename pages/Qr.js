import { auth, db } from "./firebase";
import React,{ useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp,collection, onSnapshot, orderBy, query, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import QRCode from "qrcode.react";

const Qr = () => {

    //const navigate = useNavigate();
    
 const [user] = useAuthState(auth);
 const [formData, setFormData] = useState({
   gname: "",
   name:"",
  
  
  
   createdAt: Timestamp.now().toDate(),
 });

 const [tran, setTran] = useState([]);

 useEffect(() => {
   const traRef = collection(db, "qrcode");
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

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };
 

const handlePublish=()=>
{
   if ((!formData.gname ) ) {
       alert("Please fill all the fields");
       return;
     }
   

     const articleRef = collection(db, "qrcode");
     addDoc(articleRef, {
       gname: formData.gname,
       name: formData.name,
       userId:user.uid,


      
      
       createdAt: Timestamp.now().toDate(),
       
       
      
     })
     
}
if(user)
  return (
    <div style={{ padding: 200,  }} >
      <h1>QR CODE GENERATOR</h1>
         <label htmlFor="">Website URL:  </label>
         <br/>
         <br/>
            <input
              type="text"
              name="gname"
              className="form-control"
              value={formData.gname}
              onChange={(e) => handleChange(e)}
            />
            <br/>
            <br/>
            <label htmlFor="">Name of QR Code:  </label>
         <br/>
         <br/>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
            <br/>
            <br/>
              <Button
            className="form-control"
            variant="primary"
            type="submit"
            onClick={handlePublish}
          >
            Publish
          </Button>
          <br/>
          <br/>
          <div>
          {tran.map(
          ({
            id,
            gname,
            name,
            createdAt,
            userId
           
          }) => 
          {

   if(user&&user.uid===userId)         
  return(
  
    
    <div className="  border mt-3 p-3 w-40 bg-red " key={id}>
        <h2>Your QR CODE</h2>
        
    
       
              
        <QRCode
          value={gname}style={{ marginRight: 50 }}/>
          <br/>
          <br/>
          <h5>{name}</h5>
    
     </div>
    
  )
  
  
           
          }
        )
      }
          </div>
            
 </div>
  )
}

export default Qr