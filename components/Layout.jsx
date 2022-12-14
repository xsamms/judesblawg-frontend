import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Jude's Blawg | Law and political news in Nigeria ",
  description: "Bringing you upto-date news is law and the political areana",
  keyword:
    "Law news, Nigerian Politics, Nigerian Lawyers, Nigerian News, Lagos politics, Abuja politics",
};
