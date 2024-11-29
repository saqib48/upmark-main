import React from 'react'
import "../../app/globals.css";
import Heading from '../atoms/Heading';
import Btn from '../atoms/Btn';
import Container from '../atoms/Container'


const Touch = () => {
  return (
   <Container>
     <div id='' className='shadow  flex flex-col text-center items-center gap-[20px] bg-[#00918E] py-[50px] my-[70px] rounded-[20px] w-[100%]' data-aos="zoom-out-down">
      <Heading type='18' text='Get in Touch' />
      <Heading type='19' text='Belief Empowers Business' />
      <Heading type='20' text="At Upmark, we believe in the transformative power of technology to empower businesses and fuel their journey toward excellence. Let's collaborate to create a technology roadmap that aligns with your business objectives" />
      <div className='flex justify-center items-center border-2 border-[#00918E] bg-[#005F5A] mt-[10px] rounded-[5px] w-[200px] h-[50px] gap-[50px] hover:cursor-pointer '>
        <Btn type="2" text="LEARN MORE" />
        <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
      </div>

    </div>
   </Container>
  );
};

export default Touch;




