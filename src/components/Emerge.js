import { useState } from 'react'
import Drowned from './Drowned'

function Emerge (){

    const [emergeDrowned, setEmergeDrowned] = useState(false)
    
    function emergeRescuedFile (){
        setEmergeDrowned (!emergeDrowned)
        console.log('bruh')
    }

    function emergirTesouro () {
        setEmergeDrowned  = useState/* Possível problema aqui */
        console.log('teste')
    }
    return(
        <>
            <div>
                <h1> Deeper (Renderização condicional) </h1>
            </div>

            {emergeRescuedFile && (
                <div>
                 <button onClick={emergirTesouro} >
                    Subir
                 </button>
                </div>
            )
            }
            
            
        </>
    )
}

export default Emerge