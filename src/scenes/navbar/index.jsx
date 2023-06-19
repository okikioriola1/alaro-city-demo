import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import AlaroLogo from "../../assets/alaro-city-logo.png";
import ScrollLink from "./ScrollLink";
import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";

const Navbar = ({selectedPage, setSelectedPage}) => {
  const flexBetween = "flex items-center bg-white";

  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div className={`${flexBetween}  z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 py-6`}>
          <div className={`${flexBetween} w-full justify-between gap-16`}>
            <Link to="/"><img src={AlaroLogo} alt="logo"/></Link>
          {isAboveMediumScreens ?   <div className={`${flexBetween} justify-items-end w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>

                
                <ScrollLink
                  page="Why Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                <ScrollLink
                  page="Get Started"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <ScrollLink
                  page="FAQ's"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />


              </div>

            </div>
            : (
                <button
                className="rounded-full bg-black p-2"
                onClick={()=>setIsMenuToggled(!isMenuToggled)}
            >
                <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            </button>
            )}

          </div>
        </div>
      </div>
       {/* MobileMenu */}
       {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-black drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">

                        <ScrollLink 
                        page="Why Us?" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>
                        <ScrollLink 
                        page="Get Started"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <ScrollLink 
                        page="FAQ's"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />


                    </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
