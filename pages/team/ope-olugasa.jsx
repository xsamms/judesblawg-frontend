import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function opeOlugasa() {
  return (
    <Layout title="Ope Olugasa - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Ope Olugasa</h2>
        <div className={styles.ope}>
          <Image src="/Mr.-Ope-Olugasa.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
