import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const humanReadDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
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
