import React from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const EggContainer = (props) => {
    return (
        <div>
            <h2>Number of Eggs - {props.eggNumber}</h2>
            <button onClick={props.eggBuy}>Buy Egg</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        eggNumber: state.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        eggBuy: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)