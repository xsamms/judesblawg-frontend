import moment from "moment";
import styles from "../styles/Featured.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost({ feat }) {
  return (
    <Link href={feat.attributes.slug} className={styles.featured_post}>
      <div className={styles.feat_content}>
        <div className={styles.feat_date}>
          {moment(feat.attributes.date).format("MMM DD YYYY")}
        </div>
        <div>{feat.attributes.title}</div>
      </div>
      <Image
        src={
          feat.attributes.featured_image.data.attributes.formats.thumbnail.url
        }
        alt={feat.attributes.featured_image.data.attributes.name}
        className={styles.feat_img}
        width={100}
        height={100}
      />
    </Link>
  );
}
