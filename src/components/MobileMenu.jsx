import React from 'react'

const MobileMenu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
    transition-all duration-300 ease-in-out
    
    ${menuOpen ? "h-screen opacity-100 pointer-events-auto" :" h-0 opacity-0 pointer-events-none"}`}>
        {/*Animates smoothly when properties like height, opacity, etc., change.
        height and opacity animate because they change gradually. Position, flexbox, and layout properties do not animate  */}

        <button onClick={()=>setMenuOpen(false)} className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
            aria-label='close menu'>&times;</button>
          {/*focus:outline-none	Removes the default browser outline when the button is focused (like tabbing) */}
                    <a href="#" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform-300
                        ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>Home</a>
                    {/*If the translate-y of an element goes from 0 to 5 (moves downward) over 300ms, 
                    it will appear smooth and gradual instead of happening instantly. 
                    If menuOpen is true, the class will be opacity-100 translate-y-0, which means the element will be fully visible and in its original position (not moved).
                    If menuOpen is false, the class will be opacity-0 translate-y-10, which means the element will be hidden and will move down by 2.5rem.*/}
                    <a href="#about"onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform-300
                        ${menuOpen ? "opacity-100 translate-y-0":" opacity-0 translate-y-5"}`}>About</a>

                    <a href="#projects" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform-300
                        ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>Projects</a>

                    <a href="#contact" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform-300
                        ${menuOpen ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>Contact</a>


    </div>
  )
}

export default MobileMenu
