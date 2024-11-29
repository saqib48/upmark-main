"use client"
import Touch from "@/components/moleculus/Touch";
import Banner from "@/components/organisms/Banner";
import CoinSecion from "@/components/organisms/CoinSection";
import GroupSection from "@/components/organisms/GroupSection";
import Header from "@/components/organisms/Header";
import PlasticHero from "@/components/organisms/PlasticHero";
import SlideSection from "@/components/organisms/SlideSection";


function home() {
  return (
    <div className="">
   <Header/>
   <Banner/>
   <SlideSection/>
   <GroupSection/>
   <PlasticHero/>
   <CoinSecion/>
   <Touch/>
    </div>
  )
}

export default home
