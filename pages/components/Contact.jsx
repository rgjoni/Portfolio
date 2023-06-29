import React from 'react'

const Contact = () => {
  function openMail() {
    var recipient = "randigjoni122@gmail.com";
    var subject = "I'm interested in discussing software opportunities.";
    var body = "Hello";
    var mailtoURL = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(mailtoURL);
  }
  return (
    <div name = 'contact' className = "w-full h-3/5 bg-[#091930] p-4 text-white">
        <div className = "flex  flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className =  "pb-8">
                <p className = "text-4xl text-center font-mono ">Contact</p>
                <p className = "text-2xl text-center font-sans">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <button  onClick={() => openMail()} className = "text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Let's talk
                     </button>
            </div>
            
        </div>
    </div>
  )
}

export default Contact