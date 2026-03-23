import { CountUpStat } from "../../../components/foundation/CountUpStat/CountUpStat";

type AboutResearchStatProps = {
  label: string;
  value: string;
};

export function AboutResearchStat({ label, value }: AboutResearchStatProps) {
  return <CountUpStat className="about-research__stat-content" label={label} value={value} />;
}
