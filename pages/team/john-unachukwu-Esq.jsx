import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function johnUnachukwuEsq() {
  return (
    <Layout title="John Unachukwu Esq. - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>John Unachukwu Esq.</h2>
        <div className={styles.john}>
          <Image src="/John-Austin-Unachukwu.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
