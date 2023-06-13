import Image from "next/image";
import logoFooter from '../images/logoFooter.png';

const Footer = () => {
    return ( 
        <>
        <div className=" md:mt-16 mt-8 mb-8 px-4 md:px-12">
            <div className=" flex md:flex-row flex-col justify-center items-center md:justify-between w-full mb-10">
                <span className=" flex space-x-2 items-center">
                    <Image src={ logoFooter } alt="" />
                    <p className=" text-2xl font-semibold font-Exo text-[#121212]">Convertify</p>
                </span>
                <span className='flex justify-between md:justify-center w-full md:space-x-7 mt-6 md:mt-0 items-center'>
                    <p className=' text-sm font-normal text-[#121212] font-openSans'>About</p>
                    <p className=' text-sm font-normal text-[#121212] font-openSans'>How it works</p>
                    <p className=' text-sm font-normal text-[#121212] font-openSans'>Features</p>
                </span>
                <p className="text-[#121212]">socials</p>
            </div>
            <div className='border-t border-[#EAEBF0]'>
                <div className='flex md:flex-row flex-col-reverse justify-center items-center md:justify-between w-full mt-8'>
                    <p className=' text-sm mt-6 md:mt-0 font-openSans font-normal text-[#121212]'>© 2023 Convertify. All Rights Reserved.</p>
                    <span className='flex w-full md:w-auto justify-between md:justify-center md:space-x-5 text-sm font-openSans font-normal text-[#121212]'>
                        <p className=''>Privacy Policy</p>
                        <p className=''>Terms & Conditions</p>
                    </span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Footer;