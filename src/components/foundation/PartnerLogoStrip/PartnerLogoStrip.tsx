export type PartnerLogoItem = {
  alt: string;
  src: string;
};

export const defaultPartnerLogoStripTitle = "实验室合作伙伴";

export const defaultPartnerLogos: ReadonlyArray<PartnerLogoItem> = [
  { alt: "Boltshift", src: "/assets/solutions/uhd-conversion/partners/boltshift.svg" },
  { alt: "Lightbox", src: "/assets/solutions/uhd-conversion/partners/lightbox.svg" },
  { alt: "FeatherDev", src: "/assets/solutions/uhd-conversion/partners/featherdev.svg" },
  { alt: "Spherule", src: "/assets/solutions/uhd-conversion/partners/spherule.svg" },
  { alt: "GlobalBank", src: "/assets/solutions/uhd-conversion/partners/globalbank.svg" },
  { alt: "Nietzsche", src: "/assets/solutions/uhd-conversion/partners/nietzsche.svg" },
];

type PartnerLogoStripProps = {
  className?: string;
  items?: ReadonlyArray<PartnerLogoItem>;
  title?: string;
};

export function PartnerLogoStrip({
  className = "",
  items = defaultPartnerLogos,
  title = defaultPartnerLogoStripTitle,
}: PartnerLogoStripProps) {
  return (
    <div className={`partner-logo-strip ${className}`.trim()}>
      <h2>{title}</h2>
      <div className="partner-logo-strip__logos">
        {items.map((item) => (
          <img
            key={item.src}
            alt={item.alt}
            className="partner-logo-strip__image"
            decoding="async"
            loading="lazy"
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
}
