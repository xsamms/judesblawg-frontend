import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function chiefFerdinandOrbihSAN() {
  return (
    <Layout title="Chief Ferdinand Orbih SAN - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Chief Ferdinand Orbih SAN</h2>
        <div className={styles.ferdinand}>
          <Image src="/Chief-Ferdinand-Orbih-SAN.jpeg" fill />
        </div>
      </div>
    </Layout>
  );
}
