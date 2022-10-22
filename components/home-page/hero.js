import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <Image
        src="/images/site/image.jpg"
        alt="my image"
        width={300}
        height={300}
      />
      <h1>Hi, I'm Alireza</h1>
      <p>
        I blog about web development - especially frontend frameworks like react
        and vue.
      </p>
    </section>
  );
}

export default Hero;
