import React, { useState } from 'react'
import './CartItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCartAction, adjustQuantityAction } from '../../React-Redux/Action/CartAction';

const CartItem = ({ cartitem, key }) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState(cartitem.quantity);

    const deletebtn = (id) => {
        dispatch(removeFromCartAction(id));
    }

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustQuantityAction(cartitem.id, e.target.value));
    }

    const selectedSize = cartitem.size.find(sizeOption => sizeOption.items.some(sizeItem => sizeItem.selected));
    const selectedToppings = cartitem.toppings.flatMap(toppingOption => toppingOption.items.filter(toppingItem => toppingItem.selected));


    return (
        <>
            <div className='cartItem'>
                <img
                    className='cartItem__image'
                    src={cartitem.img_url}
                    alt={cartitem.name}
                />
                <div className='cartItem__details'>
                    <p className='details_title'>{cartitem.name}</p>
                    <p className='details__desc'>{cartitem.description}</p>
                    <p className='details__price'>Price: ₹ {cartitem.price}</p>
                    <p className='details__tag'>{cartitem.isVeg ? "Veg" : "Non-Veg"}</p>
                    <p className='details__selectedSize'>Selected size: {selectedSize}</p>
                    <p className='details__selectedToppings'>Selected toppings: {selectedToppings.length > 0 ? selectedToppings.map(topping => topping.name).join(", ") : "None"}</p>

                    {/* show the selected size */}
                    {selectedSize &&
                        <div className='cartItem__size'>
                            <label>Size</label>
                            <div>
                                <input type="radio" name="size" value={selectedSize.items[0].size} checked disabled />
                                <label>{selectedSize.items[0].size}</label>
                            </div>
                        </div>
                    }

                    {/* show the selected topping */}
                    {selectedToppings.length > 0 &&
                        <div className='cartItem__toppings'>
                            <label>Toppings</label>
                            <ul>
                                {selectedToppings.map(topping => (
                                    <li key={topping.id}>{topping.name}</li>
                                ))}
                            </ul>
                        </div>
                    }

                </div>

                <div className='cartItem__actions'>
                    <div className='cartItem__qty'>
                        <label htmlFor="qty">Quantity</label>
                        <input
                            min="1"
                            type="number"
                            id="qty"
                            name="qty"
                            value={input}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <button className='actions__deleteItemBtn' onClick={() => deletebtn(cartitem.id)}>
                        <DeleteIcon fontSize='large' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartItem
