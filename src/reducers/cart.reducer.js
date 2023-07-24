import { actionTypes } from "../actions/cart.actions";

//Estado inicial del reducer
export const cartInitialState = {
    cartItems: []
}


export function cartReducer(state, /* action */ { type, payload = []}) {


    const { idDrink } = payload;

    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink)

    //Comparo las acciones que recibe el reducer 
    switch (type) {
        case actionTypes.ADD_TO_CART:
            // 1- Saber si el producto agregado esta en el carrito
            if (drinkInCart) {
                // afirmativo -> Incrementar la cantidad +1
                let cartItemUpdated = state.cartItems.map( item => {
                    if(item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })

                return {...state, cartItems: cartItemUpdated}
            } else {
                // negativo -> Agregamos el producto con cantidad = 1
                payload.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            };

        case actionTypes.REMOVE_ONE_FROM_CART:
            //Preguntar si existe el producto
            if(drinkInCart.quantity > 1) {
                //Si la cantidad es > 1 restar 1
                let cartItemUpdated = state.cartItems.map( item => {
                    if(item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
                return {...state, cartItems: cartItemUpdated}
            } else {
                //Si la cantidad es < 1 -> Quitar del carrito
                let cartItemUpdated = state.cartItems.filter(item => item.idDrink != idDrink)
                return {
                    ...state, cartItems: cartItemUpdated
                }
            };

        case actionTypes.REMOVE_ALL_FROM_CART:
            if(drinkInCart) {
                let cartItemsUpdated = state.cartItems.filter(item => item.idDrink != idDrink)
                return {
                    ...state,
                    cartItems: cartItemsUpdated
                };
            }

            return state;

        case actionTypes.CLEAR_CART:
            return {
                state,
                cartItems: []
            };
    }
}