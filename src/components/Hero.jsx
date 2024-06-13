import { ReactTyped } from "react-typed";
import rus from '../image/rushabcrop.jpg'
import Header from "./Header";
const Hero = () => {
    return (  
        <div className=" relative h-full w-full flex flex-col justify-center items-center  ">
            <Header/>
            <div className="bg-black/85 w-full h-full text-zinc-500 flex items-end font-serif
                justify-center text-4xl md:text-8xl  font-black 
            ">
                <p className="flex justify-start  w-[285px] mb-[-9.9px] md:w-[600px] md:mb-[-17px]"><span className="z-10">W</span>e<span className="z-10">b</span></p> 
            </div>
            <div className="bg-zinc-500/60 w-full h-full  text-black/90 flex items-start 
                justify-center font-serif text-5xl  md:text-8xl font-black ">
                <p className="mt-[-20px]  md:mt-[-37px]">Developer</p>
            </div>
        </div>
    );
}
 
export default Hero;