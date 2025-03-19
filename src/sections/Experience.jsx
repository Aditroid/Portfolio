import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Rating from 'react-rating';
import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space mt-20" id="work">
      <div className="w-full text-white">
        <p className="head-text">My Coding Experience</p>

        <div className="work-container">
          <div className="work-canvas ">

            <Canvas>
              <ambientLight intensity={4} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-1.8} scale={2} animationName={animationName} />
              </Suspense>
            </Canvas>

          </div>

          <div className="work-content">
            {/* <div className="sm:py-10 py-5 sm:px-5 px-2.5"> */}
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>
                  </div>
                  <div className="px-2.5">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                    <p className='mt-2'>
                      {item.rating}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;