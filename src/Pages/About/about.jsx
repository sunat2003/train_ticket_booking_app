import React ,{useState} from "react";
import Navbar from "../../Components/Navbar/navbar";
import Hero from "../../Components/Hero/hero";
import banner1 from "../../assets/trainvideo-1.svg";
import Footer from "../../Components/Footer/footer";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import { useEffect } from "react";
import Loader from "../../Components/Loader/loader";

const About = () => {

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
      )
        :(<div className="overflow-x-hidden">
          <Navbar />
          <Hero
            title="Van Lang Tour"
            subtitle1="Your Gateway"
            subtitle2="to Memorable Train Journeys"
            background={banner1}
            btnTitle="Click here"
          />
    
          <div className="w-screen lg:h-screen h-full bg-black text-white lg:px-50 px-10 py-30 flex lg:flex-row flex-col items-center gap-x-20">
            <div className="lg:w-1/2 w-full">
              <img src={about1} alt="" className="lg:w-2/3 w-full h-2/3 rounded-[10px]" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-y-10">
              <h1 className="text-[50px] font-bold text-[#FFD979]">Our Story</h1>
              <p className="text-[25px]">
                At Van Lang Tour, we believe that every journey holds the promise of
                adventure, discovery, and unforgettable memories. Established with a
                passion for travel and a commitment to seamless experiences, we are
                your trusted partner in exploring the world through train travel.
              </p>
            </div>
          </div>
    
          <div className="w-screen lg:h-screen h-full bg-black text-white lg:px-50 px-10 py-30 flex  items-center lg:flex-row-reverse flex-col gap-x-20">
            <div className="lg:w-1/2 w-full flex justify-end">
              <img src={about2} alt="" className="lg:w-2/3 w-full rounded-[10px]" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-y-10">
              <h1 className="text-[50px] font-bold text-[#FFD979]">Who We Are</h1>
              <p className="text-[25px]">
                Van Lang Tour is a dedicated online platform designed to
                revolutionize the way you embark on train journeys. Whether you're a
                first-time traveler, a seasoned explorer, or planning a memorable
                trip with family and friends, we're here to make your travel dreams
                a reality.
              </p>
            </div>
          </div>
    
          <div className="w-screen flex flex-col gap-y-5 items-center lg:px-50 px-10 pb-40 bg-black text-white border-b-2">
            <h1 className="text-[50px] font-bold text-[#FFD979]">Our Mission</h1>
            <p className="text-[25px]">
            Our mission is simple: to provide you with a hassle-free and enjoyable travel experience. We understand that the journey itself is an integral part of your adventure, and that's why we're committed to offering a wide selection of train routes, impeccable service, and competitive prices.
            </p>
          </div>
    
          <Footer />
        </div>)
      }
    </div>
  );
};

export default About;
