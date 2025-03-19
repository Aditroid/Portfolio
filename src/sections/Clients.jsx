import { clientReviews } from '../constants/index.js';
import { useState } from 'react';


const Clients = () => {

  // const [loading, setLoading] = useState(false);
  // const handleSubmit = () => {
  //     setLoading(true)
  // const timeout =   setTimeout(() => {
  //   setLoading(false)
  //   }, [2000]);
  // return () => clearTimeout(timeout);
  // }

  return (
    <section className="c-space my-20 text-white" id='education'>
      <h3 className="head-text">Education</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {/* {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))} */}
                  <p className='font-semibold'>Marks: {item.marks}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='flex items-center justify-center'>
          <a href="https://drive.google.com/uc?export=download&id=1Z4jl7_QlWbbiLRdokjI77RvaJPpqDZGm" download="Aditya_Bora_Resume.pdf">
            <button className='field-btn'
            // onClick={handleSubmit}
            >
              {/* {loading ?
                'Downloading...' : */}
              <span className='flex items-center gap-2'>Download Resume <img src="/assets/arrow-up.png" alt="arrow-up" className="h-3 w-3" /></span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;