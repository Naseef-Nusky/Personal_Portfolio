import React from 'react';
import MyProfile from '../assets/MyProfile.png';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaLinkedin , FaInstagram ,FaGithub ,FaTwitterSquare} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import fileSaver from 'file-saver';

const Home = () => {
  const saveFile = () => {
    const fileUrl = process.env.PUBLIC_URL + '/public/NaseefNusky_CV.pdf';
    fileSaver.saveAs(fileUrl, 'Naseef_Nusky_CV.pdf');
  };

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row pb-10">
        <div className="text-white flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold mt-40">I'm a full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love working on technologies like React, Node.js, Spring Boot.
          </p>
          <div>
            <button
              className="text-white w-fit px-6 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 "
              onClick={saveFile}
            >
              My Resume
              <span>
                <MdOutlineFileDownload size={25} className='ml-1' />
              </span>
            </button>
          </div>
    <div className="flex flex-col items-center ">
      <div className='my-1'>
        <h2>Find me in</h2>
      </div>
      <div className="text-white w-fit px-2 my-1 flex items-center rounded-md">
        <a href="https://www.linkedin.com/in/naseef-nusky/" className="px-2 cursor-pointer hover:scale-105 duration-200" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/Naseef-Nusky" className="px-2 my-2 cursor-pointer hover:scale-105 duration-200" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a href="https://www.instagram.com/naseefnus_key?igsh=MW4zZTNrZGhwM2locA==" className="px-2 my-2 cursor-pointer hover:scale-105 duration-200" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100074070813623&mibextid=2JQ9oc" className="px-2 my-2 cursor-pointer hover:scale-105 duration-200" target="_blank" rel="noopener noreferrer">
          <FaSquareFacebook size={25} />
        </a>
        <a href="https://twitter.com/naseef_nuzkey?t=GWnNkSPKiz6TTISKsdLFlA&s=09" className="px-2 my-2 cursor-pointer hover:scale-105 duration-200" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare size={25} />
        </a>
      </div>
    </div>
        </div>
        <div>
          <img
            src={MyProfile}
            alt="My Profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
