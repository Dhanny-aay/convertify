"use client"; // This is a client component 👈🏽
import Image from "next/image";
import ConvertAPI from "convertapi";
import { useState } from "react";
import logo from '../images/logo.png';
import rightArrow from '../images/arrow-right.png';
import uploadIcon from '../images/upload.png';
import leftOne from '../images/left1.png';
import rightOne from '../images/right1.png';
import menu from '../images/menu.png';
import bottomOne from '../images/bottom1.png';
import bottomTwo from '../images/bottom2.png';

const Hero = () => {
    const [uploadFile, setUploadFile] = useState(null)


    const convertapi = new ConvertAPI('OtyktDP60XShcQyP');

    const convert = ()=>{
        convertapi.convert('pdf', { File: 'https://firebasestorage.googleapis.com/v0/b/luxe-int.appspot.com/o/Accessory%2Faccessory2.png?alt=media&token=9dc9c367-4271-4e7d-9e7e-29d00f853f91' })
        .then(function(result) {
            // get converted file url
            console.log("Converted file url: " + result.file.url);

            // save to file
            return result.file.save('/path/to/save/file.pdf');
        })
        .then(function(file) {
            console.log("File saved: " + file);
        })
        .catch(function(e) {
            console.error(e.toString());
        });
    }

    const imgUrl = (e)=>{
       const file = e.target.files[0];
       if(file){
        console.log('theres a file');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            // Get the data URL string
            console.log(reader.result);
        });
       }
    }

    return ( 
        <>
        <div className=" p-4 md:p-6">
            <div className=" w-full pt-6 md:pt-12 bg-[#121212] pb-12 md:pb-24 rounded-[50px] relative">
                <Image src={ leftOne } className=' hidden md:block absolute left-0 w-[13%] top-[20%]' alt="" />
                <Image src={ bottomOne } className=' hidden md:block absolute bottom-0 w-[18%] left-[13%]' alt="" />
                <Image src={ rightOne } className=' hidden md:block absolute top-[15%] w-[11%] right-0' alt="" />
                <Image src={ bottomTwo } className=' hidden md:block rounded-br-[50px] absolute bottom-0 w-[18%] right-0' alt="" />
                <div className=' flex flex-row items-center justify-between w-full px-[25px] md:px-[50px]'>
                    <span className=" flex space-x-2 items-center">
                        <Image src={ logo } className=" w-5 h-4 md:w-auto md:h-auto" alt="" />
                        <p className=" text-lg md:text-3xl font-semibold font-Exo text-[#f1f1f1]">Convertify</p>
                    </span>
                    <span className='hidden md:flex space-x-5 items-center'>
                        <p className=' text-lg font-normal text-[#f1f1f1] font-openSans'>About</p>
                        <p className=' text-lg font-normal text-[#f1f1f1] font-openSans'>How it works</p>
                        <p className=' text-lg font-normal text-[#f1f1f1] font-openSans'>Features</p>
                    </span>
                    <button className=' w-[180px] h-[65px] pl-5 pr-2 bg-[#121212] rounded-[60px] hidden md:flex flex-row border border-[#f1f1f1] justify-between items-center'>
                        <p className=' text-lg font-openSans font-normal text-[#f1f1f1]'>Try it Out</p>
                        <button className=' w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                            <Image src={ rightArrow } alt="" />
                        </button>
                    </button>
                    <Image src={ menu } className="block md:hidden" alt=""/>
                </div>
                <div className=' flex flex-col text-[#f1f1f1] justify-center items-center text-center mt-[100px] px-[15%]'>
                    <p className=' text-[32px] md:text-[64px] font-Exo font-medium leading-[38px] md:leading-[76px]'>The ultimate file conversion tool</p>
                    <p className=' font-openSans font-normal text-sm md:text-xl mt-6'>Convert all your files to any format you need with Convertify's powerful conversion engine</p>
                    <div className='mt-[64px] md:mt-[78px] border border-[#f1f1f1] border-dashed rounded-[50px] p-3 h-[210px] md:w-[310px] w-[260px]'>
                        <div className=' w-full h-full bg-[#f1f1f1] rounded-[40px] flex flex-col justify-center items-center'>
                            <button onClick={ convert } type="file" className=' w-[60px] h-[60px] rounded-[50%] bg-[#121212] flex justify-center items-center'>
                                <Image src={ uploadIcon } alt="" />
                            </button>
                            <p className=' font-openSans text-[#121212] font-normal text-base md:text-xl mt-1'>Add Your File</p>
                            <p className=' font-openSans text-[#121212] font-normal text-[10px] md:text-xs mt-1'>Up to 2GB</p>
                        </div>
                    </div>
                    <input type="file" onChange={ imgUrl } name="" id="" />
                    <select className=' w-[310px] bg-[#f1f1f1] rounded-[50px] mt-6 text-[#000] py-2 px-4 font-openSans font-light text-sm' name="" id="">
                        <option value="">Choose File Type</option>
                    </select>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;