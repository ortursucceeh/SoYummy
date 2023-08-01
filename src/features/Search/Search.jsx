import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import styles from './Search.module.scss';
import { useState } from 'react';

function Search({ btnColor }) {
  const [input, setInput] = useState();

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        className={styles.input}
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <Link to="/search">
        <Button type="curv" color={btnColor}>
          Search
        </Button>
      </Link>
    </div>
  );
}

export default Search;
