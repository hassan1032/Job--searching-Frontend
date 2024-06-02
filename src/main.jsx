import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

export const Context = createContext({isAuthorized: false});
const AppWrapper = ()=>{
  const [isAuthorized,setIsAuthorized]= useState(localStorage.getItem("token")?true:false);
  const [user,setUser] = useState({})
  return (
    <Context.Provider value={{isAuthorized,setIsAuthorized,user,setUser}}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Context.Provider>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppWrapper/>
  </React.StrictMode>,
)
