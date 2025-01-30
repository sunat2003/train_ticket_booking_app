import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Activity = () => {
  return (
    <div className="flex lg:justify-between justify-around items-end py-15 bg-[rgba(0,0,0,0.8)] text-white lg:px-50 px-5 w-screen">
      <div className="flex flex-col gap-y-5">
        <label htmlFor="">Keyword</label>
        <div className="flex items-center bg-[#CFB165] md:py-2 py-1 md:px-1 px-0 rounded">
          <input type="text" className="md:w-30 w-10 outline-0 border-0 px-1" />
          <IoMdSearch className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <label htmlFor="">Activity</label>
        <div className="flex items-center bg-[#CFB165] md:py-2 py-1 md:px-1 px-0 rounded">
          <select className="md:w-30 w-10 outline-0 border-0 px-1">
            <option value="">Any</option>
            <option value="">Any</option>
          </select>
          <IoIosArrowDropdownCircle />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <label htmlFor="">Destination</label>
        <div className="flex items-center bg-[#CFB165] md:py-2 py-1 md:px-1 px-0 rounded">
          <select className="md:w-30 w-10 outline-0 border-0 px-1">
            <option value="">Any</option>
            <option value="">Any</option>
          </select>
          <IoIosArrowDropdownCircle />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <label htmlFor="">Date</label>
        <div className="flex items-center bg-[#CFB165] md:py-2 py-1 md:px-1 px-0 rounded">
          <input type="date" className="md:w-30 w-10 outline-0 border-0 px-1" />
        </div>
      </div>
      <button className="md:py-2 py-1 md:px-1 px-2 rounded cursor-pointer bg-[#CFB165] text-black outline-0 border-0">Search</button>
    </div>
  )
}

export default Activity ;
