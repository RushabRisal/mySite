import { ReactTyped } from "react-typed";

const Hero = () => {
    return (  
        <div className="font-serif flex flex-col leading-5 justify-start w-[60%]  ">
            <h1  className="font-md text-md text-gray-400/70 md:text-2xl">
                Minimulistic is the way of Attraction
            </h1>
            <h1 className="text-xl font-md md:font-bold md:text-2xl">
                Hi! I'm Rushab Risal a{" "}
               <ReactTyped  strings={["Web Developer"]}      typeSpeed={20} backSpeed={20} cursorChar="!" showCursor={true}/>

            </h1>
        </div>
    );
}
 
export default Hero;