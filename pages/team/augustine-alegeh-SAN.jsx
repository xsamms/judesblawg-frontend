import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function augustineAlegehSan() {
  return (
    <Layout title="Augustine Alegeh SAN - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Augustine Alegeh SAN - Chairman</h2>
        <div className={styles.augustine}>
          <Image src="/Augustine-Alegeh-SAN.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
