import React from 'react';

const Hero = ({title,subtitle1,subtitle2,background,btnTitle}) => {
  return (
    <div className="hero-section flex flex-col justify-center gap-5 items-center w-screen h-screen lg:px-0 px-15" style={{backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundPosition:"center"}}>
        <h3 className="text-white text-3xl font-bold">{title}</h3>
        <h1 className="text-white text-5xl font-bold text-center"><span className="text-amber-600 text-5xl font-bold">{subtitle1}</span>{subtitle2}</h1>
        <button className="py-2 px-3 rounded cursor-pointer bg-yellow-600 text-black">
         {btnTitle}
        </button>
    </div>
  )
}

export default Hero;
