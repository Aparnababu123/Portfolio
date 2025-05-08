import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'


const Project = () => {
 
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          
          <div className='p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>TO-DO LIST</h3>
            <p className='text-gray-400 mb-4'>Developed a responsive To-Do List application using React and
               Tailwind CSS. The app allows users to add, view, and manage daily tasks
               efficiently
            </p>
            <div>
              {["React","TailwindCSS"].map((tech,key)=>{
                return(
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>{tech}</span>
                )
              })}
            </div>
           
            <div className='flex justify-between items-center'>
              <a href="https://github.com/Aparnababu123/Todolist.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>

          </div>



          <div className='p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Password Generator</h3>
            <p className='text-gray-400 mb-4'>Developed an online tool that generates strong,random passwords
based on user-specified criteria such as length, charactertypes
(uppercase, lowercase, numbers, symbols), and other preferences
            </p>
            <div>
              {["HTML","CSS","JS"].map((tech,key)=>{
                return(
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>{tech}</span>
                )
              })}
            </div>
           
            <div className='flex justify-between items-center'>
              <a href="https://github.com/Aparnababu123/Password-Generator.git" className='text-cyan-400 hover:text-cyan-300 transition-colors my-4'>View Project</a>
            </div>

          </div>


          <div className='p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>TIC-TAC-TOE</h3>
            <p className='text-gray-400 mb-4'>Developed a responsive To-Do List application using React and
               Tailwind CSS. The app allows users to add, view, and manage daily tasks
               efficiently
            </p>
            <div>
              {["Python"].map((tech,key)=>{
                return(
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>{tech}</span>
                )
              })}
            </div>
           
            <div className='flex justify-between items-center'>
              <a href="https://github.com/Aparnababu123/Tic-Tac-Toe.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>

          </div>

          <div className='p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
            <h3 className='text-xl font-bold mb-2'>Stock Price Prediction</h3>
            <p className='text-gray-400 mb-4'>The aim was to create a reliable and accurate predictive model to assist
              investors, traders, or financial institutions in making more informed decisions in the stock market
            </p>
            <div>
              {["ML"].map((tech,key)=>{
                return(
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>{tech}</span>
                )
              })}
            </div>
           
            <div className='flex justify-between items-center'>
              <a className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
            </div>

          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Project
