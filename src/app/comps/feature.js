import Image from "next/image";
import feature1 from '../images/feature1.png';
import mbfeature1 from '../images/mbfeature1.png';
import mbfeature2 from '../images/mbfeature2.png';
import mbfeature3 from '../images/mbfeature3.png';

const Features = () => {
    return ( 
        <>
        <div className=" mt-14 p-6 text-[#000] hidden md:block">
            <p className=" font-Exo font-semibold text-center text-2xl md:text-4xl">Our Features</p>
            <p className="hidden md:block mt-2 font-openSans font-normal text-center text-xl">The all-in-one solution for your file conversion needs</p>
            <div className=" flex md:flex-row flex-col w-full justify-between items-center px-6 mt-16">
                <div className=" flex flex-col w-[45%] h-full space-y-[30px]">
                    <span className=" space-y-[12px]">
                        <p className=" font-openSans text-[20px] font-semibold">File conversion</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify allows users to convert various file types to multiple formats, including PDFs, images, and audio files. This means that users can quickly and easily transform their files into the format they need.</p>
                    </span>
                    <span className=" space-y-[12px]">
                        <p className=" font-openSans text-[20px] font-semibold">Cloud-based technology</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify uses cloud-based technology to ensure that the conversion process is fast, reliable, and secure. This means that users can access their files from anywhere and be confident that their files are safe and protected.</p>
                    </span>
                    <span className=" space-y-[12px]">
                        <p className=" font-openSans text-[20px] font-semibold">Customizable output settings</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify allows users to customize the output settings for their converted files. This means that users can choose the quality, resolution, size, and other parameters of their files according to their needs. With this feature, users can ensure that their converted files meet their specific requirements and are optimized for their intended use.</p>
                    </span>
                </div>
                <div className=" w-[45%] h-[507px] rounded-[40px] bg-[#e8e8f2] flex justify-center items-center">
                    <Image src={ feature1 } className=" w-full h-auto" alt="" />
                </div>
            </div>
        </div>
        <div className=" block md:hidden mt-7 p-4 text-[#000]">
            <p className=" font-Exo font-semibold text-center text-2xl">Our Features</p>
            <div className=" flex flex-col justify-center items-center mt-6 px-4">
                <div className=" w-full h-[400px] rounded-[22px] bg-[#e8e8f2] flex justify-center items-center">
                    <Image src={ mbfeature1 } className=" w-full h-auto" alt="" />
                </div>
                <span className=" space-y-[10px] mt-[12px]">
                        <p className=" font-openSans text-[16px] font-semibold">File conversion</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify allows users to convert various file types to multiple formats, including PDFs, images, and audio files. This means that users can quickly and easily transform their files into the format they need.</p>
                </span>
                <div className=" w-full h-[400px] rounded-[22px] mt-[18px] bg-[#EEF5F2] flex justify-center items-center">
                    <Image src={ mbfeature2 } className=" w-full h-auto" alt="" />
                </div>
                <span className=" space-y-[10px] mt-[10px]">
                        <p className=" font-openSans text-[16px] font-semibold">Cloud-based technology</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify uses cloud-based technology to ensure that the conversion process is fast, reliable, and secure. This means that users can access their files from anywhere and be confident that their files are safe and protected.</p>
                    </span>
                <div className=" w-full h-[400px] rounded-[22px] mt-[18px] bg-[#E3F1FF] flex justify-center items-center">
                    <Image src={ mbfeature3 } className=" w-full h-auto" alt="" />
                </div>
                <span className=" space-y-[10px] mt-[10px]">
                        <p className=" font-openSans text-[16px] font-semibold">Customizable output settings</p>
                        <p className=" font-openSans text-[14px] font-normal">Convertify allows users to customize the output settings for their converted files. This means that users can choose the quality, resolution, size, and other parameters of their files according to their needs. With this feature, users can ensure that their converted files meet their specific requirements and are optimized for their intended use.</p>
                </span>
            </div>
        </div>
        </>
     );
}
 
export default Features;