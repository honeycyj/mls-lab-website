import { MotionConfig } from "motion/react";
import { GlobalCursor } from "./components/foundation/GlobalCursor/GlobalCursor";
import { AboutPage } from "./pages/About/AboutPage";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  const pathname =
    typeof window === "undefined" ? "/" : window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <MotionConfig reducedMotion="user">
      <GlobalCursor />
      {pathname === "/about" ? <AboutPage /> : <HomePage />}
    </MotionConfig>
  );
}

export default App;
