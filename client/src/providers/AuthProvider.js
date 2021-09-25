import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const handleRegister = async (user, history) => {
    console.log('handleregets', user)
    try{
      let res = await axios.post('/api/auth', user)
      console.log('res', res)
      setUser(res.data.data)
      history.push('/')
    }catch(err){
      console.log(err)
      //we want an error message here if registration doesn't work!
    }
  }

  const handleLogin = async (user, history) => {
    try{
      let res = await axios.post('/api/auth/sign_in', user)
      setUser(res.data.data)
      alert('Login succsessful')
      history.push('/')
    }catch(err){
      console.log(err)
    }
  }

  const handleLogout = (history) => {
    console.log('log out')
    setUser(null);
    // remove the access from local storage.
    localStorage.removeItem("access-token");
    history.push("/login");
  }


  return (
    <AuthContext.Provider value={{
      user,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user ? true : false,
    }}>
      {props.children}
    </AuthContext.Provider>
  )


}

export default AuthProvider