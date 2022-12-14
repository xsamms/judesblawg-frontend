import { useState } from "react";
import Layout from "@components/Layout";
import { API_URI } from "../config";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import styles from "@styles/Blog.module.scss";
import FeaturedPost from "@components/FeaturedPost";
import Pagination from "@components/Pagination";
import { paginate } from "../utils/paginate";

export default function Blog({ posts, category, featured }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(posts.data, currentPage, pageSize);

  return (
    <Layout title="Search result">
      <div className={styles.container}>
        <div className={styles.main}>
          <h2>All blog post </h2>
          {paginatePosts.map((arch) => {
            return (
              <div key={arch.id} className={styles.searchres}>
                <div className={styles.blog_img}>
                  <Image
                    src={arch.attributes.featured_image.data.attributes.url}
                    alt={arch.attributes.featured_image.data.attributes.name}
                    fill
                  />
                </div>
                <div className={styles.search_content}>
                  <div className={styles.blog_date}>
                    {moment(arch.attributes.date).format("MMM DD YYYY")}
                  </div>
                  <h2>{arch.attributes.title}</h2>
                  <ReactMarkdown>
                    {arch.attributes.content.slice(0, 350)}
                  </ReactMarkdown>
                  <Link href={arch.attributes.slug}>
                    <span className={styles.more}>Read more &rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
          <Pagination
            items={posts.data.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
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
    </Layout>
  );
}

// export async function getServerSideProps({ query: { term } }) {
//   console.log(term);
//   const res = await fetch(
//     `${API_URI}/api/posts?filters[title][$contains]=${term}&sort=date:DESC&populate=*`
//   );
//   const search = await res.json();

//   return {
//     props: {
//       search,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URI}/api/posts?sort=date:DESC&populate=*`);
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
