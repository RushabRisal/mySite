import Logo from "./Logo";

const Header = () => {
    return (
      <nav className="absolute top-0 right-0 left-0  flex justify-between md:justify-center   items-center  text-white    ">
        <Logo/>
        <i class="fa-solid fa-bars md:hidden
         p-3"></i>
        <ul className="hidden md:flex font-serif text-md">
            <l className="p-2">Home</l>
            <l className="p-2">About</l>
            <l className="p-2">Skills</l>
            <l className="p-2   ">Contact</l>
        </ul>
      </nav>
    );
}
 
export default Header;