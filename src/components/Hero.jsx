import { ReactTyped } from "react-typed";
import rus from '../image/rushabcrop.jpg'
import Header from "./Header";
const Hero = () => {
    return (  
        <div className=" relative h-full w-full flex flex-col  justify-center items-center  ">
            <Header/>

                <div className="bg-black/85 w-full h-full text-zinc-500 flex items-end font-serif
                    justify-center text-6xl md:text-8xl  font-black 
                ">
                    <p className="flex relative justify-start  w-[377px] mb-[-9.9px] md:w-[600px] md:mb-[-17px] ms-2 md:ms-0"><span className="z-10">W</span>e<span className="z-10">b</span>
                    <h1 className="absolute top-2 md:text-3xl font-serif font-normal right-6  md:right-[60px] md:tracking-wide text-[22px]">Hi! I'm Rushab Risal </h1>
                    </p>
                   
                </div>
                <div className="bg-zinc-500/60 w-full h-full  text-black/90 flex items-start 
                    justify-center font-serif text-6xl  md:text-8xl font-black ">
                    <p className="mt-[-20px] ms-2 md:ms-0 md:mt-[-37px]">Developer</p>
                </div>
        </div>
   
    );
}
 
export default Hero;