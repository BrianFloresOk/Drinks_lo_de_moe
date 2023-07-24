import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'
import { useCart } from "../../../../hooks/useCart";
import style from './Card.module.css'

export function CardItems({ drink }) {
    const { addToCart, removeOneFromCart, removeAllFromCart } = useCart();
    return (
        <article className={style.card}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <span>{drink.strDrink}</span>
            <span>$ {drink.price}</span>
            <div className={style.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>-</button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>+</button>
            </div>
            <FontAwesomeIcon icon={faTrash} className={style.icon_trash} onClick={() => removeAllFromCart(drink.idDrink)} />
        </article>
    )
}

CardItems.propTypes = {
    drink: PropTypes.object.isRequired
}