const BlogItem = ( { Title, Description } ) => {
    return (  
        <div className="BlogItem">
            <h1>{ Title }</h1>
            <p>{ Description }</p>
        </div>
    );
}
 
export default BlogItem;