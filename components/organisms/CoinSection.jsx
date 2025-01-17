
import React from 'react'
import Heading from '../atoms/Heading';
import Btn from '../atoms/Btn';
import Image from 'next/image';
import Container from '../atoms/Container'


const CoinSecion = () => {
  return (
    <Container>
      <div className='relative w-[100%] my-[100px]  py-[50px] 2xl:flex 2xl:flex-nowrap 2xl:justify-between xl:flex xl:flex-nowrap xl:justify-between lg:flex lg:flex-nowrap lg:justify-between md:flex md:flex-wrap md:justify-start sm:flex sm:flex-wrap sm:justify-start flex flex-wrap justify-start'>
        <div className=" 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[60%] sm:w-[100%] w-[100%]" data-aos="zoom-out-right" >
          <Image width={30} height={30} src="/assits/images/23.svg" alt="" />
          <Image width={600} height={300} src="/assits/images/coinesection.png" alt="" />
        </div>
        <div className="flex flex-col gap-[10px] 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[50%] sm:w-[100%] sm:mt-[20px] w-[100%]  ">
          <div className=" tracking-[1px] border-b-4 border-[#999] md:w-[15%] w-[20%]" data-aos="zoom-in" ><Heading type='16' text='CoinEdition ' />
          </div>
          <div className="py-[10px]" data-aos="fade-up" >  <Heading type='10' text='Seeking Truth to Stay Woke ' />
          </div>
          <div className="py-[10px]" data-aos="fade-up"  ><Heading type='5' text='We have enabled CoinEdition to establish a robust online presence, reaching over a million daily crypto news readers, while also ensuring its seamless operation.' />
          </div>
          <div className='flex items-center ' data-aos="fade-up" ><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Forged a strong online presence through advanced web development' /></div>
          <div className='flex items-center ' data-aos="fade-up" > <span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Expanded reach with digital marketing, attracting over a million daily readers' /></div>
          <div className='flex items-center ' data-aos="fade-up"><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Ensured uninterrupted operation and service with robust IT infrastructure' /></div>
          <div className='flex items-center ' data-aos="fade-up "><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Employed advanced analytics tools for precision in news delivery' /></div>
          <div className='flex justify-center items-center bg-[#00918E] mt-[10px] rounded-[5px] w-[180px] h-[50px] gap-[10px] hover:cursor-pointer ' data-aos="fade-up" >
            <Btn type="2" text="LEARN MORE" />
            <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        </div>

        <div className=" w-[100%] absolute 2xl:bottom-[-8%] 2xl:left-[50%] xl:bottom-[-8%] xl:left-[50%] lg:bottom-[-8%] lg:left-[50%] md:bottom-[50%] md:left-[50%] sm:bottom-[40%] sm:left-[50%] bottom-[40%] left-[50%]" data-aos="fade-left" data-aos-duration="1400" >
          <Image width={60} height={60} src="/assits/images/24.svg" alt="arrow image" />
        </div>
      </div>
    </Container>
  );
};

export default CoinSecion;