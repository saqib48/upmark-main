"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Heading from '../atoms/Heading';
import Image from '../atoms/Image';
import MySwiper from '../atoms/MySwiper';
import Container from '../atoms/Container';

const SlideSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <Container>
      <div className='my-[100px] overflow-hidden w-[100%] '>
        <div className="justify-center md:justify-start xl:flex xl:flex-nowrap xl:gap-[10px] lg:flex lg:flex-nowrap lg:gap-[10px] md:flex-wrap-reverse md:flex md:gap-[10px] sm:flex sm:flex-wrap-reverse ms:gap-[10px] flex flex-wrap-reverse gap-[10px]  relative">
          <div className="bg-gradiunt-r from-green to-white " data-aos="fade-right" >
            <Image className="rounded-[10px] z-[-1000] w-[100%] h-[500px]" path="/assits/images/sidebanr.jpeg" alt="image" text="" />
          </div>
          <div className="flex gap-[50px] py-[50px]">
            <span className='md:text-start text-center' data-aos="fade-up"><Heading type="23" text="Elevating Upmark to New Heights" /></span>
            <span className='hidden md:block' data-aos="fade-up">
              <Heading type="13" text="With our customized IT solutions, you can expect:" />
            </span>

          </div>
        </div>
        <div className="z-[1000] flex md:mt-[-300px] mt-0 ml-0 md:ml-[150px] xl:overflow-hidden  lg:overflow-hidden md:overflow-hidden" data-aos="fade-left">
          <MySwiper />
        </div>
      </div>
    </Container>
  );
};

export default SlideSection;