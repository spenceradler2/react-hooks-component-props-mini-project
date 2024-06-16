import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
  
    const postElements = posts.map((post) =>
        <Article 
        key = {post.id} 
        title = {post.title}
        date = {post.date}
        preview = {post.preview}
        />
        )
    return (
    <div className="ArticleList">
    <main>
     {postElements}   
    </main>
    </div>
  );
}

export default ArticleList;
