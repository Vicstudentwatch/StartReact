import { useEffect,useState } from "react"

const FetchDataUseEffect = () => {
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err=> console.error("Error fetching data:"))
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