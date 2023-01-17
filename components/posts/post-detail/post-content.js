import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const dummyPost = {
  title: "Next JS",
  slug: "getting-started-with-nextjs",
  date: "2022-12-12",
  image: "nextjs.jpeg",
  content: "# This is a frist post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${dummyPost.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={dummyPost.title} image={imagePath} />
      <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
    </article>
  );
}
