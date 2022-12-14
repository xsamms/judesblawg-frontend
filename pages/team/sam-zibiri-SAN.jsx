import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function samZibiriSAN() {
  return (
    <Layout title="Sam Zibiri SAN - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Sam Zibiri SAN</h2>
        <div className={styles.sam}>
          <Image src="/Sam-Ziibiri-SAN.jpeg" fill />
        </div>
      </div>
    </Layout>
  );
}
