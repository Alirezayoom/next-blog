import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function PostsPage({ allPosts }) {
  return <AllPosts posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  };
}
