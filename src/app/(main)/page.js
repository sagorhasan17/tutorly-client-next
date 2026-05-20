
import CTABanner from "@/components/sections/cta/CTABanner";
import WhyChooseTutorly from "@/components/sections/qhyChoose/WhyChooseTutorly";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import SwiperSliderBanner from "@/components/SwiperSliderBanner";


export default function Home() {
  return (
    <>
    <div>
      <SwiperSliderBanner />
    </div>
    <WhyChooseTutorly />
    <Testimonials />
    <CTABanner />
    </>
    
  );
}
