import React from 'react';
import html from './html.png';
import css from './css.png';
import js from './javascript.png';
import python from './python2.png';
import rect from './react.png';
import githb from './github.png';


const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-sky-500',
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: python,
      title: 'Python',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: githb,
      title: 'GitHub',
      style: 'shadow-white',
    },
    {
      id: 6,
      src: rect,
      title: 'React JS',
      style: 'shadow-sky-500',
    },
  ];

  return (
    <div name="experience" className="w-full h-screen">
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center sm:text-left">Experience</p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="pfp" className="w-16 mx-auto" />
              <p className="mt-2 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
