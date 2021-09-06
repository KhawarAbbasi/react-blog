import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
function Create() {
    const [title, setTitle ] = useState()
    const [body, setBody] = useState()
    const [author, setAuthor] = useState('Khawar')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body:JSON.stringify(blog)
        }).then(() => {
            alert('Blog Added')
            setIsPending('true')
            history.push('/')

        })
        
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit }>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={((e) => setTitle(e.target.value))} required />
                <label htmlFor="">Blog Body</label>
                <textarea type="text" value={body} onChange={((e) => setBody(e.target.value))} required  />
                <label htmlFor="">Blog Author</label>
                <select value={author} onChange={((e) => setAuthor(e.target.value))}>
                    <option value="Khawar">Khawar</option>
                    <option value="Dawar">Dawar</option>
                
                </select>
                
                {!isPending && <button>Addd Blog</button>}
                {isPending && <button disabled>Adding blog .....</button>}
            </form>
        </div>
    )
}
export default Create
