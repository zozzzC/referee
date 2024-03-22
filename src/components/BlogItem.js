import React from 'react';


const BlogItem = ( { Title, Description } ) => {
    return (  
        <div className="blog-item">
            <h1>{ Title }</h1>
            <p>{ Description }</p>
        </div>
    );
}
 
export default BlogItem;