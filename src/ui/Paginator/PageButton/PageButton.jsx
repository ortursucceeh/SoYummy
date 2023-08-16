import styles from './PageButton.module.scss';

function PageButton({ page, onClick, isActive }) {
  return (
    <li className={`${styles.btn} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {page}
    </li>
  );
}

export default PageButton;
