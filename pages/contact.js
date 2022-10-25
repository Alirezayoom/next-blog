import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="You can send me your messages!" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default ContactPage;
