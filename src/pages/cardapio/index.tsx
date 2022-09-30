import styles from './Cardapio.module.scss';
import { ReactComponent as Logo} from 'assets/logo.svg' /* Gera o svg no build*/

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />    
            </nav>
        </main>
    );
}