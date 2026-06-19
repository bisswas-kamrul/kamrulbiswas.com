import React from "react";
import Container from "../../Container";
import { MdSms } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Futter = () => {
  return (
    <>
      <div className="bg-gray-900 p-10 ">
        <Container>
          <div className="flex justify-center items-center text-white">
            <p className=" hover:text-cyan-400 font-bold font-kamrul">
              © 2025 Kamrul |
            </p>
            <div className="flex gap-2 items-center">
               <MdSms className="hover:text-cyan-300" />
              <p className="font-bold font-kamrul text-white hover:text-cyan-400">
                bisswaskamruldev@gmail.com
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center pt-5 gap-x-5">
            <a href="https://www.facebook.com/kamrul.islam.258975" target="_blank"><FaFacebook  className="text-white text-2xl hover:text-cyan-400"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_GB" target="_blank">< IoLogoWhatsapp className="text-white text-2xl hover:text-cyan-400"/></a>
            <a href="https://github.com//Bisswas-kamrul" target="_blank"><FaGithub className="text-white text-2xl hover:text-cyan-400"/></a>
            <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin className="text-white text-2xl hover:text-cyan-400"/></a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Futter;
