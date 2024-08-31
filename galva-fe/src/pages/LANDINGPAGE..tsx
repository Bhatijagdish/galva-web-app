import styled, { keyframes } from 'styled-components';
import LANDINGVID from "../components/LANDINGVID";
import FrameComponent from "../components/FrameComponent";
import SolutionButton from "../components/SolutionButton";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import SupportSection from '../components/SupportSection';
import GalvaInfoBox from '@/components/offerings';
const bubbleBackground = keyframes`
  0% { background-image: url('/svg1bubble.svg'); }
  25% { background-image: url('/svg2bubble.svg'); }
  50% { background-image: url('/svg3bubble.svg'); }
  75% { background-image: url('/svg4bubble.svg'); }
  100% { background-image: url('/svg1bubble.svg'); }
`;

const BackgroundDiv = styled.div`
  width: 124.5rem;
  height: 97.5rem;
  position: absolute;
  margin: 0;
  position: fixed;
  top: 0rem;
  left: 0.687rem;
  z-index: 0;
  animation: ${bubbleBackground} 20s infinite;
  background-size: cover;
`;

const LANDINGPAGE = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border leading-[normal] tracking-[normal] gap-[4.5rem]">
      <div className="self-stretch h-[306.25rem] relative bg-white hidden z-[0]" />
      <div className="self-stretch h-[76.875rem] relative hidden mix-blend-hard-light z-[1]" />
      <BackgroundDiv />
      <img
        className="w-[126.063rem] relative max-h-full hidden max-w-full z-[3]"
        alt=""
      />
      <LANDINGVID />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.562rem] box-border max-w-full text-center text-[2rem] text-black font-Jura">
        <div className="w-[103.125rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full gap-[1.875rem]">
          <div className="self-stretch relative z-[2] mq950:text-[1.625rem] mq450:text-[1.188rem]">
            <p className="m-0">
              Galva.ai offers sophisticated AI solutions based on verified and
              well-founded data. Our technologies deliver precise and reliable
              results that give you the accuracy and certainty to make important
              decisions. Trust our robust AI system to optimally support your
              business processes.
            </p>
          </div>
          <SolutionButton />
        </div>
      </section>
      <SupportSection />
      <GalvaInfoBox />
      {/* <FrameComponent1 /> */}
      <FrameComponent2 />
    </div>
  );
};

export default LANDINGPAGE;