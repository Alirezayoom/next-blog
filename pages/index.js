import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage({ featuredPosts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts: featuredPosts,
    },
  };
}
