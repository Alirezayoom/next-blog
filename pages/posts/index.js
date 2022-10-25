import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of posts about programming" />
      </Head>
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
