import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_about}>
          <h3>About Us</h3>
          <p>
            In the fast-changing and dynamic media space, effective reportage
            and in-depth analysis of Bar and Bench needs a purpose-driven medium
            to bridge the present yawning gaps in that genre of the press. Only
            a team of visionary lawyers with exceptional skills and uncommon
            understanding on the judiciary,
          </p>

          <Link href={"/about"} className={styles.link}>
            Read more &rarr;
          </Link>
        </div>
        <div className={styles.footer_company}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_contact}>
          <h3>Connect with us:</h3>
          <p>
            <span className={styles.magrit}>
              <FaLocationArrow />
            </span>
            404, Ikorodu Road, by Ojota bus stop, Ojota – Lagos
          </p>
          <p>
            <span className={styles.magrit}>
              <FaPhoneAlt />
            </span>
            0705-551-1446
          </p>
          <p>
            <span className={styles.magrit}>
              <AiOutlineMail />
            </span>
            judeigbanoi@ judeigbanoi.com
          </p>
          <div className={styles.footer_socials}>
            <Link href={"/about"}>
              <FaFacebookF />
            </Link>
            <Link href={"/about"}>
              <FaInstagram />
            </Link>
            <Link href={"/about"}>
              <FaTwitter />
            </Link>
            <Link href={"/about"}>
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        ©2022 Jude's Blawg. All rights reserved. Developed by{" "}
        <Link
          href="www.datamegathos.com"
          target="_blank"
          className={styles.megathos}
        >
          Data Megathos
        </Link>
      </div>
    </footer>
  );
}
