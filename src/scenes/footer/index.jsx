import React from 'react'
import AlaroLogo from "../../assets/alaro-city-logo.png";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={AlaroLogo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            incidunt alias dignissimos, ipsam error corrupti eaque enim est
            quidem quas unde recusandae impedit laboriosam, officiis tempore
            quae distinctio iusto asperiores.
          </p>
          <p>&copy; 2023 Alaro City All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Company</h4>
            <p className="my-5">Home</p>
            <p className="my-5">About </p>
            <p className="my-5">Blog </p>
            <p className="my-5">Privacy Policy </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus voluptat egstats</p>
            <p>(234)567-89345 </p>
        <div className='flex w-full py-4'>
            <img className="mx-2 w-[20px] h-[20px]" src={Facebook} alt="footer-icon"/>
            <img className="mx-2 w-[20px] h-[20px]" src={Twitter} alt="footer-icon"/>
            <img className="mx-2 w-[20px] h-[20px]" src={Instagram} alt="footer-icon"/>
            <img className="mx-2 w-[20px] h-[20px]" src={Linkedin} alt="footer-icon"/>

        </div>
           
        </div>
        
      </div>
    </footer>

  )
}

export default Footer