import { MotionConfig } from "motion/react";
import { AboutPage } from "./pages/About/AboutPage";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  const pathname =
    typeof window === "undefined" ? "/" : window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <MotionConfig reducedMotion="user">
      {pathname === "/about" ? <AboutPage /> : <HomePage />}
    </MotionConfig>
  );
}

export default App;
