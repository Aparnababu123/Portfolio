import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {
  const frontendskills=['React','TailwindCSS','HTML','Bootstrap','CSS','Javascript']
  const backendskills=["Node.js",'MongoDB','Express.js']
  const programminglanguages=['Python']
  return (
   
      <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            About Me
          </h2>

          <div className=' rounded-xl mt-1 p-8 border-white/10 border hover:-translate-y-1 transition-all'>
          {/*hover:-translate-y-1:On hover, it moves the element upward slightly (translate on the Y-axis by -0.25rem or -4px).
                   Gives a subtle hover "lift" animation.
             border:Adds a default width of 1px to the border.
                    Without this, you won’t see a border at all, even if you set a color.
            border-white/10:Only sets the color of the border to white with 10% opacity.
                            It does NOT set a border width on its own.  */}
            <p className='text-gray-300 mb-6'>Pssionate developer with expertise in building scalable web 
              applications and creating innovative solutions</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1'>
              {/*grid-cols-1:On small screens and up (mobile-first), the grid will have 1 column.
                            So, items will stack vertically (one below the other).
                md:grid-cols-2:On medium screens and larger (≥768px), the grid will switch to 2 columns.
                            This makes the layout responsive — items will be side by side on larger screens 
                            and stacked on smaller screens. */}
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendskills.map((tech,key)=>{
                    return(
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>{tech}</span>
                  )})}
                  {/*flex:places  the child items in a row even if they overfloe
                     flex-wrap:allows the items to wrap to the next line if there’s not enough space. */}
                
                </div>

              </div>

              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {backendskills.map((tech,key)=>{
                    return(
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>{tech}</span>
                  )})}
                  {/*flex:places  the child items in a row even if they overfloe
                     flex-wrap:allows the items to wrap to the next line if there’s not enough space. */}
                </div>

              </div>

              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Programming</h3>
                <div className='flex flex-wrap gap-2'>
                  {programminglanguages.map((tech,key)=>{
                    return(
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>{tech}</span>
                  )})}
                  {/*flex:places  the child items in a row even if they overfloe
                     flex-wrap:allows the items to wrap to the next line if there’s not enough space. */}
                
                </div>

              </div>

            </div>

          </div>




          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
            <h3 className=' text-xl font-bold mb-4'>📜Education</h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
              {/*list-inside:Places the bullets inside the list item's content area.
                              Without this, bullets are usually placed outside the text block. */}
              <li><strong>B.Tech in Computer Science</strong> Rajadhani Institute Of Engineering and Technology(2020-2024)</li>
              
            </ul>
            </div>

            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
            <h3 className=' text-xl font-bold mb-4'>Work Experience</h3>

            <div className='space-y-4 text-gray-300'>
              <div>
                <h4 className='font-semibold'>MERN stack Intern at MASHUPSTACK(July 2024 – Jan 2025)</h4>
                <p>
                Built projects using MongoDB, Express.js, React.js, and Node.js.</p>
              </div>

              <div>
                <h4 className='font-semibold'>Machine Learning and IoT Intern at CDAC(May 2023-May 2023)</h4>
                <p>Explored basic concepts in Machine Learning and IoT through hands-on training.</p>
              </div>
            </div>

            </div>
          </div>

           


        </div>
        </RevealOnScroll>
      </section>
    
  )
}

export default About
