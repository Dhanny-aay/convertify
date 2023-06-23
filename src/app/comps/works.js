const Works = () => {
    return ( 
        <>
        <div className=" md:mt-14 p-4 mt-7 md:p-6 text-[#000]">
            <p className=" font-Exo font-semibold text-center text-2xl md:text-4xl">How it works</p>
            <p className="mt-2 font-openSans font-normal text-center text-base md:text-xl">Find out how to use Convertify for all their file conversion needs</p>
            <div className=" flex flex-row space-x-4 mt-14 px-6 justify-center items-center">
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-2xl">1</button>
                    <p className=" font-openSans text-xl font-semibold">Upload file</p>
                </span>
                <button className=" w-[100px] h-0 border-t-2 cursor-default border-black -mt-6 border-dashed"></button>
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-2xl">2</button>
                    <p className=" font-openSans text-xl font-semibold">Choose file type to convert to</p>
                </span>
                <button className=" w-[100px] h-0 border-t-2 cursor-default border-black -mt-6 border-dashed"></button>
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-2xl">3</button>
                    <p className=" font-openSans text-xl font-semibold">Click Convert</p>
                </span>
                <button className=" w-[100px] h-0 border-t-2 cursor-default border-black -mt-6 border-dashed"></button>
                <span className="flex flex-col items-center space-y-3">
                    <button className=" w-[50px] h-[50px] rounded-[50%] bg-black text-center text-[#fff] font-openSans text-2xl">4</button>
                    <p className=" font-openSans text-xl font-semibold">Download converted file</p>
                </span>
            </div>
        </div>
        </>
     );
}
 
export default Works;