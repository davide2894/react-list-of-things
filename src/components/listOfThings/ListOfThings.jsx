import './ListOfThings.scss';
import { useState } from 'react';
import Thing from '../thing/Thing';

export default function ListOfThings() {
    const [count, setCount] = useState(0);
    const [thingsComponentsArray, setThingsComponentsArray] = useState([]);
        
    function addItem() {
        setCount(prevState => prevState + 1);
        setThingsComponentsArray(
            prevThingsComponentsArray =>
            [
                ...prevThingsComponentsArray,
                <Thing key={count} thing={`Thing ${count}`}/> 
            ]
        );
    }
    
    return(
        <div className='listOfThings'>
            <button className='listOfThings__button' onClick={addItem}>ADD ITEM</button>
            {thingsComponentsArray}
        </div>
    )
}