import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Editorial.module.scss";

export default function profChidiOdinkalu() {
  return (
    <Layout title="Prof Chidi Odinkalu - Jude's Blawg">
      <div style={{ padding: "5rem", textAlign: "center" }}>
        <h2>Prof Chidi Odinkalu</h2>
        <div className={styles.chidi}>
          <Image src="/Prof-Chidi-Odinkalu.jpeg" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
