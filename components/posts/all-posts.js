import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

export default function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
