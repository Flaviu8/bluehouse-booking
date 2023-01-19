import React, {useEffect, useState} from "react";
import CompanyLogo from "../../logo/bluehouse.svg"
import SearchLogo from "../icons/search.svg"
import HamburgerMenu from "../icons/hamburger-menu.svg"
import { NavbarContainer, NavbarRight, NavbarMainContainer } from "./navbar.style";
import SearchInput from "../search-input/search-input";


 const Navbar = () => {
    const [show, setShow] = useState(true);

   
    
    const onMouseEnter = () =>{
        setShow(!show)
    }

    const onMouseLeave = () =>{
        setShow(show)
    }
    
    
    useEffect(() =>{
        onMouseEnter()
        onMouseLeave()
        
    },[])
    

console.log(show)
    return (
        <NavbarMainContainer>
            {!show ? <SearchInput /> : ""}
            <NavbarContainer>
                <img src={CompanyLogo} alt="navbar-logo"/>
            </NavbarContainer>    
                <NavbarRight>
                    <img onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave} src = {SearchLogo} alt="search-logo" />
                    <img src = {HamburgerMenu} alt="hamburger-menu" />
                </NavbarRight>
        </NavbarMainContainer>
    )
}

export default Navbar