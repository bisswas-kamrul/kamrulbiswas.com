import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import Images from "../../Images";
import umopsd from "../../assets/Uomo.png";
import { Button } from "flowbite-react";
import hankopsd from "../../assets/Honkon.png"
import xeonpsd from "../../assets/xeion.png"
import orbiopsd from "../../assets/orbe.png"
const Project = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <div className="py-20 px-10 text-center">
            <h2 className="text-3xl font-bold font-kamrul text-white mb-6">
              Some of my Projects
            </h2>
            <h6 className={"text-sm font-kamrul font-normal text-white"}>
              Dynamic animations, DOM handling,and plugin integration Modern,
              responsive, and high-converting landing page designs Fast,
              <br></br>
              scalable, and interactive React applications Complete end-to-end
              web solutions with MERN stack.
            </h6>
            <Flex
              className={
                "flex-col gap-y-10 sm:flex-row flex flex-wrap justify-around items-center sm:pt-5 mt-5"
              }>
              <div className="bg-[#16476A] rounded-xl h-[300px] md:h-[450px] w-[270px] sm:w-[250px] md:w-[500px] text-white font-kamrul pt-7  duration-2000 transition-all">
                Uomo E-Commerce Website
                <Images ImgSrc={umopsd} AltSrc={"umopsd"}/>
                <div className="flex justify-around items-center mt-2">
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                    Figma
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   tailwind
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   react
                  </Button>
                </div>
              </div>
              <div className="bg-[#16476A] rounded-xl h-[300px] md:h-[450px] w-[270px] sm:w-[250px] md:w-[500px] text-white font-kamrul pt-7  duration-2000 transition-all">
                Hankco Landing website
                <Images ImgSrc={hankopsd} AltSrc={"hankopsd"}/>
                <div className="flex justify-around items-center mt-2">
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                    Figma
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   tailwind
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   react
                  </Button>
                </div>
              </div>
              <div className="bg-[#16476A] rounded-xl h-[300px] md:h-[450px] w-[270px] sm:w-[250px] md:w-[500px] text-white font-kamrul pt-7  duration-2000 transition-all">
               xenious Landing Website
                <Images ImgSrc={xeonpsd} AltSrc={"xeonpsd"}/>
                <div className="flex justify-around items-center mt-2">
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                    Figma
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   tailwind
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   react
                  </Button>
                </div>
              </div>
              <div className="bg-[#16476A] rounded-xl h-[300px] md:h-[450px] w-[270px] sm:w-[250px] md:w-[500px] text-white font-kamrul pt-7  duration-2000 transition-all">
                Oribi E- Commerce website
                <Images ImgSrc={orbiopsd} AltSrc={"orbiopsd"}/>
                <div className="flex justify-around items-center mt-2">
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                    Figma
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   tailwind
                  </Button>
                  <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md transition-all duration-500">
                   react
                  </Button>
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Project;
