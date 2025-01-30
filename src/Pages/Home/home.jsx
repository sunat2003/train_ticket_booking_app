import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Hero from "../../Components/Hero/hero";
import banner2 from "../../assets/banner2.svg";
import moniter from "../../assets/Monitor.svg";
import internet from "../../assets/Internet.svg";
import Footer from "../../Components/Footer/footer";
import Activity from "../../Components/Activity/activity";
import banner3 from "../../assets/banner3.svg";
import divImg1 from "../../assets/divImg1.svg";
import divImg2 from "../../assets/divImg2.svg";
import divImg3 from "../../assets/divImg3.svg";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Loader from "../../Components/Loader/loader";

const homeData = [
  {
    id: 1,
    price: "$60",
    title: "hà nội",
    description: "sài gòn - hà nội",
    time: "31h",
    image: divImg1,
  },
  {
    id: 2,
    price: "$30",
    title: "đà nẵng",
    description: "hà nội - đà nẵng",
    time: "21h",
    image: divImg2,
  },
  {
    id: 3,
    price: "$10",
    title: "vịnh hạ long",
    description: "bắc ninh - hạ long",
    time: "51h",
    image: divImg3,
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="overflow-x-hidden">
            <Navbar />
            <Hero
              title="Relax with"
              subtitle1="Van Lang"
              subtitle2="Tour"
              background={banner2}
              btnTitle="Read more"
            />

            <div className="w-screen flex lg:px-50 px-10 gap-x-10 py-20">
              <div className="p-5 bg-[#CFB165] flex lg:flex-row flex-col items-center rounded-3xl">
                <img src={moniter} alt="" className="lg:mr-5 mr-0" />
                <p className="text-white">
                  It’s very easy to order a train ticket online, VLT E-ticket
                  can not be lost or forgotten at home
                </p>
              </div>

              <div className="p-5 bg-[#CFB165] flex items-center lg:flex-row flex-col rounded-3xl">
                <img src={internet} alt="" className="mr-5" />
                <p className="text-white">
                  To order ticket all you need is Internet, a couple minutes and
                  a payment card. Grab bonuses and discounts.
                </p>
              </div>
            </div>

            <div
              className="w-screen flex flex-col lg:h-screen h-full"
              style={{
                backgroundImage: `url(${banner3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Activity />

              <div className="w-screen flex flex-col gap-y-20 lg:px-50 px-10 py-10">
                <h1 className="text-white text-3xl font-bold">
                  Popular Tour Packages
                </h1>

                <div className="flex lg:flex-row flex-col justify-between gap-y-10">
                  {homeData.map((imgDiv) => (
                    <div
                      key={imgDiv.id}
                      className="lg:w-70 w-full h-70 rounded-2xl overflow-hidden relative"
                    >
                      <div
                        style={{ backgroundImage: `url(${imgDiv.image})` }}
                        className="w-full h-3/4 backdrop-blur-sm"
                      >
                        <div className="absolute inset-0 backdrop-blur-sm h-full flex justify-center items-center text-2xl text-white">
                          <h1 className="uppercase">{imgDiv.title}</h1>
                        </div>
                      </div>
                      <div className="h-1/4 bg-white flex flex-col justify-center px-5">
                        <h1 className="uppercase font-bold">
                          {imgDiv.description}
                        </h1>
                        <p className="flex text-gray-400 items-center text-[10px]">
                          <MdOutlineAccessTimeFilled />
                          {imgDiv.time}
                        </p>
                      </div>
                      <div className="absolute top-5 left-5 py-1 px-2 bg-white rounded-[5px]">
                        <p className="text-[10px] text-black font-bold">
                          Form {imgDiv.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
