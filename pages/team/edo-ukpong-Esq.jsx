import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function edoUkpongEsq() {
  return (
    <Layout title="Edo Ukpong Esq. - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Edo Ukpong Esq.</h2>
        <div className={styles.edo}>
          <Image src="/Mr.-Edo-Ukpong-Esq.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
