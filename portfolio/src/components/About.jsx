import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-10'>
            I am a passionate and motivated undergraduate who loves to
            explore and learn new technologies in the field of Information
            Technology. I am an ambitious person who has developed a
            mature and responsible approach to any task that I undertake.
            Determining to apply my knowledge as well as self-study with
            my hard work to satisfy the software engineer internship in
            order to gain valuable experience.
            </p>
        </div>
    </div>
  )
}

export default About