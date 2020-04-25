import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from '../redux'
import store from '../redux/store';

const HooksIcecreamContainer = () => {

    const cakes = store.getState().cakes.numOfCakes;
    if(cakes === 7) {
        console.log('cakes: ', cakes)
        alert('stop');
    }

    const numOfIcecreams = useSelector(state => state.icecreams.numOfIcecreams);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
        </div>
    );
}

export default HooksIcecreamContainer;
