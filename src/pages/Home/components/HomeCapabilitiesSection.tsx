import { CapabilityShowcaseSection } from "../../../components/sections/Capabilities/CapabilityShowcaseSection";
import { homeCapabilitiesCards } from "../data/homeCapabilities";

const homeCapabilitiesSectionContent = {
  title: "实验室技术原子能力与布局",
  subtitle:
    "围绕声音与影像的生成、编码、传输与重建机制，我们构建跨学科技术体系，致力于提升沉浸式听觉与视觉体验的真实度、空间感与表达力。",
};

export function HomeCapabilitiesSection() {
  return (
    <CapabilityShowcaseSection
      cards={homeCapabilitiesCards}
      className="section section--capabilities"
      description={homeCapabilitiesSectionContent.subtitle}
      gridClassName="capability-grid"
      headingAside={
        <span className="home-capabilities-section__indicator" aria-hidden="true">
          ↓
        </span>
      }
      headingLayout="split"
      id="capabilities"
      title={homeCapabilitiesSectionContent.title}
    />
  );
}
