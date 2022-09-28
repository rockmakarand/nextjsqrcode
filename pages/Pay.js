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
    const[credit, setCredit]=useState(0)

    const [tran, setTran] = useState([]);
    const [user]=useAuthState(auth)
   

   

      const handlePublish= async()=>
      {
       
        
          
         
         
               
        const articleRef = collection(db, "payment");
        addDoc(articleRef, {
        
          payid:payid,
    
          createdAt: Timestamp.now().toDate(),
         
          userId:user.uid,
          credit:credit
          
        
          
      });
      }



    useEffect(()=>{
        Aos.init({duration:3000});
      },[]);
    
      
  


  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
const respon =  axios.get("http://localhost:3000/")


 
async function displayRazorpay()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
 

  const response = await axios.get("http://localhost:3000/")

  console.log(response.data)



  const options = 
  {
      key: "rzp_test_bopFqT94fTv9Om", // Enter the Key ID generated from the Dashboard
      amount: 100,
      order_id: response.data.id,
      currency: "INR",
      name: "QR code scanner, URL shortner",
     description: "Payment",
      handler: async function (response) {
          const data = {
            razorpaymentid: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
              
          };
          setPayid(data.razorpaymentid)
          setCredit(1);
          handlePublish()
          
          console.log(data.razorpaymentid)
        

          console.log(data)
          console.log(credit)

          

          
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
return (
   
    <div className="App">
        
    <div className="mm">
        
    <div className="con">
        <br/> <button onClick={displayRazorpay} className="ouu"><p style={{color:'white'}}>Make a Payment</p></button>
      
        
         <br/>
        <br/>
        <br/>
     </div>
   
        </div> 
       


        </div>
  
  );
}

export default App;
