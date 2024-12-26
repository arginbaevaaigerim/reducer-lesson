import { useReducer, useState } from "react"


const initialState = {
    count: 0
}

const Counter = () => {

    const reducer = (state , action) => {
       if(action.type === "PLUS"){
        return {
            count: state.count + 1
        }
       }
       if(action.type === "MINUS"){
        return {
            count: state.count - 1
        }
       }
    }

    const [count , dispatchCount] = useReducer(reducer , initialState)

    const plus = () => {
        dispatchCount({type: "PLUS"})
    }

    const minus = () => {
        dispatchCount({type: "MINUS"})
    }

    return (
        <div>
            <button onClick={plus} >+</button>
            <h2>{count.count}</h2>
            <button onClick={minus} >-</button>
        </div>
    )
}

export default Counter