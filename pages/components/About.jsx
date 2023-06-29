import React from "react"
const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-[#091930] bg-gradient-to-b text-white flex flex-col justify-center items-center">
    <div className="max-w-screen-lg p-4 mx-auto">
        <div className="lg:w-full lg:h-full">
          <div className="pb-8">
            <p className="text-4xl text-[#8892B1] text-center underline-offset-2 border-gray-500 font-mono">About Me</p>
          </div>
          <p className="text-xl text-[#8892B1] font-sans mt-10">
            Hello! My name is Randi. I began my interest in Computer Science, when I was 16 and placed into a computer science by accident and loved it. Since then I've used the knowledge to create unique and interesting programs in all different kinds of languages.
          </p>
          <br />
          <p className="text-xl font-sans text-[#8892B1]">
            During my time at USC, I've had the privilege of working on my schools Experiential Learning Website to develop a platform that focuses on finding new ways of teaching students. Also I had the opportunity to work at a startup where I developed a hobby based social media app from the ground up. Today I work at Hymes,Barrera and Kim where I use my knowledge of Computer Science to make real-world applications that help people in their day to day life
          </p>
        </div>

        <div className="flex items-center justify-center mb-40 mt-10 lg:ml-5 ">
          <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
            <div className="absolute lg:mt-[-10%] lg:ml-[10%] top-0 w-full h-full bg-[#091930] transform rotate-45 border-4 border-[#67EBCF]"></div>
            <div className="absolute lg:mt-[-10%] lg:ml-[10%]  flex items-center justify-center top-0 w-full h-full text-[#67EBCF] font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">RG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;