import React, { useEffect } from 'react'

const Navbar = ({menuOpen,setMenuOpen}) => {
    
    useEffect(()=>{
      document.body.style.overflow= menuOpen ?"hidden":""
    },[menuOpen])
  return (
    <div>
      <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      {/*z-40:This is the z-index (layering).
              A higher number = shows above other elements. (Helpful when the navbar overlaps content)
        backdrop-blur-lg:Adds a blur effect to whatever is behind the navbar.
                         Looks cool when you scroll — background gets blurred!
        border-white/10:The border is white with 10% opacity — soft and subtle. 
        max-w-5xl:Limits the maximum width of the content to a 5xl container.
                     Keeps things from stretching too wide on large screens.
        mx-auto:Centers the container horizontally (auto left and right margins).
        px-4:Adds horizontal padding (left and right) of 1rem (16px).
                Keeps content away from the edges.
        opacity = 80% visible, 20% transparent*/}
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a href='#' className='font-mono text-xl font-bold text-white'>Software <span className='text-blue-500'>Developer</span></a>
                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={()=>setMenuOpen((prev)=>!prev)}>
                    {/*md:hidden:Hides this div on medium and larger screens (≥768px). This means it only shows on mobile/small screens */}
                    &#9776;

                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    <a href="#" className='text-gray-300 hover:text-white transition-colors'>Home</a>
                    {/*transition-colors	Smoothly animate the color change instead of switching instantly */}
                    <a href="#about" className='text-gray-300 hover:text-white transition-colors'>About</a>

                    <a href="#projects" className='text-gray-300 hover:text-white transition-colors'>Projects</a>

                    <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a>


                </div>

            </div>
        
        
        
        </div>
        
        
        </nav>
    </div>
  )
}

export default Navbar
