"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Image from "next/image";
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';
import mbfeature1 from '../images/mbfeature1.png';
import mbfeature2 from '../images/mbfeature2.png';
import mbfeature3 from '../images/mbfeature3.png';
import { motion } from "framer-motion";

const Features = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    return ( 
        <>
        <motion.div 
        initial={{opacity:0, y:250}}
        whileInView={{opacity:1, y:0}}
        transition={{type:'tween', duration:1,}}
        className=" mt-14 p-6 text-[#000] hidden lg:block">
            <p className=" font-Exo font-semibold text-center text-2xl md:text-4xl">Our Features</p>
            <p className="hidden md:block mt-2 font-openSans font-normal text-center text-xl">The all-in-one solution for your file conversion needs</p>
            <div className=" flex md:flex-row flex-col w-full justify-between items-center px-6 mt-16">
                <div className=" flex flex-col w-[45%] h-full space-y-[30px]">
                    <span className=" space-y-[12px]" onMouseOver={()=>{setOne(true); setTwo(false); setThree(false)}}>
                        <p className=" font-openSans text-[20px] font-semibold">File conversion</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify allows users to convert various file types to multiple formats, including PDFs, images, and audio files. This means that users can quickly and easily transform their files into the format they need.</p>
                    </span>
                    <span className=" space-y-[12px]" onMouseOver={()=>{setOne(false); setTwo(true); setThree(false)}}>
                        <p className=" font-openSans text-[20px] font-semibold">Cloud-based technology</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify uses cloud-based technology to ensure that the conversion process is fast, reliable, and secure. This means that users can access their files from anywhere and be confident that their files are safe and protected.</p>
                    </span>
                    <span className=" space-y-[12px]" onMouseOver={()=>{setOne(false); setTwo(false); setThree(true)}}>
                        <p className=" font-openSans text-[20px] font-semibold">Customizable output settings</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify allows users to customize the output settings for their converted files. This means that users can choose the quality, resolution, size, and other parameters of their files according to their needs. With this feature, users can ensure that their converted files meet their specific requirements and are optimized for their intended use.</p>
                    </span>
                </div>
                { one &&<motion.div 
                initial={{ y:350}}
                whileInView={{ y:0}}
                transition={{type:'spring',stiffness:50, duration:0.6,}}
                className=" w-[45%] h-[507px] rounded-[40px] bg-[#e8e8f2] flex justify-center items-center">
                    <Image src={ feature1 } className=" w-full h-auto" alt="" />
                </motion.div>}
                { two && <motion.div 
                initial={{ y:350}}
                whileInView={{ y:0}}
                transition={{type:'spring',stiffness:50, duration:0.6,}}
                className=" w-[45%] h-[507px] rounded-[40px] bg-[#eef5f2] flex justify-center items-center">
                    <Image src={ feature2 } className=" w-full h-auto" alt="" />
                </motion.div>}
                { three && <motion.div 
                initial={{ y:350}}
                whileInView={{ y:0}}
                transition={{type:'spring',stiffness:50, duration:0.6,}}
                className=" w-[45%] h-[507px] rounded-[40px] bg-[#e3f1ff] flex justify-center items-center">
                    <Image src={ feature3 } className=" w-full h-auto" alt="" />
                </motion.div>}
            </div>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:250}}
        whileInView={{opacity:1, y:0}}
        transition={{type:'tween', duration:1,}}
        className=" block lg:hidden mt-7 p-4 text-[#000]">
            <p className=" font-Exo font-semibold text-center text-2xl">Our Features</p>
            <div className=" flex flex-col justify-center items-center space-y-5 mt-6 px-4">
                <motion.div className=""
                initial={{opacity:0, y:250}}
                whileInView={{opacity:1, y:0}}
                transition={{type:'tween', duration:1,}}
                >
                    <div className=" w-full h-[400px] rounded-[22px] bg-[#e8e8f2] mb-3 flex justify-center items-center">
                        <Image src={ mbfeature1 } className=" w-auto h-auto" alt="" />
                    </div>
                    <span className=" space-y-[10px] mt-3">
                            <p className=" font-openSans text-[16px] font-semibold">File conversion</p>
                            <p className=" font-openSans text-[14px] font-normal">Convertify allows users to convert various file types to multiple formats, including PDFs, images, and audio files. This means that users can quickly and easily transform their files into the format they need.</p>
                    </span>
                </motion.div>
                <motion.div
                initial={{opacity:0, y:250}}
                whileInView={{opacity:1, y:0}}
                transition={{type:'tween', duration:1,}}>
                    <div className=" w-full h-[400px] rounded-[22px] mt-[18px] bg-[#EEF5F2] mb-3 flex justify-center items-center">
                        <Image src={ mbfeature2 } className=" w-auto h-auto" alt="" />
                    </div>
                    <span className=" space-y-[10px] mt-[10px]">
                            <p className=" font-openSans text-[16px] font-semibold">Cloud-based technology</p>
                            <p className=" font-openSans text-[14px] font-normal">Convertify uses cloud-based technology to ensure that the conversion process is fast, reliable, and secure. This means that users can access their files from anywhere and be confident that their files are safe and protected.</p>
                    </span>
                </motion.div>
                <motion.div
                initial={{opacity:0, y:250}}
                whileInView={{opacity:1, y:0}}
                transition={{type:'tween', duration:1,}}
                >
                    <div className=" w-full h-[400px] rounded-[22px] mt-[18px] mb-3 bg-[#E3F1FF] flex justify-center items-center">
                        <Image src={ mbfeature3 } className=" w-auto h-auto" alt="" />
                    </div>
                    <span className=" space-y-[10px] mt-[10px]">
                            <p className=" font-openSans text-[16px] font-semibold">Customizable output settings</p>
                            <p className=" font-openSans text-[14px] font-normal">Convertify allows users to customize the output settings for their converted files. This means that users can choose the quality, resolution, size, and other parameters of their files according to their needs. With this feature, users can ensure that their converted files meet their specific requirements and are optimized for their intended use.</p>
                    </span>
                </motion.div>
            </div>
        </motion.div>
        </>
     );
}
 
export default Features;