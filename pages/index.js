import Hero from "../components/home/hero";
import PostsGrid from "../components/posts/posts-grid";

const dummyPosts = [
  {
    title: "Next JS",
    slug: "getting-started-with-nextjs",
    excerpt:
      "Next JS is a react framework for production - it makes building fullstack react with built in SSR",
    date: "2022-12-12",
    image: "nextjs.jpeg",
  },
  {
    title: "Next JS",
    slug: "getting-started-with-nextjs2",
    excerpt:
      "Next JS is a react framework for production - it makes building fullstack react with built in SSR",
    date: "2022-12-12",
    image: "nextjs.jpeg",
  },
  {
    title: "Next JS",
    slug: "getting-started-with-nextjs3",
    excerpt:
      "Next JS is a react framework for production - it makes building fullstack react with built in SSR",
    date: "2022-12-12",
    image: "nextjs.jpeg",
  },
  {
    title: "Next JS",
    slug: "getting-started-with-nextjs4",
    excerpt:
      "Next JS is a react framework for production - it makes building fullstack react with built in SSR",
    date: "2022-12-12",
    image: "nextjs.jpeg",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <PostsGrid posts={dummyPosts} />
    </>
  );
}
