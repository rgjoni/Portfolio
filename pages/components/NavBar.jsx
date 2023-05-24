import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-scroll"
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full  h-20 px-4 text-white bg-[#091930] fixed z-10">
      <div>
        <h1 className="text-2xl text-[#67EBCF] font-mono ml-2">Randi Gjoni</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-mono text-white-500 hover:scale-105 duration-200 hover:text-[#67EBCF]"
          >
            <Link to = {link} smooth duration = {500} offset={-100} >{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#091930] text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-sans py-6 text-xl"
            >
             <Link onClick = {() =>setNav(!nav)} to = {link} smooth duration = {500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
