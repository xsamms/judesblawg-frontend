import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function chiefLayiBabatundeSAN() {
  return (
    <Layout title="Chief Layi Babatunde SAN - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Chief Layi Babatunde SAN</h2>
        <div className={styles.layi}>
          <Image src="/Chief-Layi-Babatunde-SAN.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
