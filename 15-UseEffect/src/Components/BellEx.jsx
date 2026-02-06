import React, { useEffect, useState } from 'react'

const BellEx = () => {

    const [Bell, setBell] = useState(false)

    useEffect(()=>{
       const audio = document.getElementById('btn')

        if(Bell)
        {
            audio.play()
        }
        else
        {
            audio.pause()
        }
    },[Bell])

  return (
    <div>
        <audio id='btn' src="/Moneyheist Ringtone  Bella Ciao Ringtone  Download link in description.mp3" controls></audio>
        <button onClick={()=>{
            setBell(!Bell)
            
        }}>{Bell ? "pause" : "play" } </button>
        
    </div>
  )
}

export default BellEx