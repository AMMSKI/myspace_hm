import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Form } from 'semantic-ui-react'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123456')
  const history = useHistory()

  const handleSubmit = () => {
    handleLogin({ email, password }, history)
  }

  return (
    <div fluid='md' style={{textAlign:'center', marginTop:'10vh'}}>
      <h1 style={{color:'#1AADB7'}}>May the force be with you...</h1>
      <h2 style={{color:'#1AADB7'}}>Log in below</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        value={email}
        onChange={(e, { value }) => {
          setEmail(value);
        }}
        label={"Email"}
         />
        <Form.Input
        value={password}
        onChange={(e, { value }) => {
          setPassword(value);
        }}
        label={"Password"}
         />
        
        <MyButton>Login</MyButton>
      </Form>
    </div>
  )
}

export default Login