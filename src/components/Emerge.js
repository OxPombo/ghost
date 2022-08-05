import { useState } from 'react'
import Drowned from './Drowned'

function Emerge (){

    const [emergeDrowned, setEmergeDrowned] = useState(false)
    
    function emergeRescuedFile (){
        emergeRescuedFile (setEmergeDrowned, emergeDrowned)
        
    }

    function emergirTesouro () {
        emergeRescuedFile (true)
    }
    return(
        <>
            <div>
                <h1> Deeper (Renderização condicional) </h1>

                <button 
                type="submit" 
                onClick={emergeRescuedFile}> Salve o afogado!!!
                </button>

            </div>
            {emergeRescuedFile && (
                <div>
                 <button onClick={emergirTesouro}>
                    Subir
                 </button>
                </div>
            )
            }
        </>
    )
}

export default Emerge