"use client"; // This is a client component 👈🏽
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import ConvertAPI from "convertapi";
import { useEffect, useState } from "react";
import logo from '../images/logo.png';
import rightArrow from '../images/arrow-right.png';
import uploadIcon from '../images/upload.png';
import leftOne from '../images/left1.png';
import rightOne from '../images/right1.png';
import menu from '../images/menu.png';
import bottomOne from '../images/bottom1.png';
import bottomTwo from '../images/bottom2.png';

const Hero = () => {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC0orHDJb8M6MIg_P4PrnFS6rXGDr476mA",
        authDomain: "bloggy-2d806.firebaseapp.com",
        projectId: "bloggy-2d806",
        storageBucket: "bloggy-2d806.appspot.com",
        messagingSenderId: "243234796538",
        appId: "1:243234796538:web:e4cd230612d7e07793aa43",
        measurementId: "G-5KHV35BWT2"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);;
    const storage = getStorage(app);

    const [uploadFile, setUploadFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [ fileUrl, setFileUrl] = useState('');
    const [ uploadDbox, setUploadDbox] = useState(true);
    const [convertDbox, setConvertDbox] = useState(false);
    const [sizeWarning, setsizeWarning] = useState(false);
    const [proposedFormat, setProposedFormat] = useState('');
    const [currFormat, setCurrFormat] = useState('')

    console.log(fileUrl);
    console.log(fileName);
    console.log(proposedFormat);
    console.log(currFormat);

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
        setsizeWarning(false)
    };

    function getFileExtension(filename) {
        const extension = filename.match(/\.[^.]+$/);
        return extension ? extension[0].slice(1) : '';
    }

    useEffect(()=> {
        if(fileName && uploadFile){
            makeUrl();
            const filename = fileName;
            const extension = getFileExtension(filename);
            setCurrFormat(extension);
        }
    },[fileName, uploadFile])

    const makeUrl = ()=>{
        const storageRef = ref(storage, fileName);

        uploadBytes(storageRef, uploadFile)
        .then((snapshot) =>{
            getDownloadURL(storageRef)
            .then((url)=>{
                setFileUrl(url);
                setUploadDbox(false);
                setConvertDbox(true);
            })
            .catch((error) => {
                console.error('Error retrieving download URL:', error);
              });
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
        });
    };


    const convertapi = new ConvertAPI('OtyktDP60XShcQyP');

    const convert = ()=>{
        if(!proposedFormat){
            alert("Please select a format");
        }
        else if(proposedFormat){
            convertapi.convert(proposedFormat, { File: fileUrl }, currFormat)
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
                    <span className=' w-[180px] h-[65px] pl-5 pr-2 bg-[#121212] rounded-[60px] hidden md:flex flex-row border border-[#f1f1f1] justify-between items-center'>
                        <p className=' text-lg font-openSans font-normal text-[#f1f1f1]'>Try it Out</p>
                        <button className=' w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                            <Image src={ rightArrow } alt="" />
                        </button>
                    </span>
                    <Image src={ menu } className="block md:hidden" alt=""/>
                </div>
                <div className=' flex flex-col text-[#f1f1f1] justify-center items-center text-center mt-[100px] px-[15%]'>
                    <p className=' text-[32px] md:text-[64px] font-Exo font-medium leading-[38px] md:leading-[76px]'>The ultimate file conversion tool</p>
                    <p className=' font-openSans font-normal text-sm md:text-xl mt-6'>Convert all your files to any format you need with Convertify's powerful conversion engine</p>
                    <div className='mt-[64px] md:mt-[78px] border border-[#f1f1f1] border-dashed rounded-[50px] p-3 h-[210px] md:w-[310px] w-[260px]'>
                        <div className=' w-full h-full bg-[#f1f1f1] rounded-[40px] flex flex-col justify-center items-center'>
                            { uploadDbox && <>
                                <button type="file" className=' w-[60px] h-[60px] rounded-[50%] bg-[#121212] flex justify-center items-center relative'>
                                    <input type="file" onChange={ checkSize } className=" w-[60px] h-[60px] cursor-pointer z-50 opacity-0" name="" id="" />
                                    <Image src={ uploadIcon } className=" absolute z-10 top-3 left-[10px]" alt="" />
                                </button>
                                <p className=' font-openSans text-[#121212] font-normal text-base md:text-xl mt-1'>Upload Your File</p>
                                <p className=' font-openSans text-[#121212] font-normal text-[10px] md:text-xs mt-1'>Up to 60MB</p>
                            </>}
                            { convertDbox && <>
                                <button type="file" onClick={ convert } className=' w-[60px] h-[60px] rounded-[50%] bg-[#121212] flex justify-center items-center relative'>
                                    <Image src={ logo } className=" w-7 h-7" alt="" />
                                </button>
                                <p className=' font-openSans text-[#121212] font-normal text-sm md:text-lg mt-1'>Convert Your File</p>
                                <p className=' font-openSans text-[#121212] font-normal text-sm md:text-lg mt-1'>{ fileName }</p>
                            </>}
                        </div>
                    </div>
                    { sizeWarning && <p className=" text-xs font-Exo font-semibold mt-1">*File size exceeds the limit of 60MB</p>}
                    <select onChange={(e)=>{setProposedFormat(e.target.value)}} className=' w-[310px] bg-[#f1f1f1] rounded-[50px] mt-4 text-[#000] py-2 px-4 font-openSans font-light text-sm' name="" id="">
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
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;