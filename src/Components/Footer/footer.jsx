import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

var footerData = [
  {
    id: 1,
    title: "Home",
    data1: "about us",
    data2: "bookig",
  },
  {
    id: 2,
    title: "Contact Us",
    data1: "0703169545",
    data2: "contact@vanlang.tour",
  },
  {
    id: 3,
    title: "follow Us",
    data1: "facebook",
    data2: "instagram",
  },
];
const Footer = () => {
  return (
    <div className="bg-black lg:h-screen h-full w-screen flex flex-col gap-y-20 lg:px-50 px-10 py-20">
      <div className="flex flex-col gap-y-5 ">
        <h1 className="text-white text-3xl font-bold uppercase lg:w-1/2 w-full" >
          We are very happy that you choose us
        </h1>
        <p className="text-white">
          Thank you for trusting us for choosing trips, exploring, traveling
          with relatives and friends or for your own experiences.
        </p>
      </div>

      <div className="flex justify-between lg:flex-row flex-col">
        {footerData.map((data) => (
          <div key={data.id} className="flex flex-col gap-y-5">
            <h1 className="text-[#CFB165] text-2xl font-bold">{data.title}</h1>
            {data.id === 3 ? (
              <p className="text-white flex items-center gap-x-1">
<MdOutlineFacebook />
{data.data1}
              </p>
            ) : (
              <p className="text-white">{data.data1}</p>
            )}
            {data.id === 3 ? (
              <p className="text-white flex items-center gap-x-1">
                <IoLogoInstagram />
                {data.data2}
              </p>
            ) : (
              <p className="text-white">{data.data2}</p>
            )}
          </div>
        ))}
      </div>

      <hr className="h-0.5 bg-gray-600" />
      <div>
        <p className="text-white">&copy; VanLangTour 2023</p>
      </div>
    </div>
  );
};

export default Footer;
