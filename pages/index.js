import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_DATA = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    date: "2022-02-12",
    excerpt:
      "Next.js is a react framework for production - it make building fullstack web applications.",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    date: "2022-02-12",
    excerpt:
      "Next.js is a react framework for production - it make building fullstack web applications.",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    date: "2022-02-12",
    excerpt:
      "Next.js is a react framework for production - it make building fullstack web applications.",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    date: "2022-02-12",
    excerpt:
      "Next.js is a react framework for production - it make building fullstack web applications.",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}

export default HomePage;
