import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@styles/Contact.module.scss";
import Layout from "@components/Layout";

const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
        className={styles.btn}
      >
        Submit Another Response
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form
      className={styles.container}
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label className={styles.label}>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name" className={styles.label}>
        Name *
      </label>
      <input
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
        className={styles.input_text}
      />
      <label htmlFor="company" className={styles.label}>
        Company *
      </label>
      <input
        id="company"
        name="company"
        required
        type="text"
        className={styles.input_text}
      />
      <label htmlFor="phone" className={styles.label}>
        Phone Number *
      </label>
      <input
        id="phone"
        name="phone"
        required
        type="text"
        className={styles.input_text}
      />
      <label htmlFor="email" className={styles.label}>
        E-mail Address *
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className={styles.input_email}
      />
      <label htmlFor="message" className={styles.label}>
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        required
        className={styles.textarea}
      />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );

  return (
    <Layout title="Contact us - Jude's Blawg">
      <div className={styles.container}>
        <h1>Contact Us</h1>

        <main>{formVisible ? ContactForm : ConfirmationMessage}</main>
        {/* <footer>NextJS + Netlify Forms Example by Monica Powell</footer> */}
      </div>
    </Layout>
  );
};

export default ContactPage;
