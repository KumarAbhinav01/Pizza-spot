import React, { useState } from 'react'
import './Pizza.css';
import PizzaApi from '../../PizzaApi';
import CardComponent from '../CardComponent/CardComponent';
import Navbar from '../Filter/Filter';
import { useSelector } from 'react-redux';

const uniqueData = [...new Set(PizzaApi.map((elem) => {
    return elem.isVeg;
})),];

const Pizza = () => {

    const cart = useSelector((state) => state.cart);
    const { products } = cart;

    const [pizzaData, setPizzaData] = useState(products);
    const [uniqueList, setUniqueList] = useState(uniqueData);

    const filterItem = (isVeg) => {
        const updatedData = PizzaApi.filter((data) => {
            return data.isVeg === isVeg;
        })
        setPizzaData(updatedData);
    }

    return (
        <div className='pizzalist'> 
            <Navbar filterItem={filterItem} uniqueList={uniqueList} setPizzaData={setPizzaData} PizzaApi={PizzaApi} />
            <CardComponent pizzaData={pizzaData} />
        </div>
    )
}

export default Pizza