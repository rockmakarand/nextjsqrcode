import { signOut } from 'firebase/auth';
import { userAgent } from 'next/server';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, provider } from './firebase'
import { signInWithPopup } from "firebase/auth";



function Login() {
  const [user]=useAuthState(auth)
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      
    });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      
    
    });
  };
 
  if(!user)
  {
    return(
      <button onClick={signInWithGoogle}>Sign In with Google</button>
     
    )
  }
  if(user)
  return (
    <div className="App" style={{padding:100}}>
      <h1>{user?.displayName}</h1>  
      <h1>{user?.email}</h1>  
      <img src={user?.photoURL}/>
      <br/>
      <br/>
      <button onClick={signUserOut}>Sign out</button>
  
    </div>
  );
}

export default Login;