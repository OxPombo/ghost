import { useState } from 'react'
import Drowned from './Drowned'

function Emerge (){

    const [emergeDrowned, setEmergeDrowned] = useState(false)
    
    function emergirTesouro () {
        setEmergeDrowned (!emergeDrowned)
        console.log('teste')
    }
    return(
           
           <div>
                <h1> Deeper (Renderização condicional) </h1>
                <button onClick={emergirTesouro} > Emergir </button>
               { emergeDrowned &&  <Drowned /> } 
            </div>


    )
}

export default Emerge