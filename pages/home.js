"use client"
import Banner from "@/components/organisms/Banner";
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
    </div>
  )
}

export default home
