import styles from './Header.module.css';

const Header = () => {
    return (

        <header>
            <div className="container">
                <img src='https://via.placeholder.com/150x50' alt="Logo" />

                {/* <nav>
                    <ul className={styles.headerList}>
                        <li className={styles.listItem}>
                            <a className={styles.listLink} href="#">Home</a>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.listLink} href="#">Calculadora IMC</a>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.listLink} href="#">Dietas</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </header>
    )
}

export default Header;