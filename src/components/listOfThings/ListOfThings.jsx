import './ListOfThings.scss';
import { useState } from 'react';
import Thing from '../thing/Thing';

export default function ListOfThings() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
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