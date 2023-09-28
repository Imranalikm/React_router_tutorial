import React, { useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

function StoryID() {
    const {id} =useParams();
    const[story,setStory] =useState();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setStory(data))
    })
    console.log(id);
  return (
    <div>
        <h2>{story?.title}</h2>
        <p>{story?.body}</p>
    </div>
  )
}

export default StoryID