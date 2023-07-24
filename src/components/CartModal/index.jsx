import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './CardModal.module.css'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import useModal from '../../hooks/useModal';
import { useCart } from '../../hooks/useCart';
import { CardItems } from './components/CardItems';


function CartModal() {
    const { isOpen, toogleModal } = useModal();
    const { cart, clearCart, sendOrder, orderTotal } = useCart();
    
    let subtotal;
    cart.cartItems.forEach(item => {
        subtotal = subtotal + (item.price * item.quantity)
    })
    console.log(subtotal, cart.cartItems )

    if (isOpen) {
        return (
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <FontAwesomeIcon icon={faXmarkCircle} className={style.icon} onClick={toogleModal} />
                    <h2>Mi carrito</h2>
                    <section className={style.modalBody}>
                        <div className={style.modalDrinkListContainer}>
                            { cart.cartItems.length === 0 && (
                                <h4>No hay productos en el carrito</h4>
                            )}
                            {
                                cart.cartItems.map((drink) => (
                                    <CardItems
                                        key={drink.idDrink} 
                                        drink={drink}
                                    />
                                ))
                            }
                        </div>
                        <aside>
                            <p>Total: $ { orderTotal }</p>
                            <div className={style.btnContainer}>
                                <button className={style.clear} onClick={clearCart}>Limpiar</button>
                                <button className={style.confirm} onClick={sendOrder}>Confirmar</button>
                            </div>
                        </aside>
                    </section>
                </div>
            </div>
        )
    }
};

export default CartModal;