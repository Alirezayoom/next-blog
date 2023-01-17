import Link from "next/link";
import classes from "./post-item.module.css";

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const humanReadDate = new Date(date).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{humanReadDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
