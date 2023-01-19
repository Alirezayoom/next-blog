import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import Image from "next/image";

import classes from "./post-content.module.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //   <Image src={`/images/posts/${post.slug}/${image.src}`}
    //   alt={image.alt}
    //   width={600}
    //   height={300}
    //   />
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, children } = code;
      return (
        <SyntaxHighlighter style={atomDark} language="js">
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
