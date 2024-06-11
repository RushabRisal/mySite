import Logo from "./Logo";

const Header = () => {
    return (
      <nav className="absolute top-0 right-0 left-0  flex justify-between md:justify-center   items-center  text-white border-solid border-b-[1px]  border-white/50 container mx-auto">
        <Logo/>
        <i class="fa-solid fa-bars md:hidden
         p-3"></i>
        <ul className="hidden md:flex gwendolyn-bold text-xl">
            <l className="p-3">Homei</l>
            <l className="p-3">About</l>
            <l className="p-3">Skills</l>
            <l className="p-3   ">Contact</l>
        </ul>
      </nav>
    );
}
 
export default Header;