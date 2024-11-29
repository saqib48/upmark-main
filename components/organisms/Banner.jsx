import React from 'react';
import Container from '../atoms/Container';
import Btn from '../atoms/Btn';
import Heading from '../atoms/Heading';
import Image from 'next/image';
import 'animate.css/animate.min.css';
import 'animate.css';
import "../../app/globals.css";

const Banner = () => {
  return (
    <div
      className="banner h-auto py-6 bg-cover bg-center"
      style={{
        background: "linear-gradient(90deg, #006988EE, #10958A, #46C2B8, #008080)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 3s ease infinite",
      }}
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between h-auto py-6 items-center gap-6">
          {/* Text Section */}
          <div className="w-[100%] md:w-[50%] text-center md:text-left md:justify-start justify-center flex flex-col md:items-start	items-center">
            <div
              className=" py-4"
              data-aos="fade-up"
            >
              <Heading type="11" text="Russel Group" />
            </div>
            <div
              className="py-4"
              data-aos="fade-up"
            >
              <Heading
                type="4"
                text="The Russell Group is a self-selected association of twenty-four public research universities in the United Kingdom. Its members are often perceived as the UK’s most prestigious universities."
              />
            </div>
            <div
              className="py-4"
              data-aos="fade-up"
            >
              <Heading
                type="4"
                text="Through world-class research and education, Russell Group is helping to create a dynamic economy, stronger communities, and a better future. Want to know more about universities?"
              />
            </div>
            <div
              className="flex justify-center md:justify-center md:text-center items-center bg-[#005F5A] mt-4 rounded-lg md:w-[150px] w-full h-[50px] gap-2 cursor-pointer"
              data-aos="fade-up"
            >
              <Btn type="2" text="READ MORE" href="#" />
              <svg
                className="w-4"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src="/assits/images/secban.jpg"
              width={300}
              height={300}
              className="animate__animated animate__bounce w-58 h-58 md:w-96 md:h-96 rounded-lg object-cover"
              alt="Russel Group"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
