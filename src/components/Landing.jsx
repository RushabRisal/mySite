import { ReactTyped } from "react-typed";

const Landing = () => {
    return ( 
        <div className="w-full h-full bg-black/90 flex flex-col justify-center items-center text-white">
            <h1 className="font-serif text-xl md:text-3xl">
                <ReactTyped strings={["Welcome to Rushab's portfolio"]} typeSpeed={40} cursorChar="!" showCursor={true}/>
            </h1>
            <a href="#hero" className="font-serif text-xl underline">Explore</a>
        </div>
      );
}
 
export default Landing;