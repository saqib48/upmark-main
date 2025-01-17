import React from 'react'
import "../../app/globals.css";

const Btn = ({ type, text, href }) => {

  let Btn;
  switch (type) {
    case '0':
      Btn = <button className=" text-[16px] py-[20px] px-[50px] font-bold text-white"><a href={href}>{text}</a></button>
    case '1':
      Btn = <button className=" text-[16px] py-[20px] px-[50px] font-bold text-white"><a href={href}>{text}</a></button>
    case '2':
      Btn = <button className=" text-[16px] py-[20px] px-[50px] font-bold bg-[#00918E]"><a href={href}>{text}</a></button>
    default:
      Btn = <button className='text-[16px] py-[20px] font-bold text-white  '><a href={href}>{text}</a> </button>
      break;
  }
  return Btn;
};


export default Btn;