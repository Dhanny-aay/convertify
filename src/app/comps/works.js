"use client"; // This is a client component 👈🏽
import { motion } from "framer-motion";

const Works = () => {
    return ( 
        <>
        <motion.div
        initial={{opacity:0, y:250}}
        whileInView={{opacity:1, y:0}}
        transition={{type:'tween', duration:1,}}
        className=" md:mt-14 p-4 mt-7 md:p-6 text-[#000]">
            <p className=" font-Exo font-semibold text-center text-2xl md:text-4xl">How it works</p>
            <p className="mt-2 font-openSans font-normal text-center text-base md:text-xl">Find out how to use Convertify for all your file conversion needs</p>
            <div className=" flex md:flex-row items-center md:justify-between  flex-col md:space-x-4 mt-14 px-6 justify-center space-y-4 md:space-y-0">
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-base md:text-2xl">1</button>
                    <p className=" font-openSans text-base md:text-xl font-semibold text-center">Upload file</p>
                </span>
                <button className=" w-o md:w-[100px] md:h-0 h-[100px] md:border-t-2 border-l-2 md:border-l-0 cursor-default border-black -mt-6 border-dashed"></button>
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-base md:text-2xl">2</button>
                    <p className=" font-openSans text-base md:text-xl font-semibold text-center">Choose file type to convert to</p>
                </span>
                <button className=" w-o md:w-[100px] md:h-0 h-[100px] md:border-t-2 border-l-2 md:border-l-0 cursor-default border-black -mt-6 border-dashed"></button>
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-base md:text-2xl">3</button>
                    <p className=" font-openSans text-base md:text-xl font-semibold text-center">Click Convert</p>
                </span>
                <button className=" w-o md:w-[100px] md:h-0 h-[100px] md:border-t-2 border-l-2 md:border-l-0 cursor-default border-black -mt-6 border-dashed"></button>
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-base md:text-2xl">4</button>
                    <p className=" font-openSans text-base md:text-xl font-semibold text-center">Download converted file</p>
                </span>
            </div>
        </motion.div>
        </>
     );
}
 
export default Works;