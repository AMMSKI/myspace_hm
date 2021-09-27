import axios from 'axios';
import { useEffect, useState, useLocation, useContext } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Card, Form, Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
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

const PostForm = ({id, text, image, mood, showForm, setShowForm, updatePosts}) => {
  const [postText, setPostText] = useState(id ? text : "")
  const [postImage, setPostImage] = useState(id ? image : "")
  const [postMood, setPostMood] = useState(id ? mood : "")
  const { user } = useContext(AuthContext)
  
  // const getPost = async () => {
  //   try {
  //     let res = await axios.get(`/api/users/${user.id}/posts/${id}`)
      
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let post = {
      user_id: user.id,
      text: postText,
      image: postImage,
      mood: postMood
    };
    console.log(post)
    if (id) {
      let res = await axios.put(`/api/users/${user.id}/posts/${id}`, post);
      console.log(res.data);
      ;
      console.log(res.data);
      setShowForm(!showForm);
      updatePosts(res.data);
    }
    else {
      console.log(e)
      let res = await axios.post(`/api/users/${user.id}/posts/`, post);
      window.location.reload();
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
        label="What are you thinking?"
        placeholder={'Post here'}
        />

        <Form.Input
        type="url"
        value={postImage}
        onChange={(e, {value}) => {
          setPostImage(value);
        }}
        placeholder={"Add an image to your post (url)"}
        />

        <Dropdown
        onChange={(e, {value}) => setPostMood(value)}
        name="post mood"
        fluid
        selection
        options={moods}
        placeholder="How are you feeling?">
        </Dropdown><br/>
        <MyButton>Post!</MyButton>
      </Form>
      </Card>
    </div>
    )
}
export default PostForm;