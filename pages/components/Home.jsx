import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import deved from 'public/assets/okay.jpg';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="flex min-h-screen w-screen bg-[#091930] to-gray-800 pt-[25%] lg:pt-[15%]  ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl sm:text-7xl text-center md:text-left font-mono font-bold text-[#E5F5FF]">
            I'm a Full Stack Engineer
          </h3>
          <p className="text-gray-500 text-left text-xl font-sans py-4 max-w-lg">
            I’m a software engineer specializing in Systems Automation and building products that impact people's lives.
            Currently, I’m focused on building easily usable applications at Hymes, Barrera, and Kim.
          </p>
          <div className="text-center">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-100}
              className="group text-white inline-flex px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={deved}
            alt="my profile"
            className="rounded-2xl mx-auto max-w-xs sm:max-w-none"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
