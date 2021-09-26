import React, {useState, useContext} from "react";
import { Card, Feed } from "semantic-ui-react";
import MyBabyButton from "./MyBabyButton";
import PostForm from "./PostForm";
import styled from "styled-components";
import { AuthContext } from '../providers/AuthProvider'



const Post = ({p, deletePost}) => {
  const { user } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false);
  const [likes, setLikes] = useState(0)

  // const likes = (p) => {
  //   if [p.likes == null
  //   return ( "0")
  //     }

return (
  <Card>
    <Card.Content>
      <Feed> 
        <Feed.Event>
            <img className="ui avatar image" src={user.image} />
          <Feed.Content>
            <Feed.Summary>
            {p.text}
            </Feed.Summary>
          </Feed.Content>
          <Feed.Content>
            <Feed.Summary>

              <MyBabyButton onClick = {() => setShowForm(!showForm)}> 
              {!showForm ? "Edit" : "Cancel"} 
              </MyBabyButton>
              
              {showForm && <PostForm id={p.id} showForm={showForm} setShowForm={setShowForm} text={p.text} image={p.image} mood={p.mood}/>}
              
              <MyBabyButton onClick= {()=>deletePost(p.id)}>Delete</MyBabyButton>

            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      <Card.Content>
        <Postimg src={p.image}/>
      </Card.Content>
    </Feed>
  </Card.Content>
   <Card.Meta>{`${user.name} is feeling ${p.mood}`}</Card.Meta>
   <Card.Content extra>
    <p> 
      <i class="heart icon"/>
      {`${p.likes} likes`} 
    </p>
  </Card.Content>
</Card>
)}


export default Post

const Postimg = styled.img`
max-width: 100%;
max-height: 100%;
`