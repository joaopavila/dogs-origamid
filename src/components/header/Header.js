import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome || 'Joao'}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
