import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/site/image.jpg"
          alt="profile image"
          width="300"
          height="300"
        />
      </div>
      <h1>Hi, I'm Alireza</h1>
      <p>
        This is a blog about web development, especially frontend frameworkds
        like react and vue.
      </p>
    </section>
  );
}

export default Hero;
