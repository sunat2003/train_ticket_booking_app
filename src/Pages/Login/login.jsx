import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import banner2 from "../../assets/banner2.svg";
import logo from "../../assets/brand-2.svg";

const Login = () => {
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
            className="w-screen h-screen flex justify-center items-center pt-20 md:px-10 px-2"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <form className="bg-white opacity-75 p-15 rounded-2xl flex flex-col items-start gap-y-10 md:w-[500px] w-full">
              <div className="flex gap-x-5">
                <img src={logo} alt="loading" />
                <div>
                  <h1 className="font-bold">
                    <span className="text-2xl font-semibold text-[#CFB165]">
                      Van Lang{" "}
                    </span>
                    Tour
                  </h1>
                  <p className="font-bold">Welcome to Van Lang Tour !</p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-10">
                <input
                  type="text"
                  placeholder="Phone number / email"
                  className="py-5 outline-0 border-0 border-b-1 text-2xl "
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="py-5 outline-0 border-0 border-b-1 text-2xl "
                />
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" />
                  <p className="font-semibold">Remember me</p>
                </div>
                <p className="font-semibold">Forgot password</p>
              </div>

              <div className="w-full flex justify-center">
                <button className="py-2 px-10 rounded cursor-pointer bg-[#CFB165] text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Login;
