import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cakes.numOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake(2))}>Buy cake</button>
        </div>
    );
}

export default HooksCakeContainer;
