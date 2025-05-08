import { useEffect, useState } from "react"

export const LoadingScreen=({onComplete})=>{
    
    
    const[text,setText]=useState()
    const fullText='Designing with purpose, coding with passion'
    useEffect(()=>{
        {/*useEffect always runs at least once when the component mounts — no matter what's in the dependency array. */}
        let index=0
        const interval=setInterval(()=>{
            setText(fullText.substring(0,index))
            index++

            if(index>fullText.length){
                clearInterval(interval)
                setTimeout(()=>{

                    [/* Pause for 1 second after the typing finishes then disappears  */]
                    onComplete()

                },1000)
            }
        },100)
        return()=>clearInterval(interval)
    },[onComplete])
    {/*
    1.Initial Render:
    The LoadingScreen is displayed because isLoaded is false.
    Inside LoadingScreen, the onComplete function is called once the text animation is complete, which then calls setIsLoaded(true).

    2.setIsLoaded(true) is Called:
    React updates the state (isLoaded) to true.
    This triggers a re-render because of the state change.

    3.Re-render:
    During the re-render, the condition !isloaded is now false (because isLoaded is true).
    Since the condition fails (!isloaded), LoadingScreen is no longer rendered. */}
    return(
         <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"></span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
           </div>

        </div>
    )
}