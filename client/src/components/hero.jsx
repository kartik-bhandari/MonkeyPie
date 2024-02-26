import React from "react";
import { logo } from "../assets";
import {Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero h-3/5 bg-gradient-to-b from-black from-10%  via-zinc-700 via-40% to-white p-8 sm:text-left to-100% w-full">
      <div className="w-full pt-20 pb-20">
        <h1 className="flex font-extrabold  justify-center text-white text-[30px] sm:text-[90px]">Turn ideas
        </h1>
        <h1 className="flex sm:mt-[-20px] mt-0 font-extrabold justify-center text-black text-[30px] sm:text-[90px]">into Images
        </h1>
        <Link className="flex justify-center" to="/createPost">
          <button className='font-inter flex justify-center font-bold bg-white mt-5 text-black px-4 py-2 w-32 rounded-full hover:text-white hover:bg-black'>Create</button>
        </Link>
        <p className="flex justify-center mt-10 text-[#666e75] sm:text-[20px] text-[10px] max-w[500px]">
          Powered By
        </p>
        <div className="flex justify-center mt-2">
          <img src={logo} sm:width={100} width={60} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
