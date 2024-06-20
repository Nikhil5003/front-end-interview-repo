import React from 'react'

function useStopWatch() {
    const [time,setTime] = React.useState(0)
    const [isTimerRunning, setTimerRunning] = React.useState(false)
    React.useEffect(()=>{
        let intervalId = undefined
      if(isTimerRunning){
        intervalId = setInterval(()=>{
            setTime(prev => prev  + 1)
        },10)
      }
      else {
          clearInterval(intervalId)
      }

      return ()=> clearInterval(intervalId)
    },[isTimerRunning])


    const startTimer = () =>{
        setTimerRunning(prev => !prev)
    }
    const resetTimer = () =>{
        setTimerRunning(false)
        setTime(0)
    }
    const milliSeconds = Math.floor(time%60)
    const seconds = Math.floor((time/60)%60)
    const minutes = Math.floor(time/(60*60))%60

  return {
    milliSeconds,seconds,minutes,startTimer, resetTimer,isTimerRunning
  }

  
}

export default useStopWatch