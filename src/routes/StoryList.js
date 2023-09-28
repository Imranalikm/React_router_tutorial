import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function StoryList() {
    const [stories,setStories] =useState([]);

    const  navigate =useNavigate();

    useEffect(()=>{
        console.log("Fetching stories...");
        fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
        .then(res => res.json())
        .then((data) =>  
            
            setStories(data))
    });
  return (
  <div >
    <h1 className='text-center text-blue-600 text-3xl m-4'>Stories</h1>
    <div className='grid grid-cols-2 gap-6'>
        
        {stories && stories.map((story) => {
            return (
                <div className='bg-white border p-6' key={story.id}>
                    <h2 className='text-xl'>{story.title}</h2>
                    <button onClick={()=>{navigate(`${story.id}`)}}className='bg-pink-500 text-white px-3 py-1 '>Read Story</button>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default StoryList