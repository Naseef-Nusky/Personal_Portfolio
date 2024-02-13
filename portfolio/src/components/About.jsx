import React from 'react';
import Profile2 from '../assets/Naseef.jpeg';
function About() {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-20"
    >
      <div className="flex flex-col gap-4 justify-center  items-center  font-titleFont mb-20">
        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
          About
        </h1>
      </div>

  <div class="grid md:grid-cols-2 items-center gap-20 px-20  ">
    <div>
    <img
      src={Profile2}
      alt="profile2"
      class="rounded-full h-94 W-full"
    />
    </div>
    <div>
    <p class="text-center text-lg md:text-xl">
      I am a passionate and motivated undergraduate who loves to explore
      and learn new technologies in the field of Information Technology.
      I am an ambitious person who has developed a mature and
      responsible approach to any task that I undertake. Determined to
      apply my knowledge as well as self-study with my hard work to
      satisfy the software engineer internship in order to gain valuable
      experience.
    </p>
    </div>   
  </div>
</div>
  );
}

export default About;
