import {FiFolder} from "react-icons/fi"
import {FaReact} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {DiVisualstudio} from "react-icons/di"
import {GiArtificialHive} from "react-icons/gi"
import {SiThealgorithms} from "react-icons/si"
import {SiCplusplus} from "react-icons/si"
import {RiGithubLine} from "react-icons/ri"
import {DiJavascript1} from "react-icons/di"
import {GrNode} from "react-icons/gr"
import {SiMysql} from "react-icons/si"
import {SiSwift} from "react-icons/si"
import {SiXcode} from "react-icons/si"
import {SiFigma} from "react-icons/si"
 const Projects = () => {
  const projs = [
    {
      id:1,
      title: "NQueens Algorithmic Search",
      link: "https://github.com/rgjoni/NQueensPuzzle",
      description: "Showing the ways in which the Simulated Annealing algorithm handles the problem compared to the Hill Climbing one",
      child:(
        <>
        <SiCplusplus className = "text-gray-500 group-hover:text-[#649ad2]" size = {40} />
        <GiArtificialHive className = "text-gray-500 group-hover:text-yellow-500" size = {40} />
        <SiThealgorithms className = "text-gray-500 group-hover:text-cyan-500" size = {40} />
        </>
      ),
    },
    {
      id:2,
      title: "Circle Game",
      link: "https://github.com/rgjoni/CircleGame",
      description: "Showing how C++ and a simple shuffling algorithm can create a fun game with numbers!",
      child:(
        <>
        <SiCplusplus className = "text-gray-500 group-hover:text-[#649ad2]" size = {40} />
        <DiVisualstudio className = "text-gray-500 group-hover:text-blue-500" size = {40} />
        <RiGithubLine className = "text-gray-500 group-hover:text-green-700" size = {40} />
        </>
      ),
    },
    {
      id:2,
      title: "This website!",
      description: "Highlighting how Javascript,React and Tailwind come together to create a beautiful website",
      child:(
        <>
        <DiJavascript1 className = "text-gray-500 group-hover:text-blue-500" size = {40} />
        <FaReact className = "text-gray-500 group-hover:text-teal-500" size = {40} />
        <SiTailwindcss className = "text-gray-500 group-hover:text-cyan-500" size = {40} />
        </>
      ),
    },
    {
      id:2,
      title: "Experiential Learning Center",
      link: "http://www.elcexercises.org/index.html/",
      description: "Helped build and design the experiential learning center to test new ways of educating students",
      child:(
        <>
        <GrNode className = "text-gray-500 group-hover:text-green-800" size = {40} />
        <FaReact className = "text-gray-500 group-hover:text-teal-500" size = {40} />
        <SiMysql className = "text-gray-500 group-hover:text-cyan-500" size = {40} />
        </>
      ),
    },
    {
      id:2,
      title: "Shade Inc",
      link: "https://apps.apple.com/us/app/shades/id1382787278",
      description: "Created an IOS Application from the ground up to revolutionze the way we use social media",
      child:(
        <>
        <SiSwift className = "text-gray-500 group-hover:text-blue-500" size = {40} />
        <SiXcode className = "ml-1 text-gray-500 group-hover:text-blue-400" size = {40} />
        <SiFigma className = "text-gray-500 group-hover:text-pink-500" size = {40} />
        </>
      ),
    },
  ]

  
  return (
    <div className="scroll-margin-top--20 mt-[-20%] pb-5 text-center bg-[#091930]">
      <div id="projects" className="scroll-margin-top-[-20]"></div>
      <h2 className="text-4xl font-mono text-white pb-5">Noteworthy Projects</h2>
      <h3 className="font-sans text-[#67EBCF]">Personal Projects I'm proud to share!</h3>
  
      <div className="flex flex-wrap justify-center ">
        {projs.map(({ id, link, title, description, child }) => (
          <div
            key={id}
            className="group m-4 bg-[#112240] w-[425px] h-[375px] rounded flex flex-col hover:shadow-md hover:shadow-blue-500 hover:scale-105 duration-500"
            style={{ minWidth: '425px' }}
          >
            <div className="flex justify-between items-center p-4">
              <FiFolder size={50} className="hidden" />
              <a href={link} target="_blank" rel="noopener noreferrer">
                <BsBoxArrowUpRight size={25} className="mt-3 hidden group-hover:text-teal-500 hover:scale-110" />
              </a>
            </div>
            <p className="px-4 mt-[15%] text-2xl text-white group-hover:text-[#67EBCF] font-sans">{title}</p>
            <p className="px-4 mt-2 text-lg text-white font-sans">{description}</p>
            <div className="flex justify-center mt-[15%] items-center px-4">
              {child}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }  
export default Projects