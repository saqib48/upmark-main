"use client";

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Counterbox from '../atoms/CounterBox1';
import Counterbox2 from '../atoms/CounterBox2';
import CounterBox3 from '../atoms/CounterBox3';
import CounterBox4 from '../atoms/CounterBox4';
import Heading from '../atoms/Heading';
import Product from '../atoms/Product';
import Btn from '../atoms/Btn';
import "../../app/globals.css";
import Image from "next/image";
import Container from '../atoms/Container';


const GroupSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    })
  }, [])
  return (
    <div>
      <Container>
        <div className=' pb-[50px] overflow-hidden'>
          <div className="flex flex-col">
            <div className='2xl:py-[50px] xl:py-[50px] lg:py-[50px] md:py-[20px] sm:pb-[10px] pb-[20px] gap-[20px] order-2 flex flex-col md:pl-0 pl-4 items-start sm:flex-row sm:order-2 sm:gap-[20px] sm:items-start sm:justify-center md:flex-col md:items-start md:order-2 md:gap-[20px] md:justify-between  xl:flex-row  xl:items-center xl:justify-between xl:order-1  2xl:flex-row 2xl:items-center 2xl:order-1 2xl:justify-between '>
              <Counterbox />
              <Counterbox2 />
              <CounterBox3 />
              <CounterBox4 />
            </div>
            <div className="2xl:py-[70px] xl:py-[70px] lg:py-[70px] md:py-[50px] sm:pt-[40px] pt-[30px] 2xl:flex 2xl:flex-nowrap 2xl:order-2 2xl:item-center 2xl:justify-between xl:flex xl:flex-nowrap xl:order-2 xl:item-center xl:justify-between lg:flex lg:flex-nowrap lg:item-center lg:order-2 lg:justify-between md:flex md:flex-wrap md:item-center md:order-1 md:justify-between sm:flex sm:flex-wrap sm:item-center sm:order-1 sm:justify-between   flex flex-wrap order-1 justify-start">
              <div className="md:px-0 px-3 flex flex-col gap-[30px] text-center md:text-start 2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%]"  >
                <Heading type='12' text='Achieve Operational Excellence With Us' />
                <div className='w-[100%] md:w-[70%] md:px-0 px-3 xl:pt-0 md:pt-[10px] sm:pt-[20px] pt-[20px] text-center md:text-start'  ><Heading type='5' text='Contact us today to explore how we can help you achieve your goals.' /></div>
              </div>
              <div className="md:px-0 px-3 text-center md:text-start 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] md:pt-[40px] sm:-[100%] sm:pt-[40px] w-[100%] py-[20px] " data-aos="zoom-in-up" >
                <Heading type='5' text='In todays digital world, businesses need to harness the power of IT to thrive. W1 provide customized IT solutions that empower businesses of all sizes to achieve their goals. At TNC, we take a personalized approach to IT consulting, tailoring our services to perfectly align with your specific requirements and objectives.' />
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-hidden rounded-[20px] flex items-center justify-center 2xl:w-[100%]  xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:my-[20px] xl:my-[20px] lg:my-[20px] md:my-[20px] sm:my-[20px] my-[20px]" data-aos="zoom-out-down" >
            <Image width={400} height={400} className=' 2xl:w-[100%]  xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]  rounded-[20px] ' src="/assits/images/groupbanner.png" alt="image" />
          </div>
          <div id='' className="text-center xl:py-[100px] lg:py-[100px] md:py-[10px] sm:py-[0px] py-[0px]">
            <div className="pb-[10px] w-[100%] "  ><Heading type='8' text='Powering the Future by Accelerating Growth' /></div>
            <div className='  2xl:w-[40%] 2xl:ml-[30%] xl:w-[40%] xl:ml-[30%] lg:w-[40%] lg:ml-[40%] md:w-[60%] md:ml-[20%] sm:w-[100%] sm:ml-[0%] w-[100%] ml-[0%]'  ><Heading type='5' text='Leverage our strategic solutions to tame the complexities of your business, paving the way for success.' /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl-grid-cols-3 gap-4 my-[30px]">
            <div className='w-[100%]' ><Product src='/assits/images/it.svg' alt='icon' text1='IT Infrastructure Management ' text2='Keep your IT infrastructure reliable, secure, and scalable with our comprehensive management services.   .....         .           .       .                .             .' /></div>
            <div className='w-[100%]'><Product src='/assits/images/2.svg' alt='icon' text1='Business Process Automation ' text2='Elevate efficiency, reduce costs, and enhance customer service with automated business processes.       .......             .               .          .            .             . .' /></div>
            <div className='w-[100%]'><Product src='/assits/images/3.svg' alt='icon' text1='Data Analytics and Business Intelligence ' text2='Unleash the power of data to gain valuable insights, make informed decisions, and drive business growth.' /></div>
            <div className='w-[100%]' ><Product src='/assits/images/4.svg' alt='icon' text1='Systems Integration ' text2='Manage and control changes to your IT systems and infrastructure to minimize disruptions and ensure smooth implementation.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/5.svg' alt='icon' text1='Compliance and Regulatory Consulting ' text2='Navigate complex IT regulations and maintain compliance with our comprehensive consulting services.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/6.svg' alt='icon' text1='Application Development and Maintenance ' text2='Develop, modernize, and maintain software applications tailored to your specific business needs.' /></div>
            <div className='w-[100%]' ><Product src='/assits/images/7.svg' alt='icon' text1='Vendor Management ' text2='Optimize your IT vendor relationships to ensure high-quality services, competitive pricing, and seamless collaborations.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/8.svg' alt='icon' text1='Help Desk and Support ' text2='Empower your team with prompt and reliable IT support to keep them productive and minimize downtime.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/9.svg' alt='icon' text1='Cybersecurity ' text2='Safeguard your valuable data and systems from cyber threats with our robust cybersecurity solutions.' /></div>
            <div className='w-[100%]' ><Product src='/assits/images/10.svg' alt='icon' text1='Cloud Computing ' text2='Embrace the flexibility and cost-effectiveness of cloud computing to power your business operations.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/11.svg' alt='icon' text1='Training and Education ' text2='Invest in your employees IT skills and knowledge with customized training programs.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/12.svg' alt='icon' text1='Asset Management ' text2='Track, manage, and optimize the utilization of your IT assets to maximize their value and ensure compliance.' /></div>
            <div className='w-[100%]' ><Product src='/assits/images/13.svg' alt='icon' text1='Network Consulting and Engineering ' text2='Optimize your network performance, reliability, and security with our expert network consulting services.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/14.svg' alt='icon' text1='Governance and Risk Management ' text2='Align IT with business objectives and manage risks with our strategic governance and management solutions.' /></div>
            <div className='w-[100%]'><Product src='/assits/images/16.svg' alt='icon' text1='Project Management ' text2='Ensure your IT projects are delivered on time, within budget, and to the highest quality standards with our expert project management services.' /></div>
            <div className='w-[100%]' ><Product src='/assits/images/17.svg' alt='icon' text1='Contingency Planning ' text2='Be prepared for unexpected events with our disaster recovery planning, testing, and implementation services.' /></div>
          </div>
          <div className="text-center 2xl:py-[100px] xl:py-[100px] lg:py-[100px] md:py-[50px] sm:py-[20px] py-[10px] "   >
            <Heading type='7' text='Get In Touch For A Free Consultation' />
            <div className="flex items-center justify-center w-[100%] gap-[20px] ">
              <div className="h-[1px] mt-[5px] bg-[#CED4DA] 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[30%] w-[30%]"></div>
              <div className='flex justify-center items-center bg-[#00918E] mt-[10px] rounded-[5px] h-[50px] gap-[10px] w-[180px] hover:cursor-pointer '>
                <Btn type="2" text="CONTACT US" href='' />
                <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </div>
              <div className="h-[1px] mt-[5px] bg-[#CED4DA] 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[30%] w-[30%]"></div>
            </div>
          </div>
          <div id='' className="2xl:flex 2xl:flex-nowrap 2xl:justify-between xl:flex xl:flex-nowrap xl:justify-between lg:flex lg:flex-nowrap lg:justify-between md:flex md:flex-nowrap md:justify-between sm:flex sm:flex-wrap sm:justify-between flex flex-wrap justify-between gap-[50px] relative">
            <div className="image" data-aos="fade-right">
              <Image width={500} height={400} className='rounded-[10px] ' src="/assits/images/sidebanr2.jpg" alt="image" />

            </div>
            <div className="flex flex-col gap-[10px] 2xl:w-[43%] xl:w-[43%] lg:w-[43%] md:w-[60%] sm:w-[100%] w-[100%]" >
              <div className=" tracking-[6px] border-b-4 border-[#999] 2xl:w-[20%] xl:w-[14%] lg:w-[20%] md:w-[30%] sm:w-[20%] w-[22%]" data-aos="fade-right" ><Heading type='16' text='Upmark' />
              </div>
              <div className="py-[10px]" >  <Heading type='10' text='Transforming Ideas Into Business' />
              </div>
              <div className="py-[10px]"  ><Heading type='5' text='Through our consultation services, we’ve enabled Upmark to build a comprehensive platform, serving as a 360° web development solution.' />
              </div>
              <div className='flex items-center'><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Provided end-to-end consultation to build a robust 360° web development platform' /></div>
              <div className='flex items-center'><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Streamlined business operations for enhanced efficiency and transparency' /></div>
              <div className='flex items-center'><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Accelerated Upmark entry into the market with strategic guidance' /></div>
              <div className='flex items-center'><span className='h-[8px] w-[7px] bg-[#00918E] mr-[5px] rounded-[100%]'></span><Heading type='2' text='Strengthened competitive edge through advanced IT and web development solutions' /></div>
              <div className='flex justify-center items-center bg-[#00918E] mt-[10px] rounded-[5px] w-[180px] h-[50px] gap-[10px] hover:cursor-pointer '  >
                <Btn type="2" text="READ MORE" />
                <svg className='w-[15px]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </div>

            </div>
            <span className=" absolute 2xl:left-[50%] 2xl:top-[90%] xl:left-[50%] xl:top-[90%] lg:left-[50%] lg:top-[90%] mg:left-[50%] mg:top-[90%] sm:left-[50%] sm:top-[50%] left-[50%] top-[50%]" data-aos="zoom-out-left">
              <Image width={500} height={400} className='w-[60%]' src="/assits/images/18.svg" alt="" />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
  ;
}

export default GroupSection;
