import Logo from "./Logo";
import NavContent from "./NavContent";

const Header = ({handleSideBar}) => {
    return (
      <nav className="absolute top-0 right-0 left-0 mt-3 flex justify-between md:justify-center   items-center  text-white  z-10 ">
        <Logo/>
        <button onClick={handleSideBar}><i className={`fa-solid fa-bars md:hidden 
         p-3 `}></i></button> 
         <div className="hidden md:flex">
            <NavContent/>

         </div>
      </nav>
    );
}
 
export default Header;