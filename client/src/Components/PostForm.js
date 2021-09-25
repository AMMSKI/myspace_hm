import axios from 'axios';
import { useEffect, useState, useLocation } from 'react';
import { Card, Form, Dropdown } from 'semantic-ui-react'
import MyButton from './MyButton';
import Posts from './Posts';

const moods = [
  {key: "mindful of my feelings", text: "mindful of my feelings", value: "mindful of my feelings"},
  {key: "fear", text: "fear", value: "fear"},
  {key: "anger", text: "anger", value: "anger"},
  {key: "hate", text: "hate", value: "hate"},
  {key: "suffering", text: "suffering", value: "suffering"},
  {key: "wrrRAAAArgh", text: "wrrRAAAArgh", value: "wrrRAAAArgh"},
  {key: "rooawrgh", text: "rooawrgh", value: "rooawrgh"},
  {key: "gwaaarghh", text: "gwaaarghh", value: "gwaaarghh"},
  {key: "muuwwaa wwwaarahhg", text: "muuwwaa wwwaarahhg", value: "muuwwaa wwwaarahhg"},
  {key: "hrrr", text: "hrrr", value: "hrrr"},
]

const PostForm = ({user}) => {
  const [postUser, setPostUser] = useState(user)
  const [postText, setPostText] = useState('')
  const [postImage, setPostImage] = useState("")
  const [postMood, setPostMood] = useState("")

  const handleSubmit = async (e) => {
    console.log("text:", postText, "image:", postImage, "mood:", postMood)
    try{
      console.log(e)
      await axios.post(`/api/users/${user.id}/posts/`, 
      { user_id: user.id,
        text: postText,
        image: postImage,
        mood: postMood
      })
      window.location.reload();
      } catch (error) {
      console.log(error.response)
    }
  } 


  return (
    <div>
      <Card fluid style={{marginTop: "15px"}}>
      <Form onSubmit={handleSubmit}>

        <Form.Input
        value={postText}
        onChange={(e) => {
          setPostText(e.target.value)}}
        label="What are you thinking?"/>

        <Form.Input
        type="url"
        value={postImage}
        onChange={(e, {value}) => {
          setPostImage(value);
        }}
        placeholder={"add an image to your post"}
        />

        <Dropdown
        onChange={(e, {value}) => setPostMood(value)}
        name="post mood"
        fluid
        selection
        options={moods}
        placeholder="How are you feeling?"
        style={{marginBottom: "6px"}}>
        </Dropdown>
        <MyButton>Post!</MyButton>
      </Form>
      </Card>
    </div>
    )
}
export default PostForm;