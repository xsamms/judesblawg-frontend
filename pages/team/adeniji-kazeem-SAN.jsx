import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function adenijiKazeemSAN() {
  return (
    <Layout title="Adeniji Kazeem SAN - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Adeniji Kazeem SAN</h2>
        <div className={styles.adeniji}>
          <Image src="/Adeniji-Kazeem-SAN.jpeg" fill />
        </div>
      </div>
    </Layout>
  );
}
