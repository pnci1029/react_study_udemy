import {createContext, useReducer, useState} from "react";
import {DUMMY_PRODUCTS} from "../dummy-products.js";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {
    },
    updateItemQuantity: () => {
    },

});

function shoppingCartReducer(state, action) {
    const updatedItems = [...prevShoppingCart.items];

    const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
    } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.id);
        updatedItems.push({
            id: action.id,
            name: product.title,
            price: product.price,
            quantity: 1,
        });
    }

    return {
        ...state,
        items: updatedItems,
    };

    return state;
}

export default function CartContextProvider({children}) {
    const [shoppingCartState, dispatch] = useReducer(
        shoppingCartReducer,
        {
            items: [],
        }
    );

    const [shoppingCart, setShoppingCart] = useState({
            items: [],
        }
    );

    function handleAddItemToCart(id) {
        dispatch({
            type: 'ADD_ITEM',
            payload: id
        });


    }

    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    }

    return <CartContextProvider value={ctxValue}>
        {children}
    </CartContextProvider>

};