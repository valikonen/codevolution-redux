import React from 'react';
import {connect} from 'react-redux';
import { buyCake, buyIcecream } from '../redux';


const ItemContainer = (props) => {

    return (
        <>
            <p>Item - {props.item}</p>
            <button onClick={props.buyItem}>Buy Item</button>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cakes.numOfCakes : state.icecreams.numOfIcecreams;

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream());

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
