
const Hero = ({view}) => {
    return (  
        <div className={` relative h-full w-full flex flex-col  justify-center items-center `}>
            
                <div className="bg-[#161A30] w-full h-full text-[#EEEEEE] flex items-end
                    justify-center text-6xl md:text-8xl  font-black 
                ">
                    <p className="flex relative justify-start  w-[377px] mb-[-9.9px] md:w-[600px] md:mb-[-17px] ms-6 md:ms-12"><span className="z-10">W</span>e<span className="z-10">b</span>
                    <h1 className="absolute top-2 md:text-3xl font-normal right-9  md:right-[100px] md:tracking-wide text-[22px]">Hi! I'm Rushab Risal </h1>
                    </p>
                   
                </div>
                <div className="bg-[#F0ECE5] w-full h-full  text-[
                    #31363F] flex items-start relative
                    justify-center text-6xl  md:text-8xl font-black ">
                    <p className="mt-[-20px] ms-2 md:ms-0 md:mt-[-30px] relative">Developer
                        <h1 className="absolute bottom-[-1rem] md:bottom-[-1.5rem] md:tracking-wide left-[-2.5rem] md:left-[-2rem] drop-shadow-2xl text-sm md:text-lg">
                            Minimalism is a form of attraction.
                        </h1>
                    </p>
                    <ul className="absolute bottom-[120px] md:bottom-[130px] left-[40px] md:left-[100px] text-[16px] md:text-[23px] blur-[1px]  font-normal text-[#222831]">
                        <li>Simplicity</li>
                        <li>Curiosity</li>
                        <li>Dedication</li>
                        <li>Honesty</li>
                    </ul>
                </div>
        </div>
   
    );
}
 
export default Hero;