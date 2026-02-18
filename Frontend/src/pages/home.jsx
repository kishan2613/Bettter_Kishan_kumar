// import AboutSimhastha from "../Components/Home/About";
// import EventTimeline from "../Components/Home/EventTimeline";
import Feature from "../components/Home/features";
import HeroSection from "../components/Home/Herosection";
// import NoticeBar from "../Components/Home/NoticeBar";


export default function Home() {  
  return (
    <div className="bg-[#111827]">
     <HeroSection/>
     {/* <NoticeBar/> */}
      <Feature/>
      {/* <EventTimeline/> */}
    </div>
  );
}
 