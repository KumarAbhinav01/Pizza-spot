import React, { useState } from 'react';
import './SingleItem.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../../React-Redux/Action/CartAction';

const SingleItem = () => {
  const cart = useSelector((state) => state.cart);
  const { singleItem } = cart;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addtocartbtn = (id) => {
    const toppings = singleItem.toppings.map((option) => ({
      title: option.title,
      items: option.items.filter((item) => selectedToppings.includes(item.name)),
    }));

    localStorage.setItem('pizzaToppings', JSON.stringify(selectedToppings));

    dispatch(
      addToCartAction(id, selectedSize, selectedToppings)
    );
    navigate('/cart');
  };

  const backMainPage = () => {
    navigate('/');
  };

  return (
    <div className='contaion'>
      <CloseIcon fontSize='large' className='arrow_icon' onClick={backMainPage} />
      <div className='singleItem'>
        <img className='singleItem__image' src={singleItem.img_url} alt={singleItem.name} />
        <div className='singleItem__details'>
          <p className='details__title'>{singleItem.name}</p>
          <p className='details__description'>{singleItem.description} </p>
          <p className='details__price'>Price: ₹ {singleItem.price}</p>
          <p className='details__tag'>{singleItem.isVeg ? 'Veg' : 'Non-Veg'}</p>

          <div className='details__size'>
            {singleItem.size.map((option, i) => (
              <div key={`size-option-${i}`}>
                <p>{option.title}</p>
                {option.items.map((item, j) => (
                  <label key={`size-option-${i}-item-${j}`}>
                    <input
                      type={option.isRadio ? 'radio' : 'checkbox'}
                      name='size'
                      value={item.size}
                      checked={selectedSize === item.size}
                      onChange={() => setSelectedSize(item.size)}
                    />
                    {item.size}
                  </label>
                ))}
              </div>
            ))}
          </div>

          <div className='details__toppings'>
            {singleItem.toppings.map((option, i) => (
              <div key={`topping-option-${i}`}>
                <p>{option.title}</p>
                {option.items.map((item, j) => (
                  <label key={`topping-option-${i}-item-${j}`}>
                    <input
                      type={option.isRadio ? 'radio' : 'checkbox'}
                      name={option.title}
                      value={item.name}
                      checked={selectedToppings.includes(item.name)}
                      onChange={(e) => {
                        const selected = [...selectedToppings];
                        if (e.target.checked) {
                          selected.push(e.target.value);
                        } else {
                          const index = selected.indexOf(e.target.value);
                          selected.splice(index, 1);
                        }
                        setSelectedToppings(selected);
                      }}
                    />
                    {item.name}
                  </label>
                ))}
              </div>
            ))}
          </div>

          <button className='details__addBtn' onClick={() => addtocartbtn(singleItem.id)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;