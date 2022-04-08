import React, { useEffect, useState } from 'react'

function ApiExample() {

    const [posts, setPosts] = useState([]);
    const fetchPost = async () => {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/random"
        );
        const data = await response.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <div className="App">
            <p> {posts.value} </p>
            <button onClick={fetchPost}> get new joke </button>
        </div>
    );
}


export default ApiExample