import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs4",
  title: "Getting started with next js",
  image: "getting-started-nextjs.png",
  date: "2022-11-14",
  content: "# this is first post.",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_POST.title} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;