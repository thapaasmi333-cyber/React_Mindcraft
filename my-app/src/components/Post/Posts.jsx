import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) {
          throw new Error("Server error");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) return <h2>Loading..</h2>;
  if (error) return <h2>Error: </h2>;

  return (
    <>
      <h1> POSTS </h1>

      {posts.map((post) => (
        <div key={post.userId}>
          <p>User ID : {post.userId}</p>
          <h2>Tittle : {post.title}</h2>
          <p> Post : {post.body}</p>
        </div>
      ))}
    </>
  );
}
