import './ListOfThings.scss';
import { useState } from 'react';

export default function ListOfThings() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
     const thingsArray = ["Thing 1", "Thing 2"]
    
     function addItem() {
        // We'll work on this next
        // const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)
     }
    
    return(
        <div className='listOfThings'>
            <button className='listOfThings__button' onClick={addItem}>ADD ITEM</button>
            {thingsArray}
        </div>
    )
}