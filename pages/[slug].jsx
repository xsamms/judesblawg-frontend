import Layout from "../components/Layout";
import { API_URI } from "../config";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Singleblog.module.scss";
import ReactMarkdown from "react-markdown";
import FeaturedPost from "../components/FeaturedPost";
import DisqusThread from "../components/DisqusThread";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

export default function SingleBlog({ blog, category, featured }) {
  const showDisqusComment = () => {
    return (
      <>
        <DisqusThread
          id={blog.data[0].id}
          path={blog.data[0].attributes.slug}
          title={blog.data[0].attributes.title}
        />
      </>
    );
  };

  return (
    <Layout title={`${blog.data[0].attributes.title} - Jude's Blawg`}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>{blog.data[0].attributes.title}</h1>
          <div className={styles.featured_img}>
            <Image
              src={blog.data[0].attributes.featured_image.data.attributes.url}
              alt={blog.data[0].attributes.featured_image.data.attributes.name}
              fill
            />
          </div>
          <ReactMarkdown>{blog.data[0].attributes.content}</ReactMarkdown>
          <div>
            <FacebookShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <PinterestShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
            <RedditShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <WhatsappShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url={`${API_URI}/${blog.data[0].attributes.slug}`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          {showDisqusComment()}
        </div>
        <div className={styles.sidebar}>
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
            <div className={styles.ad_img}>
              <Image src="/news-blog.jpg" fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URI}/api/posts?populate=*`);
  const posts = await res.json();

  const paths = posts.data.map((blgs) => ({
    params: {
      slug: blgs.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${API_URI}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  const blog = await res.json();
  console.log(blog);

  const cat = await fetch(`${API_URI}/api/categories`);
  const category = await cat.json();

  const feat = await fetch(
    `${API_URI}/api/posts?filters[featured_post][$eq]=true&sort=date:DESC&pagination[limit]=10&populate=*`
  );
  const featured = await feat.json();

  return {
    props: {
      blog,
      category,
      featured,
    },
    revalidate: 1,
  };
}
