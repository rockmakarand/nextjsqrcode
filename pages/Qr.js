/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { auth, db } from "./firebase";
import React,{ useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp,collection, onSnapshot, orderBy, query, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import QRCode from "qrcode.react";
import Head from "next/head";

const Qr = () => {
  const [user]=useAuthState(auth)
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      
    });
  };

    //const navigate = useNavigate();
    
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
   
    <div style={{marginLeft:50, marginRight:50 }} >
     
      <h1>QR CODE GENERATOR</h1>
      <h1>{user?.displayName}</h1>  
      <h1>{user?.email}</h1>  
      <img src={user?.photoURL}/>
      <br/>
      <br/>
      
      <button onClick={signUserOut}>Sign out</button>
      <br/>
      <br/>
      <br/>
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
          <Head>
        <title>
         QR CODE Generator by NIT TRICHY students
        </title>
        <meta
          name="description"
          content="Gautham Vijayan's Portfolio showcasing his React and React Native Projects. Also read Gautham Vijayan's 
          blogs about 
          Stripe
          ,Razorpay and other Payment Integration Blogs."
        />
        <meta
          name="keywords"
          content="Makarand R React JS Developer React Native Developer NIT Trichy QR code generator"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={"Makarand R is a React JS & a React Native Developer."}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            "https://pbs.twimg.com/profile_images/1435255967743049730/D1812u9x_400x400.jpg"
          }
        />
        <meta property="og:url" content={`https://gauthamvijay.com`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://pbs.twimg.com/profile_images/1435255967743049730/D1812u9x_400x400.jpg"
        />
        <meta property="twitter:site" content="@Makarand2003" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <script
          type="text/javascript"
          src="../public/Static/Jotform.js"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossOrigin="anonymous"
        ></script>

        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
            
 </div>
  )
}

export default Qr