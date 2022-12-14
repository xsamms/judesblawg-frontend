import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function profGbengaOdutan() {
  return (
    <Layout title="Prof. Gbenga Odutan - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Prof. Gbenga Odutan</h2>
        <div className={styles.gbenga}>
          <Image src="/Prof-Gbenga-Odutan.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
