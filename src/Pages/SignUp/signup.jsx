import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import banner2 from "../../assets/banner2.svg";
import numberSlide from "../../assets/number-slide.svg";
import { VscTriangleRight } from "react-icons/vsc";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-hidden">
          <Navbar />

          <div
            className="h-[150vh] w-screen flex justify-center lg:items-center pt-20 md:px-10 px-2"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <form className="bg-white opacity-75 pt-20 rounded-3xl sm:w-[900px] w-full sm:h-[800px] h-[105vh]">
              <img src={numberSlide} alt="loading" className=" w-full" />
                 {/* <div className="flex w-full">
                  <div className="w-1/3 flex justify-center py-4 bg-[#CFB165] text-white">1</div>
                  <div className="w-1/3 flex justify-center py-4 bg-[#9B844A] text-white">2</div>
                  <div className="w-1/3 flex justify-center py-4 bg-[#5B4E2B] text-white">3</div>
                 </div> */}
              <div className="sm:p-10 p-5 flex flex-col gap-y-5 w-full items-start">
                <div>
                  <h1 className="font-bold text-2xl mb-1">
                    Ready to join Van Lang Tour? Let’s get started
                  </h1>
                  <p>
                    We need a few details about you to create your account
                    profile
                  </p>
                </div>

                <div className="w-full flex flex-col items-start gap-y-5">
                  <label className="font-bold">Preferred Language *</label>
                  <select className="border-0 outline-0 lg:w-1/5 w-2/5 text-white bg-[#CFB165] p-2 rounded-[5px]">
                    <option>English</option>
                  </select>
                </div>

                <div>
                  <p className="font-bold">Name *</p>
                  <p>
                    In order to earn and redeem points, your name must match the
                    name on your government issued ID photo used when
                    travelling.
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <input
                    type="text"
                    placeholder="Last name (exmaple : NGUYEN)"
                    className="lg:w-1/3 w-[45%] border-0 outline-0 text-white bg-[#CFB165] p-2 rounded-[5px]"
                  />
                  <input
                    type="text"
                    placeholder="Middle name"
                    className="lg:w-1/3 w-[45%]  border-0 outline-0 text-white bg-[#CFB165] p-2 rounded-[5px]"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <input
                    type="text"
                    placeholder="First name"
                    className="lg:w-1/3 w-[45%] border-0 outline-0 text-white bg-[#CFB165] p-2 rounded-[5px]"
                  />
                  <select className="lg:w-1/3 w-[45%] border-0 outline-0 text-white bg-[#CFB165] p-2 rounded-[5px]">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="w-full flex flex-col gap-y-5">
                  <label className="font-bold">Date of birth *</label>
                  <input
                    type="date"
                    placeholder="Birthday DD/MM/YYYY"
                    className="w-full border-0 outline-0 text-white bg-[#CFB165] p-2 rounded-[5px]"
                  />
                </div>

                <div className="w-full flex justify-end">
                <button className="py-2 px-10 rounded cursor-pointer bg-[#CFB165] text-black">
                 Next
                </button>
                </div>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Signup;
