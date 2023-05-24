import React from 'react'
import Image from "next/image";
import html from "public/assets/html.png"
import css from "public/assets/css.png"
import javascript from "public/assets/javascript.png"
import reactImage from "public/assets/react.png"
import nextjs from "public/assets/nextjs.png"
import graphql from "public/assets/graphql.png"
import github from "public/assets/github.png"
import tailwind from "public/assets/tailwind.png"
import pythonlogo from "public/assets/python.svg"
import javalogo from "public/assets/Java2.svg"
import clogo from "public/assets/C.png"
import dockerlogo from "public/assets/Docker.png"
const Experience = () => {
    const techs = [
        {
            id:1,
            src:pythonlogo,
            title: 'Python',
            style: 'shadow-green-500'
        },
        {
            id:2,
            src:javalogo,
            title: 'Java',
            style: 'shadow-blue-300'
        },
        {
            id:3,
            src:clogo,
            title: 'C',
            style: 'shadow-blue-500'
        },
        {
            id:4,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:dockerlogo,
            title: 'Docker',
            style: 'shadow-yellow-500'
        },
     
  
    ]
  return (
    <div name = 'experience' className = "bg-[#091930] w-full h-screen">
        <div className = "max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className = "text-center text-4xl font-mono">Technologies</p>
                <p className = "text-center text-lg font-sans py-6">Here are some other technolgoies I've worked with</p>
            </div>

            <div className = "w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techs.map(({id,src,title,style}) => 
                        (
                            <div key = {id} className = {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <Image src = {src} alt= "" className = "w-20 mx-auto" />
                    <p className = "mt-4">{title}</p>
                </div>
                        ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience