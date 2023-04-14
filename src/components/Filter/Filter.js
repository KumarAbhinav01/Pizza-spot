import React from 'react'
import './Filter.css';

const Filter = ({ filterItem, uniqueList, setPizzaData, PizzaApi }) => {

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {uniqueList?.map((data) => {
                        return (
                            <button className='btn-group__item'
                                onClick={() => filterItem(data)}>
                                {data ? "Veg" : "Non-Veg"}
                            </button>
                        )
                    })}
                    <button className='btn-group__item'
                        onClick={() => setPizzaData(PizzaApi)}>
                        All
                    </button>

                </div>
            </nav>
        </>
    )
}

export default Filter