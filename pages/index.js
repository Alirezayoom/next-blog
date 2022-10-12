import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next js is a react framework for production, it build full statck react applications.",
      date: "2022-11-11",
    },

    {
      slug: "getting-started-with-nextjs2",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next js is a react framework for production, it build full statck react applications.",
      date: "2022-11-12",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next js is a react framework for production, it build full statck react applications.",
      date: "2022-11-13",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "Next js is a react framework for production, it build full statck react applications.",
      date: "2022-11-14",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
