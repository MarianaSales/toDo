import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Foguete e as palavras to do" />
        </header>
    );
}
