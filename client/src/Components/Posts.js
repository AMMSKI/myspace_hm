import axios from "axios";
import React, { useEffect, useState } from "react";
import { Feed, Card } from "semantic-ui-react";
import styled from "styled-components";
import Users from "../pages/Users";

const Posts = ({ user }) => {
  const [posts, setPosts] = useState([])

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

  const renderPosts = () => {
    return posts.map((p)=>{
      return (
        <Card color='black'>
          <Card.Content>
            <Feed>
              <Feed.Event>
                  <img class="ui avatar image" src={user.image} />
                {/* <Card.Header>{user.nickname}</Card.Header> */}
                <Feed.Content>
                  <Feed.Summary>
                  {p.text}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
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



export default Posts

