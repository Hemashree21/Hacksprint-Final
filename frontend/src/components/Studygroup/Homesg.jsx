import React, { useEffect, useState } from 'react';
import './Homesg.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios'
// import {Posts} from '../../dummyData';

const Homesg = () => {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const res = axios.get("/timeline/6597de0d0579e2d12a42618d")
    console.log(res)
  }, [])
  return (
    <div className='homesg-container'>
      <div className="homesgWrapper">
        <Share/>
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))} */}
      </div>
    </div>
  )
}

export default Homesg