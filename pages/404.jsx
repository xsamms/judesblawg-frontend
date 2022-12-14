import Layout from "../components/Layout";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "../styles/404.module.scss";

export default function notFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, this page does not exist</h4>
        <Link href="/">Go back Home</Link>
      </div>
    </Layout>
  );
}
