import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Search.module.scss";
import { BiSearchAlt } from "react-icons/bi";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/searchPage?term=${term}`);
    setTerm("");
  };

  return (
    <div>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className={styles.search_form}
        />
        <BiSearchAlt className={styles.search_icon} />
      </form>
    </div>
  );
}
