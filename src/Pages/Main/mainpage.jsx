import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Hero from "../../Components/Hero/hero";
import Footer from "../../Components/Footer/footer";
import bannerImg from "../../assets/trainvideo-1.svg";
import Loader from "../../Components/Loader/loader";

const Mainpage = () => {
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
          <Hero
            title="Welcome to"
            subtitle1="Van Lang"
            subtitle2="Tour"
            background={bannerImg}
            btnTitle="View Page"
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Mainpage;
