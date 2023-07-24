import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import useModal from '../../hooks/useModal'
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
    const { toogleModal } = useModal();
    const { currentUser, logout } = useAuth()

    return (
        <header className={`py-3 ${styles.header}`}>
            <h1>Bebidas lo de Mao</h1>
            {
                currentUser && (
                    <nav>
                        <p>{currentUser.name}</p>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} className={styles.cartShop} onClick={toogleModal} />
                            <button onClick={logout}>Cerrar sesion</button>
                        </div>
                    </nav>
                )
            }
        </header>
    )
}