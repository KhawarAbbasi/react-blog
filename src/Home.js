import React from 'react';

import Bloglist from './Bloglist'
import useFetch from './useFetch'
function Home() {
    
    // const deleteBlog = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    //     //console.log(newBlogs);
    // }
    const { data:blogs,pending,error}=useFetch('http://localhost:8000/blogs')
   //DEpendency Arraay
    return <div className='home'>
       
      
        {error && <div>{ error}</div> }
        {pending && <div>loading....</div>}

        { blogs && <Bloglist blogs={blogs} title='All Blogs!!!'  />}
        {/* <button onClick={ ()=>setName('dawar')}>hange NAme</button>
        <p>{ name}</p> */}
    </div>;
}

export default Home;




// const [name, setName] = useState('khawar');
    // const [age, setAge] = useState(20);
    // const hanleClick = () => {
    //     setName('Dawar');
    //     setAge('25')
    // };
    // const hanleClickgain = (name) => {
    //     alert(`Hello ${name}`)
    // };

     