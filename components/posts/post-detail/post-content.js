import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from 'next/image'


function PostContent(props) {
  const {post} = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

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
    p(paragraph){
      const {node} = paragraph;
      if(node.children[0].tagName === 'img'){
        const image = node.children[0];

        return <div className={classes.image}>
          <Image src={`/images/posts/${post.slug}/${image.properties.src}`} 
          alt={image.alt} 
          width={600} 
          height={300} 
          />
        </div>
      }
      return <p>{paragraph.children}</p>
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown components={customRenderers} >{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
