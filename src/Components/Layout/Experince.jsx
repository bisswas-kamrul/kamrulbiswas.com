import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'

const Experince = () => {
  return (
    <>
    <div className="bg-gray-900">
        <Container>
             <h1 className="text-3xl font-bold pt-6 font-kamrul text-white"> Work Experience</h1>
             <h4 className=" text-gray-300 font-semibold pt-6 font-kamrul">[1] Creative IT Institute [MERN Stack full Developer] </h4>
             <p className="text-[16px] font-kamrul text-white"> 17.12.2024 - 12.01.2026 - Momtaz Plaza (3rd $ 4th floor) House #07, Road # 04A, Dhanmondi Dhaka-1205 [bangaladesh]</p>
             <h4 className=" text-gray-300 font-semibold pt-6 font-kamrul">[2] Accounting Manager[Robi Azita Limited]</h4>
             <p className="text-[16px] font-kamrul text-white"> 2013 - 2018 - Barguna, Sador, Barguna.[bangaladesh]</p>
             <h1 className="text-3xl font-bold pt-6 font-kamrul text-white"> Project Experience</h1>
             <Flex className={"flex-col sm:flex-row justify-between items-center"}>
                <div className="bg-gray-800 mb-6 mt-6 rounded-xl h-[100px] w-[300px] sm:w-[150px] md:w-[230px] text-white text-center font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">100<br></br>Project</div>
                <div className="bg-gray-800 mb-6 mt-6 rounded-xl h-[100px] w-[300px] sm:w-[150px] md:w-[230px] text-white text-center font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">5<br></br>Winning Award</div>
                <div className="bg-gray-800 mb-6 mt-6 rounded-xl h-[100px] w-[300px] sm:w-[150px] md:w-[230px] text-white text-center font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">5<br></br>Happy Clients</div>
                <div className="bg-gray-800 mb-6 mt-6 rounded-xl h-[100px] w-[300px] sm:w-[150px] md:w-[230px] text-white text-center font-kamrul pt-10 hover:scale-110 duration-2000 transition-all">1+<br></br> Year Experience</div>
             </Flex>
        </Container>
    </div>
    </>
  )
}

export default Experince