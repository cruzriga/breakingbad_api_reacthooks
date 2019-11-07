import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
    const [frase,setFrase]= useState({});
    async function requestApi(){
        const r = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        //console.log(resultado);
        setFrase(r.data[0]);
    }
    useEffect(()=>{
        requestApi();
    },[]);

  return (
    <div className="contenedor">
      <Frase frase={frase}/>
      <button onClick={requestApi}> > </button>
    </div>
  )
}

function Frase({frase}) {
    return(
        <div className="frase">
            <h1>{frase.quote}</h1>
            <p>-{frase.author}</p>
        </div>
    )

}
export default App;