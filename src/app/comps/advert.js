"use client"; // This is a client component 👈🏽
import { motion } from "framer-motion";
import { useScrollContext } from "./context";



const Advert = () => {

    const { targetRefs } = useScrollContext();

    
    return ( 
        <>
        <motion.div
        initial={{opacity:0, y:250}}
        whileInView={{opacity:1, y:0}}
        transition={{type:'tween', duration:1,}}
        ref={targetRefs.targetElement2}
        className=" p-4 md:p-12 mt-8 md:mt-16">
            <div className=" w-full flex flex-col justify-center text-white items-center bg-[#121212] md:rounded-[40px] rounded-[22px] h-[220px] md:h-[400px] space-y-[20px] p-2 md:p-0 text-center">
                <p className=" text-2xl md:text-4xl font-semibold font-Exo">Start your file conversion</p>
                <p className=" text-base md:text-xl font-openSans font-normal">Join over 4,000+ users already growing with Convertify.</p>
                <button className=" bg-white py-3 px-5 text-[#121212] rounded-[15px] font-openSans font-semibold text-base">Get Started</button>
            </div>
        </motion.div>
        </>
     );
}
 
export default Advert;