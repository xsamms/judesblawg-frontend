import styles from "../styles/Pagination.module.scss";
import _ from "lodash";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage
                  ? [styles.page_item, styles.active]
                  : styles.page_item
              }
            >
              <a
                onClick={() => onPageChange(page)}
                className={styles.page_link}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
