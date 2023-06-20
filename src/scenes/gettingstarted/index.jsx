import React from 'react'
import './gettingstarted.css'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const GettingStarted = ({selectedPage, setSelectedPage}) => {
  return (
    <section id="getstarted" classes="w-full py-40">
      <motion.div onViewportEnter={() => setSelectedPage("getstarted")}>

        <div className='gettingstarted-wrapper mx-auto min-h-full w-5/6 py-20'>
            <div className='gettingstarted-header'>
                <h2>Getting Started</h2>
                <p className='mt-8'> Let's get you your electicity tokens and water tokens in simple steps.</p>
                </div>
                <div className='action-buttons flex justify-center gap-12 md:gap-28  w-5/6 mx-auto my-12'>
                    <Link to="/utilities" className='getting-started-btn'>Buy Electricity</Link>
                    <Link to="/utilities" className='getting-started-btn'>Buy Water</Link>

                </div>
            </div>
            </motion.div>
    </section>
  )
}

export default GettingStarted