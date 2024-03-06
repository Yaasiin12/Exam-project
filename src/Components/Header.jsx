import {useState} from 'react'

function Header(){
    const [isOpen , setIsOpen] = useState(false)
    const handleIsOpen = () =>
{
    setIsOpen(true)
}
const handleClose = () => {
    setIsOpen(false)
}
  return(
        <div className="bg-yellow-400 w-full sm:h-[550px] h-[760px] ">
        <div className=" p-5 flex justify-between ">
            <h1 className="font-semibold  text-center text-3xl">Code Xalka</h1>
            <i style={{display : isOpen == true ? "none" : " "}} onClick={handleIsOpen} class="fa-solid fa-bars text-5xl font-bold sm:hidden"></i>
            <i onClick={handleClose} style={{display : isOpen == true ? "block" : "none"}} class="fa-solid fa-x text-5xl font-bold"></i>
             <ul className="hidden sm:flex gap-16 text-2xl ">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
             </ul>
             
             

          </div>
          <div className="">
              <ul style={{display : isOpen == true ? "flex" : "" }} className="hidden absolute w-full bg-white flex-col space-y-2 ml-[10px]  gap-8 text-2xl ">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
             </ul>
          </div>

          <div className='mt-[150px] '>
            <h1 className="font-bold text-8xl px-[50px]">You Dream And We Build</h1>
            <p className='ml-[50px] mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, asperiores.</p>
            <button className='bg-white rounded px-[60px] py-5 text-2xl ml-[50px] mt-[20px]'>Explore More</button>
          </div>
        </div>


    )
}
export default Header;