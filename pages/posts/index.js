import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const AllPosts = getAllPosts();

  return {
    props: {
      posts: AllPosts,
    },
  };
}

export default AllPostsPage;
