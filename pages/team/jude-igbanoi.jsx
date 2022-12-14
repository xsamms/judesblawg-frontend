import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function judeIgbanoi() {
  return (
    <Layout title="Jude Igbanoi - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Jude Igbanoi</h2>
        <div className={styles.jude}>
          <Image src="/jude.png" fill />
        </div>
      </div>
    </Layout>
  );
}
