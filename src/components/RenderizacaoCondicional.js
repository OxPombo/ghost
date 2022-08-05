import { useState } from 'react'
import Emerge from "./Emerge"

function  RenderizacaoCondicional(){
    const [renderCondicional, setRenderCondicional] = useState(false)
   
    function submergeCondicional () {
        setRenderCondicional(!renderCondicional)
    }
    
    return(
        <div>
            <button onClick={submergeCondicional}> Submergir </button> 
            {renderCondicional && <Emerge /> }
        </div> 
    )
}

export default RenderizacaoCondicional