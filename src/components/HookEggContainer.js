import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions';

const HookEggContainer = () => {
    const eggNumber = useSelector(state => state.egg.numOfEggs);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Hook Eggs - {eggNumber}</h2>
            <button onClick={() => dispatch(buyEgg())}>Buy Egg</button>
        </div>
    )
}

export default HookEggContainer