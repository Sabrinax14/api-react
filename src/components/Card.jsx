import {useEffect, useState} from 'react';
import patternDivider from '../images/pattern-divider-desktop.svg';
import iconDice from '../images/icon-dice.svg';

function Card(){
  const advice = 'https://api.adviceslip.com/advice';

     const [set_id, SetID] = useState(" ")
     const [set_advice, SetAD] = useState(" ")

    useEffect(() => {
        fetch(advice)
        .then(response => response.json())
        .then(advice => {
            SetID({ID : advice.slip.id})
            SetAD({AD : advice.slip.advice})
        })
    }, [set_id, set_advice]
    )

 return (
    <>
     <div className='container'>
        <div className='card'>
            <h6 className='card-id'>Advice  #{set_id.ID}</h6>
            <p className='card-advice'> "{set_advice.AD}"</p>
            <br />
            <img className='divider' src={patternDivider} alt="divider" />
            <button className='dice-button' onClick={() => window.location.reload(false)} >
             <img className='icon-dice' src={iconDice} alt="icon dice" />
            </button>
        </div>
     </div>
    </>

 );

 
};

export default Card;