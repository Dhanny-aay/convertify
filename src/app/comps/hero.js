import Image from "next/image";
import logo from '../images/logo.png';
import rightArrow from '../images/arrow-right.png';
import uploadIcon from '../images/upload.png';
import leftOne from '../images/left1.png';
import rightOne from '../images/right1.png';
import bottomOne from '../images/bottom1.png';
import bottomTwo from '../images/bottom2.png';

const Hero = () => {
    return ( 
        <>
        <div className=" p-6">
            <div className=" w-full pt-12 bg-[#121212] pb-24 rounded-[50px] relative">
                <Image src={ leftOne } className=' absolute left-0 w-[13%] top-[20%]' alt="" />
                <Image src={ bottomOne } className=' absolute bottom-0 w-[18%] left-[13%]' alt="" />
                <Image src={ rightOne } className=' absolute top-[15%] w-[11%] right-0' alt="" />
                <Image src={ bottomTwo } className=' rounded-br-[50px] absolute bottom-0 w-[18%] right-0' alt="" />
                <div className=' flex flex-row items-center justify-between w-full px-[50px]'>
                    <span className=" flex space-x-2 items-center">
                        <Image src={ logo } alt="" />
                        <p className=" text-3xl font-semibold font-Exo text-[#f1f1f1]">Convertify</p>
                    </span>
                    <span className='flex space-x-5 items-center'>
                        <p className=' text-lg font-normal text-[#f1f1f1] font-openSans'>About</p>
                        <p className=' text-lg font-normal text-[#f1f1f1] font-openSans'>How it works</p>
                        <p className=' text-lg font-normal text-[#f1f1f1] font-openSans'>Features</p>
                    </span>
                    <button className=' w-[180px] h-[65px] pl-5 pr-2 bg-[#121212] rounded-[60px] flex flex-row border border-[#f1f1f1] justify-between items-center'>
                        <p className=' text-lg font-openSans font-normal text-[#f1f1f1]'>Try it Out</p>
                        <button className=' w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                            <Image src={ rightArrow } alt="" />
                        </button>
                    </button>
                </div>
                <div className=' flex flex-col text-[#f1f1f1] justify-center items-center text-center mt-[100px] px-[15%]'>
                    <p className=' text-[64px] font-Exo font-medium leading-[76px]'>The ultimate file conversion tool</p>
                    <p className=' font-openSans font-normal text-xl mt-6'>Convert all your files to any format you need with Convertify's powerful conversion engine</p>
                    <div className='mt-[78px] border border-[#f1f1f1] border-dashed rounded-[50px] p-3 h-[210px] w-[310px]'>
                        <div className=' w-full h-full bg-[#f1f1f1] rounded-[40px] flex flex-col justify-center items-center'>
                            <button className=' w-[60px] h-[60px] rounded-[50%] bg-[#121212] flex justify-center items-center'>
                                <Image src={ uploadIcon } alt="" />
                            </button>
                            <p className=' font-openSans text-[#121212] font-normal text-xl mt-1'>Add Your File</p>
                            <p className=' font-openSans text-[#121212] font-normal text-xs mt-1'>Up to 2GB</p>
                        </div>
                    </div>
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