import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function about() {
  return (
    <Layout title="About - Jude's Blawg">
      <h1 className={styles.heading}>About Us</h1>
      <div className={styles.container}>
        <div className={styles.main}>
          <h3>MISSION/VISION</h3>
          <p>
            In the fast-changing and dynamic media space, effective reportage
            and in-depth analysis of Bar and Bench needs a purpose-driven medium
            to bridge the present yawning gaps in that genre of the press. Only
            a team of visionary lawyers with exceptional skills and uncommon
            understanding on the judiciary, legal practice and the Bar can make
            this happen. Led by the Publisher/Editor-In-Chief who has put in
            over two decades in the field as law editor of one of Nigeria’s
            leading newspapers and almost two decades at the Bar, a veteran of
            international law conferences and over two decades covering the
            Nigerian Bar Association, we are ready to positively impact law
            reportage and take it a notch higher. We are not unaware of the
            crowded space, but we intend to come in with fresh insights and
            explore hitherto uncharted areas in law coverage from the privilege
            position of a practicing lawyer and journalist.
          </p>
        </div>
        <div className={styles.side}>
          <Image src="/gavels.png" fill alt="" />
        </div>
      </div>
    </Layout>
  );
}
