import { useEffect,useState } from "react"

const FetchDataUseEffect = () => {
    useEffect( async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)
    
},[])
    const [posts, setPosts] = useState([])
  return (
    <div>
        {posts && posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p><strong>{post.id}</strong> {post.body}</p>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default FetchDataUseEffect