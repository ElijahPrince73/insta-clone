import React, { useState, useEffect } from 'react';
import axios  from 'axios';

import CardList from './components/CardList/CardList'

const App = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API)
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App">
      <div className="container mx-auto sm:w-full lg:w-4/12">
        <div>Instagram</div>
        <CardList posts={posts} />
      </div>
    </div>
  );
}

export default App;
