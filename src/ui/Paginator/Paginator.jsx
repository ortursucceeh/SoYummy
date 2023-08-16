import { useSearchParams } from 'react-router-dom';
import PageButton from './PageButton/PageButton';
import styles from './Paginator.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Paginator({ pages, prevData }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get('page') || 1;

  const pagesArray = Array(pages)
    .fill()
    .map((_, indx) => indx + 1);

  const prevPage = () => {
    setSearchParams({ page: page - 1 });
  };

  const nextPage = () => {
    setSearchParams({ page: page + 1 });
  };

  if (pages <= 1) return;
  return (
    <div className={styles.paginator}>
      <button className={styles.arrow} disabled={page === 1} onClick={prevPage}>
        <FiChevronLeft />
      </button>
      <ul className={styles.pages}>
        {pagesArray.map(pg => (
          <PageButton
            key={pg}
            page={pg}
            onClick={() => setSearchParams({ page: pg })}
            isActive={pg === page}
          />
        ))}
      </ul>
      <button
        className={styles.arrow}
        disabled={prevData || page === pagesArray.at(-1)}
        onClick={nextPage}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Paginator;
