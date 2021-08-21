import {useState, useEffect} from 'react';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Cookies from 'js-cookie';
import axios from "axios";
import fetch from 'unfetch';
import ProfileSetUp from './pages/profile/ProfileSetUp';
import Register from './pages/register/Register';
import TryInPage from './pages/TryInPage';
import { URL_BACK } from './GlobalValues';


function App() {
  const [user, setUser] = useState(null)

  const checkLogin = async (token, refresh) => {
    console.log("Token is" + token);
    if (token) {
    try {
      const res = await fetch(`${URL_BACK}api/checklogin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                  'Authorization' : 'Bearer '+ token }, 
        credentials: 'include'  
      });
      const statusResponse = await res.status;
      const jsonResponse = await res.json()
      console.log( 'status respnose is '+ statusResponse);
      if (statusResponse == 200 &&  refresh ) {
        const userTobeSet = jsonResponse;
        userTobeSet.accessToken = token
        userTobeSet.refreshToken = refresh;
        setUser(userTobeSet)
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  }
  useEffect(() => {
    const token = Cookies.get('AccessT');
    const refreshToken = Cookies.get('AccessRefreshT');
    checkLogin(token,refreshToken);

  }, [])
  return (
    <div className="App">
      {
        user ? <Dashboard 
            user={user}
            setUser = {setUser}
        /> : <Login 
              setUser = {setUser}
        />
      }

    </div>
  );
}

export default App;
