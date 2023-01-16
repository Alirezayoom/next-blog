import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="me coding"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I'm Alireza</h1>
      <p>
        I blog about web deveopment - especially frontend frameworks like React
        and Next.
      </p>
    </section>
  );
}
