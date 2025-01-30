import React from "react";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const TrainDetails = () => {
  return (
    <div className="lg:w-full w-[90%] flex sm:flex-row flex-col bg-white justify-between items-center rounded-2xl overflow-hidden relative">
      <div className="md:p-15 p-5 flex lg:gap-x-10 gap-x-5 items-center">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold">12:00</h1>
          <h1 className="md:text-4xl text-2xl font-bold text-gray-400">Sai Gon</h1>
        </div>
        <FaTrainSubway className="text-[25px]" />
        <div>
          <h1 className="md:text-4xl text-2xl font-bold">12:00</h1>
          <h1 className="md:text-4xl text-2xl font-bold text-gray-400">Ha Noi</h1>
        </div>
        <div>
          <p className="font-bold py-1">first class - 24hrs00mins travel</p>
          <select className="outline-0 border-0 font-bold text-[#d28147]">
            <option>Details</option>
          </select>
        </div>
        <div>
          <h1 className="font-bold md:text-[25px] text-[10px] absolute md:bottom-5 sm:bottom-0.5 bottom-11 md:right-20 sm:right-15 right-10">
            price <span className="text-[#dba721] mr-1">1,000,000</span>VND
          </h1>
        </div>
      </div>
      <div className="sm:h-full h-0 sm:py-10 py-5 sm:px-5 px-100  bg-[#CFB165] flex items-center">
        <FaCircleChevronRight className="md:text-[30px] text-[18px] text-black" />
      </div>
    </div>
  );
};

export default TrainDetails;
