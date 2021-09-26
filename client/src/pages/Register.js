import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Form } from 'semantic-ui-react'
import MyButton from '../Components/MyButton'
import { AuthContext } from '../providers/AuthProvider'

const Login = () => {
  const { handleRegister } = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [name, setName] = useState('test name')
  const [image, setImage] = useState('https://avatars.dicebear.com/v2/identicon/0412afd0cdaff58533c18fc72c58cc8a.svg')
  const [password, setPassword] = useState('123456')
  const [confirmPassword, setConfirmPassword] = useState('123456')
  const history = useHistory()

  const handleSubmit = () => {
    if(password === confirmPassword){
    handleRegister({ email, password, name, image }, history)
    }else{
      alert('Password does not match')
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        value={name}
        onChange={(e, { value }) => {
          setName(value);
        }}
        label={"Name"}
         />
        <Form.Input
        value={email}
        onChange={(e, { value }) => {
          setEmail(value);
        }}
        label={"Email"}
         />
         <Form.Input
        value={image}
        onChange={(e, { value }) => {
          setImage(value);
        }}
        label={"Email"}
         />
        <Form.Input
        value={password}
        onChange={(e, { value }) => {
          setPassword(value);
        }}
        label={"Email"}
         />
        <Form.Input
        value={confirmPassword}
        onChange={(e, { value }) => {
          setConfirmPassword(value);
        }}
        label={"Confirm Password"}
         />
        
        <MyButton>Add</MyButton>
      </Form>
    </div>
  )
}

export default Login