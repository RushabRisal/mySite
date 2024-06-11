const Header = () => {
    return (
      <nav className="absolute bg-fixed border-solid border-white/30 border-b-[1px] md:border-l-[1px] md:border-b-0 right-0 md:left-[96%]  .own backdrop-blur-md top-0 md:bottom-0 left-0 flex justify-end items-center md:justify-center ">
        <ul className="flex flex-row md:flex-col">
            <l className="p-2"><i class="fa-solid text-sm fa-house"></i></l>
            <l className="p-2"><i class="fa-solid text-sm fa-address-card"></i></l>
            <l className="p-2"><i class="fa-sharp fa-solid text-sm fa-code"></i></l>
            <l className="p-2 mr-2 md:mr-0 "><i class="fa-solid fa-address-book"></i></l>
        </ul>
      </nav>
    );
}
 
export default Header;