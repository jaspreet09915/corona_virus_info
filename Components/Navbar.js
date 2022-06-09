import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row bg-black text-white  sticky top-0 z-30  align-middle'>
        <div className=" text-white bg-black hover:text-black hover:bg-white cursor-pointer font-serif font-bold text-base py-4 my-1  px-4 ml-3 mx-2 home rounded-md">Home</div>
        <div className="text-white bg-black hover:text-black hover:bg-white cursor-pointer font-serif font-bold text-base py-4 my-1 px-4 mx-2 About rounded-md">About</div>
        <div className="text-white bg-black hover:text-black hover:bg-white cursor-pointer font-serif font-bold text-base py-4 my-1  px-4 mx-2 MHFW rounded-md">MHFW Website</div>
        <div className="text-white bg-black hover:text-black hover:bg-white cursor-pointer font-serif font-bold text-base py-4 my-1  px-4 mx-2 Hospital rounded-md">Hospital</div>
        <div className="text-white bg-black hover:text-black hover:bg-white cursor-pointer font-serif font-bold text-base py-4 my-1  px-4 mx-2 Contact rounded-md">Contact Us</div>
    </div>
  )
}

export default Navbar