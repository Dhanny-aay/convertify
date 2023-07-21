"use client"; // This is a client component 👈🏽
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import ConvertAPI from "convertapi";
import { useEffect, useState, useRef } from "react";
import logo from '../images/logo.png';
import rightArrow from '../images/arrow-right.png';
import uploadIcon from '../images/upload.png';
import download from '../images/download.png';
import uploading from '../images/uploading.png';
import leftOne from '../images/left1.png';
import rightOne from '../images/right1.png';
import menu from '../images/menu.png';
import flow from '../images/flow.gif'
import bottomOne from '../images/bottom1.png';
import bottomTwo from '../images/bottom2.png';
import Features from "./feature";
import { motion } from "framer-motion";
import { useScrollContext } from "./context";

const Hero = () => {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);;
    const storage = getStorage(app);

    //my webapp states
    const [uploadFile, setUploadFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [ fileUrl, setFileUrl] = useState('');
    const [ uploadDbox, setUploadDbox] = useState(true);
    const [convertDbox, setConvertDbox] = useState(false);
    const [uploadingDbox, setUploadingDbox] = useState(false);
    const [convertingDbox, setConvertingDbox] = useState(false);
    const [ downloadDbox, setDownloadDbox] = useState(false);
    const [sizeWarning, setsizeWarning] = useState(false);
    const [formatWarn, setFormatWarn] = useState(false);
    const [proposedFormat, setProposedFormat] = useState('');
    const [currFormat, setCurrFormat] = useState('');
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [uploadErrorBox, setUploadErrorBox] = useState(false);
    const [convertErrorBox, setConvertErrorBox] = useState(false);
    const [res, setRes] = useState(false);

    const targetRef = useRef(null);

    // console.log(fileUrl);
    // console.log(fileName);
    // console.log(proposedFormat);
    // console.log(currFormat);

    //function to verify size of file uploaded
    const checkSize = (e) =>{
        const uploadedFile = e.target.files[0];
        const uploadName = e.target.value.slice(12);
        const fileSizeInMB = uploadedFile.size / (1024 * 1024);

        if(fileSizeInMB > 60) {
            setsizeWarning(true)
            // Reset the file input
            e.target.value = null;
            setUploadFile(null);
            setFileName('');
            return;
        };
      
        setUploadFile(uploadedFile);
        setFileName(uploadName);
        setsizeWarning(false);
        setUploadDbox(false); 
        setUploadingDbox(true);
    };


    //function to get extension of uploaded file
    function getFileExtension(filename) {
        const extension = filename.match(/\.[^.]+$/);
        return extension ? extension[0].slice(1) : '';
    }

    //function to check filename and uploadfile state is not empty
    useEffect(()=> {
        if(fileName && uploadFile){
            makeUrl();
            const filename = fileName;
            const extension = getFileExtension(filename);
            setCurrFormat(extension);
        }
    },[fileName, uploadFile])

    //check if download url is available

    useEffect(()=>{
        if(downloadUrl){
            setConvertingDbox(false);
            setDownloadDbox(true);
            setRes(true);
        }
    });

    const reset = ()=>{
        setUploadDbox(true);
        setDownloadDbox(false);
        setConvertingDbox(false);
        setDownloadUrl(null);
        setConvertingDbox(false);
        setConvertDbox(false);
        setRes(false);
    }

    //function to get url for uploaded file
    const makeUrl = ()=>{
        const storageRef = ref(storage, fileName);

        uploadBytes(storageRef, uploadFile)
        .then((snapshot) =>{
            getDownloadURL(storageRef)
            .then((url)=>{
                setFileUrl(url);
                setUploadingDbox(false);
                setConvertDbox(true);
            })
            .catch((error) => {
                console.error('Error retrieving download URL:', error);
                setUploadErrorBox(true);
                
              })
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
            setUploadErrorBox(true);
        });
    };

    //conversion function
    const convertapi = new ConvertAPI(process.env.NEXT_PUBLIC_CONVERTAPI_KEY);

    const convert = ()=>{

        if(!proposedFormat){
            setFormatWarn(true);
        }
        else if(proposedFormat){
            setFormatWarn(false);
            setConvertDbox(false);
            setConvertingDbox(true);
            convertapi.convert(proposedFormat, { File: fileUrl }, currFormat)
            .then(function(result) {
                // get converted file url
                console.log("Converted file url: " + result.file.url);
                setDownloadUrl(result.file.url);
            })
            .then(function(file) {
                console.log("File saved: ");
            })
            .catch(function(response) {
                // console.error(e.toString());
                console.log(response)
                setConvertErrorBox(true);
                reset();
            });
        }
    }

    const scrollToPlace = () => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth', 
            block: 'start', 
          });
        }
    };

    const { scrollToElement, targetRefs } = useScrollContext();
    const isMobile = window.innerWidth < 768;

    const handleScrollClick1 = () => {
        scrollToElement(targetRefs.targetElement1);
        if (typeof window !== 'undefined'){
            if(isMobile){
                overlay();
            }
        }
    };
    const handleScrollClick2 = () => {
      scrollToElement(targetRefs.targetElement2);
      if (typeof window !== 'undefined'){
        if(isMobile){
            overlay();
        }
    }
    };
    const handleScrollClick3 = () => {
      scrollToElement(targetRefs.targetElement3);
      if (typeof window !== 'undefined'){
        if(isMobile){
            overlay();
        }
    }
    };
    

    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    };

    return ( 
        <>
        <div id="overlay" className=" w-full bg-[#121212d3] backdrop-blur-sm h-[400px] flex justify-center items-center -translate-y-[500px] shadow transition-all duration-500 fixed z-[1]">
            <div className=" flex flex-col justify-center items-center space-y-5">
                <p onClick={handleScrollClick1} className=" font-medium cursor-pointer text-base font-openSans">How it works</p>
                <p onClick={handleScrollClick3} className=" font-medium cursor-pointer text-base font-openSans">Features</p>
                <p onClick={handleScrollClick2} className=" font-medium cursor-pointer text-base font-openSans">About</p>
            </div>
        </div>
        { uploadErrorBox && <div className=" bg-[#1212128f] backdrop-blur-[5px] flex justify-center px-3 items-center w-full h-[100vh] fixed top-0 left-0 z-[999999]">
            <motion.div 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            className=" h-[250px] w-full md:w-[450px] bg-[#f1f1f1] rounded-xl p-5 relative flex-col flex justify-center items-center space-y-3">
                <p className=" font-Exo text-xl font-semibold text-red-500 text-center">Error!!!</p>
                <p className=" text-[#121212] font-Exo text-base font-medium capitalize text-center">There was an error uploading your file</p>
                <p className="text-[#7c7b7b] font-Exo text-sm font-normal text-center">Your internet connection may be the issue. Please try again later when you have a stronger connection</p>
                <button onClick={()=>{setUploadErrorBox(false)}} className=" bg-[#121212] border border-black hover:bg-transparent hover:text-black transition-all py-1 px-2 rounded-md font-Exo text-sm absolute bottom-5 right-5 shadow-sm">Okay!</button>
            </motion.div>
            </div>}
        { convertErrorBox && <div className=" bg-[#1212128f] backdrop-blur-[5px] flex justify-center px-3 items-center w-full h-[100vh] fixed top-0 left-0 z-[999999]">
            <motion.div 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            className=" h-[250px] w-full md:w-[450px] bg-[#f1f1f1] rounded-xl p-5 relative flex-col flex justify-center items-center space-y-3">
                <p className=" font-Exo text-xl font-semibold text-red-500 text-center">Error!!!</p>
                <p className=" text-[#121212] font-Exo text-base font-medium capitalize text-center">There was an error converting your file</p>
                <p className="text-[#7c7b7b] font-Exo text-sm font-normal text-center">Your internet connection may be the issue. Or we don't support the parameters for your conversion</p>
                <button onClick={()=>{setConvertErrorBox(false)}} className=" bg-[#121212] border border-black hover:bg-transparent hover:text-black transition-all py-1 px-2 rounded-md font-Exo text-sm absolute bottom-5 right-5 shadow-sm">Okay!</button>
            </motion.div>
            </div>}
        <div className=" p-4 md:p-6">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.4}}
            className=" w-full pt-5 md:pt-6  bg-[#121212] pb-20 md:pb-24 rounded-[25px] relative">
                <Image src={ leftOne } className=' hidden lg:block absolute left-0 w-[13%] top-[20%]' alt="" />
                <Image src={ bottomOne } className=' hidden lg:block absolute bottom-0 w-[18%] left-[13%]' alt="" />
                <Image src={ rightOne } className=' hidden lg:block absolute top-[15%] w-[11%] right-0' alt="" />
                <Image src={ bottomTwo } className=' hidden lg:block rounded-br-[50px] absolute bottom-0 w-[18%] right-0' alt="" />
                <div className=' flex flex-row items-center justify-between w-full px-[30px] md:px-[50px]'>
                    <span className=" flex space-x-2 items-center justify-center">
                        <Image src={ logo } className=" w-5 h-4 md:w-7 md:h-auto" alt="" />
                        <p className=" text-lg md:text-3xl font-semibold font-Exo text-[#f1f1f1]">Convertify</p>
                    </span>
                    <span className='hidden lg:flex space-x-8 items-center'>
                        <p onClick={handleScrollClick1} className=' cursor-pointer text-lg font-normal text-[#f1f1f1] font-openSans'>How it works</p>
                        <p onClick={handleScrollClick2} className=' cursor-pointer text-lg font-normal text-[#f1f1f1] font-openSans'>About</p>
                        <p onClick={handleScrollClick3} className=' cursor-pointer text-lg font-normal text-[#f1f1f1] font-openSans'>Features</p>
                    </span>
                    <span onClick={ scrollToPlace } className=' cursor-pointer w-[155px] h-[55px] pl-5 pr-2 bg-[#121212] rounded-[60px] hidden md:flex flex-row border border-[#f1f1f1] justify-between items-center'>
                        <p className=' text-base font-openSans font-normal text-[#f1f1f1]'>Try it Out</p>
                        <button className=' w-[35px] h-[35px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                            <Image src={ rightArrow } alt="" />
                        </button>
                    </span>
                    <Image src={ menu } onClick={ overlay } className=" z-[999999999] block md:hidden" alt=""/>
                </div>
                <div className=' flex flex-col text-[#f1f1f1] justify-center items-center text-center mt-[100px] px-[15%]'>
                    <p className=' text-[32px] md:text-[64px] font-Exo font-medium leading-[38px] md:leading-[76px]'>The ultimate file conversion tool</p>
                    <p className=' font-openSans font-normal text-sm md:text-xl mt-6'>Convert all your files to any format you need with Convertify's powerful conversion engine</p>
                    <div className='mt-[64px] md:mt-[78px] border border-[#f1f1f1] border-dashed rounded-[50px] p-3 h-[210px] md:w-[310px] w-[260px]'>
                        <div ref={targetRef} className=' w-full h-full bg-[#f1f1f1] rounded-[40px] flex flex-col justify-center items-center relative'>
                            { uploadDbox && <>
                                <button type="file" className=' w-[60px] h-[60px] rounded-[50%] bg-[#121212] flex justify-center items-center relative'>
                                    <input type="file" onChange={ checkSize } className=" w-[60px] h-[60px] cursor-pointer z-50 opacity-0" name="" id="" />
                                    <Image src={ uploadIcon } className=" absolute z-10 top-3 left-[10px]" alt="" />
                                </button>
                                <p className=' font-openSans text-[#121212] font-normal text-base md:text-xl mt-1'>Upload Your File</p>
                                <p className=' font-openSans text-[#121212] font-normal text-[10px] md:text-xs mt-1'>Up to 60MB</p>
                            </>}
                            { uploadingDbox && <>
                                <button className=' w-[50px] h-[50px] rounded-[50%] bg-[#121212] flex justify-center items-center  cursor-default absolute top-8'>
                                    <Image src={ uploading } className=" w-5 h-5" alt="" />
                                </button>
                                <Image src={ flow } className=" w-auto h-auto mt-14"  alt="" />
                                <p className=' font-openSans text-[#121212] font-normal text-sm absolute top-36'>Uploading...</p>
                            </>}
                            { convertDbox && <>
                                <button type="file" className=' w-[50px] h-[50px] rounded-[50%] bg-[#121212] flex justify-center items-center relative cursor-default'>
                                    <Image src={ logo } className=" w-5 h-5" alt="" />
                                </button>
                                <p className=' font-openSans text-[#121212] font-normal  text-sm md:text-sm mt-2'>{ fileName }</p>
                                <button  onClick={ convert } className=' font-openSans text-[#121212] font-normal text-sm md:text-base mt-3 border border-[#e3e3e3] rounded-[20px] px-4 py-1 bg-[#f4f4f4]'>Convert File</button>
                            </>}
                            { convertingDbox && <>
                                <button className=' w-[50px] h-[50px] rounded-[50%] bg-[#121212] flex justify-center items-center cursor-default absolute top-8'>
                                    <Image src={ logo } className=" w-5 h-5" alt="" />
                                </button>
                                <Image src={ flow } className=" w-auto h-auto mt-14"  alt="" />
                                <p className=' font-openSans text-[#121212] font-normal text-sm  absolute top-36'>Converting...</p>
                            </>}
                            { downloadDbox && <>
                                <button type="file" className=' w-[50px] h-[50px] rounded-[50%] bg-[#121212] flex justify-center items-center relative cursor-default'>
                                    <Image src={ download } className=" w-5 h-5" alt="" />
                                </button>
                                <a href={ downloadUrl }><button className=' font-openSans text-[#121212] font-normal text-sm md:text-base mt-3 border border-[#e3e3e3] rounded-[20px] px-4 py-1 bg-[#f4f4f4]'>Download File</button></a>
                            </>}
                        </div>
                        { res && <button onClick={ reset } className=" mt-6 border-b font-openSans font-normal text-sm hover:border-[#a1a1a1] transition-all hover:text-[#a1a1a1]">Reset</button>}
                    </div>
                    { sizeWarning && <p className=" text-xs font-Exo font-semibold mt-1">*File size exceeds the limit of 60MB</p>}
                    <select onChange={(e)=>{setProposedFormat(e.target.value)}} className=' w-[310px] bg-[#f1f1f1] rounded-[50px] mt-16 text-[#000] py-2 px-4 font-openSans font-light text-sm' name="" id="">
                        <option className=" " value="">Choose conversion file format</option>
                        <option className=" uppercase" value="jpg">JPG</option>
                        <option className=" uppercase" value="pdf">PDF</option>
                        <option className=" uppercase" value="png">PNG</option>
                        <option className=" uppercase" value="svg">SVG</option>
                        <option className=" uppercase" value="tiff">tiff</option>
                        <option className=" uppercase" value="webp">webp</option>
                        <option className=" uppercase" value="pdfa">pdfa</option>
                        <option className=" uppercase" value="xls">xls</option>
                        <option className=" uppercase" value="xlsx">xlsx</option>
                        <option className=" uppercase" value="doc">doc</option>
                        <option className=" uppercase" value="docx">docx</option>
                        <option className=" uppercase" value="html">html</option>
                        <option className=" uppercase" value="txt">txt</option>
                        <option className=" uppercase" value="xml">xml</option>
                        <option className=" uppercase" value="csv">csv</option>
                        <option className=" uppercase" value="ocr">ocr</option>
                        <option className=" uppercase" value="zip">zip</option>
                    </select>
                    { formatWarn && <p className=" text-xs font-openSans text-red-600 font-normal mt-1">*Please select a format</p>}
                </div>
            </motion.div>
        </div>
        </>
     );
}
 
export default Hero;