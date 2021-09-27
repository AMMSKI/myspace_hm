import axios from "axios";
import React, { useReducer } from "react";

const LikesReducer = ({user, p}) => {

  const saveLikes = async () => {
  try{
  let res = await axios.put(`/api/users/${user.id}/posts/${p.id}`, {
    user_id: user.id,
    text: p.ext,
    image: p.image,
    mood: p.mood,
    likes: likes
  });
  console.log("HERE IS RES", res)
  } catch (err) {
    console.log(err)
  }
}

  const [likes, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
    }
  }, p.likes);

  return (
    <p>
      {likes}
      <i class="heart icon"
       onClick={() => {dispatch("add"); saveLikes(likes);}}/>
    </p>
  );
};

export default LikesReducer;