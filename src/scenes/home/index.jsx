import React from 'react'
import './home.css'
import HomeImg from "../../assets/home-hero.jpg"
import useMediaQuery from '../../hooks/useMediaQuery';
import WhyUs from '../whyus';
import GettingStarted from '../gettingstarted';
import Footer from '../footer';
import ScrollLink from '../navbar/ScrollLink';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = ({selectedPage, setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="home-section">
        <div className='home-wrapper'>
            <div className='home-text md:basis-3/5'>
                <h2 className='font-ibarraRealNova home-header'>Provide Electricity and Water for your homes</h2>
                <p className='font-poppins home-text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus consequatur quasi hic soluta consequuntur eius consectetur quod, voluptatibus iste deleniti id, tenetur ullam at quia. Odit praesentium odio commodi.</p>

                <AnchorLink href="#getstarted" className='home-btn'>Buy Utilities</AnchorLink>
            </div>


            {isAboveMediumScreens && (

            <div className='flex basis-3/5 justify-center md:mt-16 md:justify-items-end md:ml-20 home-img-div'>
                <img src={HomeImg} alt="home-img"/>

            </div>
            )}

        </div>



        <WhyUs selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>    
       <GettingStarted selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
       <Footer/>

        
    </section>
  )
}

export default Home