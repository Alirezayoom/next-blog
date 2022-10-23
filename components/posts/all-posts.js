import PostGrid from "./post-grid";
import classes from "./all-posts.module.css";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All posts page</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
