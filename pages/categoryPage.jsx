import Layout from "@components/Layout";
import Link from "next/link";
import Image from "next/image";
import styles from "@styles/Home.module.scss";
import { API_URI } from "../config";
import BlogCard from "@components/BlogCard";
import FeaturedPost from "@components/FeaturedPost";

export default function categoryPage({ cate, categories, featured }) {
  return (
    <Layout>
      <main className={styles.container}>
        <h2>Category: </h2>
        <div className={styles.content}>
          <div className={styles.main_content}>
            {cate.data.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>
          <div className={styles.side_content}>
            <div className={styles.side_featured}>
              <h2>Featured Post</h2>
              {featured.data.map((feat) => {
                return <FeaturedPost key={feat.id} feat={feat} />;
              })}
            </div>
            <div className={styles.side_category}>
              <h2>Categories</h2>
              <ul>
                {categories.data.map((cat) => {
                  return (
                    <li key={cat.id}>
                      <Link
                        href={`/categoryPage?category=${cat.attributes.slug}`}
                      >
                        {cat.attributes.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.side_ads}>
              <h2>Place Ads Here</h2>
              <Image src="/news-blog.jpg" width={250} height={250} alt="" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { category } }) {
  const res = await fetch(
    `${API_URI}/api/posts?filters[category][slug][$contains]=${category}&sort=date:DESC&populate=*`
  );
  const cate = await res.json();

  const cat = await fetch(`${API_URI}/api/categories`);
  const categories = await cat.json();

  const feat = await fetch(
    `${API_URI}/api/posts?filters[featured_post][$eq]=true&sort=date:DESC&pagination[limit]=10&populate=*`
  );
  const featured = await feat.json();

  return {
    props: { cate, categories, featured },
  };
}
