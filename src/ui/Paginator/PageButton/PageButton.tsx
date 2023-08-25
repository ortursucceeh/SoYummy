import styles from './PageButton.module.scss';

interface PageButtonProps {
  page: number;
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
