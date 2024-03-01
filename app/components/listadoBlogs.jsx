import PropTypes from "prop-types"
import Post from "./post";

export default function ListadoBlogs({ posts }) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.length &&
          posts.map((post) => <Post key={post.id} post={post.attributes} />)}
      </div>
    </>
  );
}

ListadoBlogs.propTypes = {
  posts: PropTypes.shape({
    length: PropTypes.func,
    map: PropTypes.func
  })
}
