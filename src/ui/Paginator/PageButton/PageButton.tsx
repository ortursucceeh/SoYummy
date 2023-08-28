import styles from './PageButton.module.scss';

interface PageButtonProps {
  page: number | string;
  onClick: () => void;
  isActive: boolean;
}

const PageButton: React.FC<PageButtonProps> = ({ page, onClick, isActive }) => {
  return (
    <li className={`${styles.btn} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {page}
    </li>
  );
};

export default PageButton;
