import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import styles from "../styles/Blogcard.module.scss";

export default function BlogCard({ item }) {
  // let contents = markdownToHtml(item.attributes.content);
  return (
    <Link href={item.attributes.slug} className={styles.card}>
      <div className={styles.card_img}>
        <Image
          src={item.attributes.featured_image.data.attributes.url}
          alt={item.attributes.featured_image.data.attributes.name}
          width={320}
          height={320}
        />
      </div>

      <div className={styles.catdate}>
        <div>{item.attributes.category.data.attributes.name}</div>
        <div>{moment(item.attributes.date).format("MMM DD YYYY")}</div>
      </div>
      <div className={styles.titails}>
        <div className={styles.title}>{item.attributes.title}</div>
        <div className={styles.btn_details}>Details &rarr;</div>
      </div>
    </Link>
  );
}
