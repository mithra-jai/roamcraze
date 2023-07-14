import HomeVideoBg from '@/components/HomeVideoBg';
import AboutImageSlider from '@/components/AboutImageSlider';

import Countries from '@/components/Countries';
import GoToContact from '@/components/goToContact';

export default function Home() {
  return (
    <div>
       <HomeVideoBg/>
     
      <Countries/>
      <GoToContact/>
    </div>
  );
}
