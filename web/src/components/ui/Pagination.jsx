import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({ totalCount, currentPage = 1 }) {
  const postPerPage = 10;
  const totalPages = Math.ceil(totalCount / postPerPage);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  // const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
  // const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;

  const styles = {
    btnDisable:
      'bg-white cursor-not-allowed line-through hover:skew-y-3 pointer-events-none',
    btn:
      'bg-white md:w-6/12 mx-auto py-1 transform -skew-y-3 hover:scale-110 hover:skew-y-3',
    container:
      'grid items-center justify-center max-w-screen-lg grid-cols-3 py-1 mx-auto text-center my-gradient md:w-7/12',
    paragraph:
      'md:w-5/12 py-2 mx-auto transform skew-y-3 bg-white hover:scale-110',
  };

  return (
    <div className={styles.container}>
      <Link
        to={`/blog/${prevPage}`}
        className={
          currentPage <= 1
            ? `${styles.btnDisable} ${styles.btn}`
            : `${styles.btn}`
        }
      >
        ← Prev 10
      </Link>
      <p className={styles.paragraph}>
        Page {currentPage} of {totalPages}
      </p>
      <Link
        to={`/blog/${nextPage}`}
        className={
          currentPage === totalPages
            ? `${styles.btnDisable} ${styles.btn}`
            : `${styles.btn}`
        }
      >
        Next 10 →
      </Link>
    </div>
  );
}
