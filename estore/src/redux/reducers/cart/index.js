import * as actionTypes from "../../actions/cart/types";

const initialState = {
    item: [],
    itemPriceTotal: 0,
    totalItems: 0,
    totalQuantity: 0
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.addCartItems:
            const existingItemIndex = state.item.findIndex(x => x.Id === action.data.Id);

            if (existingItemIndex !== -1) {
                // Item exists in the cart
                return {
                    ...state,
                    item: state.item.map((item, index) =>
                        index === existingItemIndex
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                                itemtotal: item.price * (item.quantity + 1)
                            }
                            : item
                    ),
                    itemPriceTotal: state.item.reduce((a, b) => a + b.itemtotal || 0, 0),
                    totalItems: state.item.length,
                    totalQuantity: state.item.reduce((a, b) => a + b.quantity || 0, 0)
                };
            } else {
                // Item does not exist in the cart
                const newCartItem = {
                    ...action.data,
                    quantity: 1,
                    itemtotal: action.data.price
                };

                return {
                    ...state,
                    item: [...state.item, newCartItem],
                    itemPriceTotal: state.item.reduce((a, b) => a + b.itemtotal || 0, 0) + newCartItem.itemtotal,
                    totalItems: state.item.length + 1,
                    totalQuantity: state.item.reduce((a, b) => a + b.quantity || 0, 0) + newCartItem.quantity
                };
            }

        default:
            return state;
    }
}
