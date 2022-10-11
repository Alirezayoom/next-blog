import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, slug, date, excerpt } = props.post;
  const formattedDate = new Date(date).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width="300" height="200" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>The excerpt</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
