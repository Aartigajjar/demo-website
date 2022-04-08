import React, { Component } from 'react'

function Posts(props) {
    const listItems=props.Posts.map((post,index)=>
    <PostItem post={post} key={post.id}/>
   )
  return (
    <div className='Posts'>
        {listItems}
    </div>
  )
}

function PostItem(props){
    const post=props.Posts;
    return(
        <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    )
}

class Blog extends Component{
    render(){
            const Posts=[
                {id:1, title:"blog post 1",content:"blog post 1 content here..."},
                {id:2, title:"blog post 2",content:"blog post 2 content here..."},
                {id:3, title:"blog post 3",content:"blog post 3 content here..."},
                {id:4, title:"blog post 4",content:"blog post 4 content here..."}
            ];
            return(
                <div>
                <h2>Blog Posts</h2>
                </div>
            )
    }
}

export default posts