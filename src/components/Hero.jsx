import { ReactTyped } from "react-typed";
import rus from '../image/rushabcrop.jpg'
const Hero = () => {
    return (  
        <div className="flex flex-col-reverse md:flex-row container justify-between items-center w-full">
            <div className="mt-10">

                <h1  className="font-md  text-md text-white/85 md:text-2xl">
                    Minimulistic is the way of Attraction
                </h1>
                <h1 className="text-xl font-md md:font-bold text-white md:text-2xl">
                    Hi! I'm Rushab Risal a{" "}
                <ReactTyped  strings={["Web Developer"]}      typeSpeed={80} backSpeed={20} cursorChar="!" showCursor={true}/>

                </h1>
            </div>
            {/* <div className="w-75 h-64 ">
                <img src={rus} alt="" className="w-full h-full rounded-xl" />
            </div> */}

        </div>
    );
}
 
export default Hero;