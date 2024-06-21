import NavContent from './NavContent'
const SideBar = ({view,handleSideBar}) => {
    return (
        <div className={`fixed right-0 top-0 bottom-0 w-64 bg-black/80 backdrop-blur-lg flex flex-col justify-center items-center z-20
            transition-transform duration-500 ease-in-out ${view? 'translate-x-0':'translate-x-full'}
        `}>
            <button className='fixed top-0 left-0 p-3' onClick={handleSideBar}>
                <i class="fa-solid fa-xmark text-white text-lg"></i>
            </button>
           <NavContent/>
        </div>
      );
}
 
export default SideBar;