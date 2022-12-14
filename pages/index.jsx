import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.scss";
import { API_URI } from "../config";
import BlogCard from "../components/BlogCard";
import FeaturedPost from "../components/FeaturedPost";

export default function Home({ posts, category, featured }) {
  return (
    <Layout>
      <Hero />
      <main className={styles.container}>
        <h2>Latest news</h2>
        <div className={styles.content}>
          <div className={styles.main_content}>
            {posts.data.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}

            <div className={styles.allpost}>
              <Link href="/blog">View All Post</Link>
            </div>
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
                {category.data.map((cat) => {
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

export async function getStaticProps() {
  const res = await fetch(
    `${API_URI}/api/posts?sort=date:DESC&pagination[limit]=9&populate=*`
  );
  const posts = await res.json();

  const cat = await fetch(`${API_URI}/api/categories`);
  const category = await cat.json();

  const feat = await fetch(
    `${API_URI}/api/posts?filters[featured_post][$eq]=true&sort=date:DESC&pagination[limit]=10&populate=*`
  );
  const featured = await feat.json();

  return {
    props: { posts, category, featured },
    revalidate: 1,
  };
}
