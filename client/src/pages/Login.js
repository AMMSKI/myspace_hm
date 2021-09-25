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
    <div>
      <h1>Log In</h1>
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