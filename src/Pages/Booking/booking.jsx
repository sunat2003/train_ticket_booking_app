import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import Navbar from "../../Components/Navbar/navbar";
import Activity from "../../Components/Activity/activity";
import Footer from '../../Components/Footer/footer';
import banner4 from '../../assets/banner4.svg';
import TrainDetails from "../../Components/TrainDetails/trainDetails";

const Booking = () => {
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
          <div className="w-full lg:pt-20 pt-0 lg:h-[200vh] h-[150vh] flex flex-col items-center gap-y-20" style={{backgroundImage:`url(${banner4})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <Activity />
            <div className="w-full lg:px-50 px-2 flex flex-col items-center gap-y-20 h-full">
            <TrainDetails/>
            <TrainDetails/>
            <TrainDetails/>
            </div>
          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default Booking;
