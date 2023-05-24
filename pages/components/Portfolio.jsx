import React from 'react'
import Image from "next/image";
import arrayDestruct from 'public/assets/portfolio/arrayDestruct.jpg'
import installNode from 'public/assets/portfolio/installNode.jpg'
import navbar from 'public/assets/portfolio/navbar.jpg'
import reactSmooth from 'public/assets/portfolio/reactSmooth.jpg'
import reactWeather from 'public/assets/portfolio/reactWeather.jpg'
const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: arrayDestruct
        },
        {
            id:2,
            src: installNode
        },
        {
            id:3,
            src: navbar
        },
        {
            id:4,
            src: reactSmooth
        },
        {
            id:5,
            src: reactWeather
        },

    ]
  return (
   <div name = "portfolio" className = "bg-[#091930] w-full text-wite md:h-screen">
    <div className = " bg-[#091930] max-w-scren-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className ="pb-8">
            <p  className = "text-4xl font-sans font-bold text-center  border-gray-500">Noteworthy Projects </p>
            <p className = "text-xl font-sans text-center py-6 text-[#67EBCF]">Personal Projects I'm proud to share!</p>
        </div>
        <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portfolios.map(({id,src}) =>(
                <div key = {id} className = "shadow-md shadow-gray-600 rounded-lg" >
                <Image src = {src} alt = "" className = "rounded-md duration-200 hover:scale-105"/>
                <div className = "flex items-center justify-center">
                    <button className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Demo</button>
                    <button className = "w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </div>
            </div>
            ))
        }
        </div>
    </div>
    
   </div>
  )
}

export default Portfolio