import React from 'react'
import Container from '../../Container'
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { DiJqueryUiLogo } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { SiDevexpress } from "react-icons/si";
import { SiMonogame } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";



const Skills = () => {
  return (
    <>
    <div className="bg-gray-900 text-white font-sans">
        <Container>
            <div className="py-10 bg-gray-800">
                <h2 className="text-3xl font-bold mb-6 md:ml-7"> My skills Languages</h2>
                <div className="flex-col gap-y-3 sm:flex-row flex flex-wrap justify-around items-center">
                  <div className="h-[200px] w-[250px] bg-gray-900 shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                    <FaHtml5 className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">HTML</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-900 shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                    <FaCss3Alt className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">CSS</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-900 shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                    <FaBootstrap className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">BootStrap</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                    <DiJqueryUiLogo className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">JQury</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-900 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <FaFigma className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">Figma</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-900 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <DiJavascript className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">JavaScript</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-900 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <RiTailwindCssFill className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">TailwindCss</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    < FaReact className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">React.Js</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    < SiRedux className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">ReduxToolkit</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <FaNode className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">Node.Js</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    < TbBrandNextjs className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">Next.Js</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    < SiAdobephotoshop  className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">Adobe Photoshop</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    < SiDevexpress  className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">Express.js</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <  SiMonogame  className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">MongoDB</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <BiLogoMongodb  className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">Moongoos</h4>
                  </div>
                  <div className="h-[200px] w-[250px] bg-gray-950 shadow-md rounded-2xl mt-10 hover:scale-110 duration-1000 transition-all">
                    <  FaAppStoreIos  className="h-[70px] w-[70px] text-cyan-400 ml-20 mt-5" />
                    <h4 className="text-3xl font-bold text-center pt-6 bg-[#16476A] h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">AppStore</h4>
                  </div>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Skills

