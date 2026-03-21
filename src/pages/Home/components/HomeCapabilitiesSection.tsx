import { CapabilityShowcaseSection } from "../../../components/sections/Capabilities/CapabilityShowcaseSection";
import { homeCapabilitiesCards, homeCapabilitiesSection } from "../data/homeCapabilities";

export function HomeCapabilitiesSection() {
  return (
    <CapabilityShowcaseSection
      cards={homeCapabilitiesCards}
      className="section section--capabilities"
      description={homeCapabilitiesSection.description}
      gridClassName="capability-grid"
      headingClassName="section__heading section__heading--wide"
      id="capabilities"
      title={homeCapabilitiesSection.title}
    />
  );
}
