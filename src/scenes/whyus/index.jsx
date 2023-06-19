import React from 'react'
import './whyus.css'
import {motion} from "framer-motion"


import {
    CreditCardIcon,
    ChatBubbleLeftRightIcon,
    HandThumbUpIcon

  } from "@heroicons/react/24/solid";
import Benefit from './Benefit';


  const benefits = [
    {
      icon: <HandThumbUpIcon className="h-6 w-6" />,
      title: "Buy Instantly",
      description:
        " Buy electricity or water units and get your tokens immediately from anywhere you are.",
    },
    {
      icon: <CreditCardIcon className="h-6 w-6" />,
      title: "Payments",
      description:
        "Simplifies end-to-end workflow for your business payout processes; freeing up resources for strategic business engagements. Pay with all the types of payment methods including bank transfers and cards",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      title: "24/7 Customer Support",
      description:
        " Enjoy our Customer Service and have your issues resolved anytime- day and night.",
    },
  ];

const WhyUs = ({selectedPage, setSelectedPage}) => {
  setSelectedPage("whyus")
  return (

    <section id="whyus" classes="w-full py-40">
       <motion.div onViewportEnter={() => setSelectedPage("whyus")}>

        <div className='whyus-wrapper mx-auto min-h-full w-5/6 py-20'>
            <div className='whyus-header'>
                <h2>Why Choose Us?</h2>

            </div>
            <div className='md:flex items-center justify-between gap-8 mt-5 why-us-content'>
                {benefits.map((item,index)=>(
                    <Benefit
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    />
                ))}

            </div>


        </div>
        </motion.div>


    </section>
  )
}

export default WhyUs