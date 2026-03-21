import { MotionConfig } from "motion/react";
import { Route, Routes } from "react-router";
import { GlobalCursor } from "./components/foundation/GlobalCursor/GlobalCursor";
import { AboutPage } from "./pages/About/AboutPage";
import { HomePage } from "./pages/Home/HomePage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { UhdConversionPage } from "./pages/Solutions/UhdConversionPage";
import { TeamPage } from "./pages/Team/TeamPage";
import { TestingServicesPage } from "./pages/Testing/TestingServicesPage";
import { VoicePage } from "./pages/Voice/VoicePage";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <GlobalCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions/uhd-conversion" element={<UhdConversionPage />} />
        <Route path="/testing-services" element={<TestingServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/voices" element={<VoicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MotionConfig>
  );
}

export default App;
