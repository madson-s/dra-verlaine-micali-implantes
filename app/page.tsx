import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EmpathySection from "./components/EmpathySection";
import FaceSection from "./components/FaceSection";
import PainPointsSection from "./components/PainPointsSection";
import AuthoritySection from "./components/AuthoritySection";
import TreatmentsSection from "./components/TreatmentsSection";
import JourneySection from "./components/JourneySection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EmpathySection />
        <FaceSection />
        <PainPointsSection />
        <AuthoritySection />
        <TreatmentsSection />
        <JourneySection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
