import axios from "axios";
import React, { useEffect, useState } from "react";
import { Feed, Card } from "semantic-ui-react";
import styled from "styled-components";
import Users from "../pages/Users";
import MyBabyButton from "./MyBabyButton";
import PostForm from "./PostForm";

const Posts = ({ user }) => {
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{
    getPosts()
  },[])

  const getPosts = async () => {
    try{
      let res = await axios.get(`/api/users/${user.id}/posts`)
      console.log(res.data)
      setPosts(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/users/${user.id}/posts/${id}`)
      const filterPosts = posts.filter((post) => post.id !==id);
      setPosts(filterPosts)
    } catch {
      alert("Blast!  He got away!")
    }
  }

  const renderPosts = () => {
    return posts.map((p)=>{
      return (
        <Card>
          <Card.Content>
            <Feed>
              <Feed.Event>
                  <img class="ui avatar image" src={user.image} />
                <Feed.Content>
                  <Feed.Summary>
                  {p.text}
                  </Feed.Summary>
                </Feed.Content>
                <Feed.Content>
                  <Feed.Summary>

                    <MyBabyButton onClick = {() => setShowForm(!showForm)}> {!showForm ? "Edit" : "Cancel"} </MyBabyButton>
                    {showForm && <PostForm id={p.id}/>}
                    <MyBabyButton onClick= {()=>deletePost(p.id)}>Delete</MyBabyButton>

                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Card.Content>
                <Postimg src={p.image}/>
               </Card.Content>
              <Card.Content extra>
                {p.likes}
              </Card.Content>
            </Feed>
        </Card.Content>
        <Card.Meta>{`${user.name} is feeling ${p.mood}`}</Card.Meta>
      </Card>
      )
      })
    }
    

    return (
      <>
        {renderPosts()}
      </>
    )

} 

const Postimg = styled.img`
max-width: 100%;
max-height: 100%;
`


export default Posts
