import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Home = () => {
  return (
    
      <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <RevealOnScroll>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right'>Hi Iam Aparna Babu</h1>
            {/*md:text-7xl: On medium screens and above, text is even bigger. 
            bg-gradient-to-r:Sets a background gradient that goes from left to right (horizontal direction).
            from-blue-500:The gradient starts with a blue color.
            to-purple-600:The gradient ends with a purple color.
            bg-clip-text:This tells the browser to clip the background to the shape of the text.*/}
            <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>I'm a Full Stack Developer skilled in the MERN stack with a strong foundation in Python, HTML, CSS, JavaScript, and Bootstrap. I enjoy building responsive, user-friendly 
              web applications with clean code and intuitive design, working across both frontend and backend.</p>
                 {/*mx-auto	↔️ Sets horizontal margins to auto, which centers the block horizontally */}

                 <div className='flex  justify-center space-x-4'>
                    <a href ='#projects' className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>View Projects</a>
                    {/*hover:-translate-y-0.5:On hover, moves the element slightly up (like a press/lift animation)
                    -translate-y → Moves Up
                     y = vertical axis
                    - = negative direction, so it moves up

                    translate-y (positive) → Moves Down
                    No - in front = positive value
                    So it would move down
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]: On hover, applies a custom glow-like shadow using Tailwind's arbitrary shadow value */}
                   
                   <a href ='#contact' className=' border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
                   transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
                    Contact Me</a>

                    {/*border-blue-500/50: Sets the border color to a semi-transparent blue (50% opacity of blue-500) 
                    0_0_15px: These are the horizontal, vertical offsets, and blur radius of the shadow.:
                    
                              0 (horizontal offset): The shadow doesn't move to the left or right — it stays aligned with the element horizontally.
                              This controls how much the shadow moves to the left or right of the element.

                              0 (vertical offset): The shadow doesn't move up or down — it stays aligned with the element vertically.
                              This controls how much the shadow moves up or down

                              15px (blur radius): The shadow will have a blurred effect, and the blur will extend up to 15px from the edge of the element.

                              rgba(59,130,246,0.2): This defines the color of the shadow using RGBA values:
                              rgba stands for Red, Green, Blue, Alpha (transparency).

                              59, 130, 246: These are the RGB values for a blue color (specifically, a shade of blue close to rgb(59, 130, 246)).

                              0.2: This is the alpha value (opacity), which is set to 20% opacity (semi-transparent).*/}
                 </div>
        </div>
        </RevealOnScroll>
      </section>
    
  )
}

export default Home
