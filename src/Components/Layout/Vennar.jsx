import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import Images from "../../Images";
import VennarJpg from "../../assets/ais kamrul islam updete.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
const Vennar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white font-sans">
        <Container>
          <Flex  className={"flex-col md:flex-row"}>
            <div className="md:w-[510px]">
              <h2 className="font-bold font-kamrul text-[40px]  ">
                Hello my <br></br> name's
                <span className="text-cyan-400 font-kamrul">"Kamrul-Biswas"</span>
                <br></br>
                <TypeAnimation
                  sequence={["I am a Mern Full Stack Developer.", 2000]}
                />
              </h2>
              <div className="flex gap-x-5 items-center">
                <Link to="/Contact">
                  <button className=" mt-3 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 font-kamrul cursor-pointer">
                    Contact-Me
                  </button>
                </Link>
               <a href="/cv/Kamrul Update Cv.pdf" target="_blank"><button className=" mt-3 px-6 py-3 border cursor-pointer border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black font-kamrul">
                  DownLoade-Cv
                </button></a>
              </div>
            </div>
            <div className=" mt-5  md:w-[580px]">
              <Images
                ImgSrc={VennarJpg}
                AltSrc={"vennar.jpg"}
                className={"h-[400px] w-[400px] mt-5 md:ml-40 rounded-full object-cover"}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Vennar;
