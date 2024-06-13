import Logo from "./Logo";
import NavContent from "./NavContent";

const Header = () => {
    return (
      <nav className="absolute top-0 right-0 left-0  flex justify-between md:justify-center   items-center  text-white    ">
        <Logo/>
        <button ><i class="fa-solid fa-bars md:hidden
         p-3"></i></button> 
        <NavContent/>
      </nav>
    );
}
 
export default Header;