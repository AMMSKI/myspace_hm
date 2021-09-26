import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Users from "../pages/Users";
import MyBabyButton from "./MyBabyButton";
import PostForm from "./PostForm";
import Post from "./Post";

const Posts = ({ user, x }) => {
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
    return posts.map( p => {
      return(
      <Post key={p.id} x={x} p={p} user={user} posts={posts} deletePost={deletePost}/>
    )})
    }
    

    return (
      <>
        {renderPosts()}
      </>
    )

} 



export default Posts
