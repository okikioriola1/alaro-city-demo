import AnchorLink from "react-anchor-link-smooth-scroll";



const ScrollLink = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") 
  return (
    <AnchorLink href={`#${lowerCasePage}`} onClick={()=>setSelectedPage(lowerCasePage)} className={`${selectedPage === lowerCasePage ? "text-primary-500" : "" }
    transition duration-500 hover:text-green-600 text-sm text-white md:text-black
    
    `}>
     {page}
    </AnchorLink>
  )
}

export default ScrollLink