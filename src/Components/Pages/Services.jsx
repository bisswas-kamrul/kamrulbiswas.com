import React from "react";
import Container from "../../Container";
import Images from "../../Images";
import UomoMockup from "../../assets/Uomo E-commarce screenshort.png";
import xenious from "../../assets/xenious.png";
import HankcoMockup from "../../assets/Hankco  copy.jpg";
import OribiUpdet from "../../assets/Oribi ScrinShort.png";
import { Button } from "flowbite-react";
const Services = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Container>
          <div className="py-20 px-10 text-center">
            <h2 className="text-3xl font-bold font-kamrul text-white mb-6">
              The service I provide for my clients
            </h2>
            <h6 className={"text-sm font-kamrul font-normal text-white"}>
              I build responsive, user-friendly, and scalable web applications
              with a focus on performance, interactivity, and great UI/UX.{" "}
              <br></br>I can also convert Figma designs into fully functional
              React.js applications, bridging design and development seamlessly.
            </h6>
            <div className="flex-col gap-y-10 sm:flex-row flex flex-wrap sm:justify-between sm:items-center sm:mt-7">
              <div className="h-[430px] w-[250px] md:h-[350px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                <Images
                  ImgSrc={UomoMockup}
                  AltSrc={"UomoMockup"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                  Uomo E-Commerce Website
                  <div className="flex justify-around items-center mt-2">
                    <a
                      href="https://github.com/bisswas-kamrul/Uomo-E-commerce-pages-responsive-update"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Code
                      </Button>
                    </a>
                    <a
                      href="https://uomo-e-commerce-pages-responsive-up.vercel.app/"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Live
                      </Button>
                    </a>
                  </div>
                </h4>
              </div>
              <div className="h-[400px] md:h-[350px] w-[250px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all">
                <Images
                  ImgSrc={HankcoMockup}
                  AltSrc={"HankcoMockup"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                  Hankco Landing Website
                  <div className="flex justify-around items-center mt-2">
                    <a
                      href="https://github.com/bisswas-kamrul/Hanko-website-project-react-tailwind-responsive"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Code
                      </Button>
                    </a>
                    <a
                      href="https://hanko-website-project-react-tailwin.vercel.app/"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Live
                      </Button>
                    </a>
                  </div>
                </h4>
              </div>
              <div className="h-[400px] md:h-[350px] w-[250px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all mt-10">
                <Images
                  ImgSrc={xenious}
                  AltSrc={"xenious"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                  Xenious Landing Website
                   <div className="flex justify-around items-center mt-2">
                    <a
                      href="https://github.com/bisswas-kamrul/Xgenious-landing-pages"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Code
                      </Button>
                    </a>
                    <a
                      href="https://xgenious-landing-pages.vercel.app/"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Live
                      </Button>
                    </a>
                  </div>
                </h4>
              </div>
              <div className="h-[400px] w-[250px] md:h-[350px] md:w-[500px] bg-[#16476A] shadow-md rounded-2xl hover:scale-110 duration-1000 transition-all mt-10">
                <Images
                  ImgSrc={OribiUpdet}
                  AltSrc={"OribiUpdet"}
                  className={"h-[250px] md:w-full"}
                />
                <h4 className="text-2xl md:text-3xl font-bold text-center pt-2 text-white h-[55%] rounded-bl-2xl rounded-br-2xl font-kamrul">
                  Oribi E-Commerce Website
                   <div className="flex justify-around items-center mt-2">
                    <a
                      href="https://github.com/bisswas-kamrul/Oribi-Fore-Responsive-Update"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Code
                      </Button>
                    </a>
                    <a
                      href="https://oribi-fore-responsive-update.vercel.app/"
                      target="_blank">
                      <Button className="h-[40px] w-[80px] border-1 font-kamrul cursor-pointer  rounded-md hover:bg-cyan-400 transition-all duration-500">
                        Live
                      </Button>
                    </a>
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
