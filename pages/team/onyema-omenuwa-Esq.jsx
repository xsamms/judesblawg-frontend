import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function onyemaOmenuwaEsq() {
  return (
    <Layout title="Onyema Omenuwa Esq. - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Onyema Omenuwa Esq.</h2>
        <div className={styles.onyema}>
          <Image src="/Onyema-Omenuwa.jpeg" fill />
        </div>
      </div>
    </Layout>
  );
}
