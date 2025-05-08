import React, { useEffect, useRef } from 'react'

const RevealOnScroll = ({children}) => {
    const ref=useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                ref.current.classList.add("visible")

            }
            },{threshold:0.2, rootMargin:'0px 0px 50px 0px'})
            if (ref.current) observer.observe(ref.current)
                return ()=>observer.disconnect()
    })
  return (
    
    <div ref={ref} className='reveal'>
      {children}
    </div>
  )
}

export default RevealOnScroll

/*You create a box on screen (<div className='reveal'>)

<div ref={ref} className='reveal'>
  {children}
</div>
💡 ref is a way to grab that box so JavaScript can do something with it.

2️⃣ useEffect runs when the page loads

useEffect(() => {
It says:

Hey! When this component shows up, run the code inside me!

3️⃣ You make a camera (observer)

const observer = new IntersectionObserver(([entry]) => {
This camera is watching your box (div).
It sees: "Is this box visible on the screen?"

4️⃣ Camera checks visibility

if (entry.isIntersecting) {
   ref.current.classList.add("visible");
}
This says:

If the box is at least 20% on screen, add the class "visible" to it (which makes it fade in).

5️⃣ Tell the camera what to watch

if (ref.current) observer.observe(ref.current);
This tells the camera:

"Hey, keep your eyes on this specific box."

6️⃣ If the component is removed later, stop the camera

return () => observer.disconnect();
This says:

"If the box disappears, turn off the camera to save memory."

 */