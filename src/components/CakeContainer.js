import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
    const [number, setNumber] = useState(1);
    return (
        <>
            <h2>Number of cackes - {props.numOfCakes}</h2>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy Cake {number}</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cakes.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
