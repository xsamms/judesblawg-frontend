import Layout from "@components/Layout";
import { API_URI } from "../config";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "@styles/Search.module.scss";

export default function searchPage({ search }) {
  return (
    <Layout title="Search result">
      <div className={styles.container}>
        <h2>Search result: </h2>
        {search.data.map((arch) => {
          return (
            <div key={arch.id} className={styles.searchres}>
              <div className={styles.search_img}>
                <Image
                  src={
                    arch.attributes.featured_image.data.attributes.formats
                      .thumbnail.url
                  }
                  alt={arch.attributes.featured_image.data.attributes.name}
                  fill
                />
              </div>
              <div className={styles.search_content}>
                <h2>{arch.attributes.title}</h2>
                <ReactMarkdown>
                  {arch.attributes.content.slice(0, 500)}
                </ReactMarkdown>
                <div className={styles.more}>
                  <Link href={arch.attributes.slug}>Read more</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  console.log(term);
  const res = await fetch(
    `${API_URI}/api/posts?filters[title][$contains]=${term}&sort=date:DESC&populate=*`
  );
  const search = await res.json();

  return {
    props: {
      search,
    },
  };
}
