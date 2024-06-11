import { ReactTyped } from "react-typed";

const Landing = () => {
    return ( 
        <div className="w-full h-full bg-black flex flex-col justify-center items-center text-white">
            <h1 className="gwendolyn-bold text-4xl">
                <ReactTyped strings={["Welcome to Rushab's portfolio"]} typeSpeed={40} cursorChar="!" showCursor={true}/>
            </h1>
            <a href="#hero">Explore</a>
        </div>
      );
}
 
export default Landing;