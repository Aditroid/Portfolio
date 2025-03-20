import { useState } from 'react';
import Globe from 'react-globe.gl';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';
import { useRef, useEffect } from 'react';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bora.aditya786@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const globeRef = useRef();
  const myCoords = { lat: 28.6139, lng: 77.2090, altitude: 1.5 };
  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      const controls = globe.controls();

      if (controls) {
        globe.pointOfView(myCoords, 3000);
      }
      if (isMobile) {
        controls.enableRotate = false; 
        controls.enableZoom = false; 
        controls.enablePan = false; 
      }
    }
  }, []);





  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/DP.jpeg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Aditya Bora</p>
              <p className="grid-subtext">
                Computer Science graduate with a strong foundation in full-stack development. Proficient in React,Next.js, Node.js, Express, and MongoDB, with experience in building dynamic and efficient web applications. Passionate about problem-solving and eager to contribute to innovative solutions
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                websites
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[{ lat: 28.6139, lng: 77.2090, text: 'My Location, New Delhi, 110065', color: 'white'}]}
                pointAltitude={0}
                pointColor={() => 'white'} 
                // pointRadius={5} 
                labelSize={2}
                labelDotRadius={0.7}
              />

            </div>
            <div>
              <p className="grid-headtext">I am flexible with work shifts, available for both day and night shifts, and comfortable working at locations close to my residence</p>
              <p className="grid-subtext">I&apos;m based in New Delhi, India, flexible with a hybrid work mode. Open to both in-office and remote opportunities.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Coding isn&apos;t just something I do—it&apos;s something I enjoy. I love tackling challenges, learning new technologies, and building things that actually work. There&apos;s always something new to explore, and that&apos;s what keeps me hooked
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[200px] sm:h-[276px] md:relative md:bottom-12 object-cover sm:object-top"
            />

            <div className="space-y-2">
              <a className="grid-subtext text-center" href="#contact">Contact me</a>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">bora.aditya786@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;