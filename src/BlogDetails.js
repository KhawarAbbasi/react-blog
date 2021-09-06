import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory} from 'react-router-dom'

function BlogDetails() {
    const { id } = useParams();
    
    const history=useHistory()
    const { data:blog, error, pending } = useFetch('http://localhost:8000/blogs/' + id);
    const DeleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
            
        }).then(() => {
            alert("Blog Deleted")
            history.push('/')
        })
    }
    return (
        <div>
            <div className="blog-details">
                {pending && <div>Loading ......</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Writeen by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={DeleteBlog
                        }>Delete Blog</button>
                    </article>
                )}
                </div>
        </div>
    )
}

export default BlogDetails
