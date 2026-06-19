import React, { useState, useEffect } from "react";
import Container from "../../Container";
import { Link } from "react-router"; 
import { Navbar,  NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Images from "../../Images";
import LogoPng from "../../assets/logo.png"


const Nabver = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
//Image click korle up hobe==
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

//Image click korle up hobe==
  return (
   <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800/80 shadow-lg backdrop-blur-md" : "bg-gray-900"
      } text-white font-sans`}
    >
      <Container>
         <Navbar fluid rounded className=" md:hidden py-5">
        <Link to={"/"}><h1 className="text-2xl font-bold text-cyan-400" onClick={scrollToTop} >
           <Images ImgSrc={LogoPng} AltSrc={"LogoPng"} className={"h-[50px] w-[80px]"}/>
          </h1></Link>
      <NavbarToggle className="text-3xl"/>
      <NavbarCollapse >
        {/* <NavbarLink > */}
          <ul className="flex-col  md:flex-row flex gap-y-3 absolute left-0 top-18 bg-gray-900 w-full">
            <Link to={"/"}>
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            </Link>
            <Link to={"/About"}>
              <li className="hover:text-cyan-400 cursor-pointer">About</li>
            </Link>
            <Link to={"/Skills"}>
              <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
            </Link>
            <Link to={"/Project"}>
              <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
            </Link>
            <Link to={"/Services"}>
              <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            </Link>
            <Link to={"/Contact"}>
              <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            </Link>
          </ul>
        {/* </NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
       <div className="hidden md:block">
         <nav className="flex-col md:flex-row flex justify-between items-center px-10 py-5">
          {/* Logo */}
          <Link to={"/"}><h1 className="text-2xl font-bold text-cyan-400" onClick={scrollToTop}>
            <Images ImgSrc={LogoPng} AltSrc={"LogoPng"} className={"h-[60px] w-[80px]"}/>
            </h1></Link>           
          {/* Links */}
          <ul className="flex-col  md:flex-row flex gap-6">
            <Link to={"/"}>
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            </Link>
            <Link to={"/About"}>
              <li className="hover:text-cyan-400 cursor-pointer">About</li>
            </Link>
            <Link to={"/Skills"}>
              <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
            </Link>
            <Link to={"/Project"}>
              <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
            </Link>
            <Link to={"/Services"}>
              <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            </Link>
            <Link to={"/Contact"}>
              <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </nav>
       </div>
      </Container>      
    </header>
   </>
  );
};

export default Nabver;
