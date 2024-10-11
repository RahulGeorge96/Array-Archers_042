import { DetailedPage } from "./landingpage/detailedPage";
import { DetailedSpaces } from "./landingpage/detailedSpaces";
import { FeauturesPage } from "./landingpage/feauturePage";
import { HeroSection } from "./landingpage/herosection";
import { VideoPage } from "./landingpage/videoPage";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <DetailedPage />
      <FeauturesPage />
      <VideoPage />
      <DetailedSpaces />
    </>
  );
};
