import { useReducer } from "react";

const Container = () => {

    const reducer = (state , action) => {
        if(action.type === "red"){
            return state.color = "red"
        }
    }

    const initialState = {
        color: "white"
    }

    const [color , dispatchColor] = useReducer(reducer , initialState)

    const changeColor = () => {
        dispatchColor({type: "red"})
    }


    return (
        <div>
            <hr/>
        <div style={{width: "200px" , border: "2px solid black", height: "200px", margin: "auto" , backgroundColor: color}}>

        </div>
        <button onClick={changeColor} style={{width: "200px", border: "2px solid black", height:"40px", margin:"auto"}}>to red</button>

       

        </div>

        
    )
}


export default Container;