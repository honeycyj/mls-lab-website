import type { CSSProperties } from "react";

export type SolutionTestimonialData = {
  activeDot?: number;
  author: string;
  backgroundColor?: string;
  dotCount?: number;
  height?: number;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  imageWidth?: number;
  maxWidth?: number;
  quote: string;
  role: string;
};

type SolutionTestimonialProps = {
  className?: string;
  testimonial: SolutionTestimonialData;
};

export function SolutionTestimonial({
  className = "",
  testimonial,
}: SolutionTestimonialProps) {
  const {
    activeDot = 0,
    author,
    backgroundColor = "#53389e",
    dotCount = 3,
    height = 448,
    image,
    imageAlt = author,
    imagePosition = "center center",
    imageWidth = 480,
    maxWidth = 1200,
    quote,
    role,
  } = testimonial;

  return (
    <article
      className={`solution-testimonial ${className}`.trim()}
      style={
        {
          "--solution-testimonial-bg": backgroundColor,
          "--solution-testimonial-height": `${height}px`,
          "--solution-testimonial-image-width": `${imageWidth}px`,
          "--solution-testimonial-max-width": `${maxWidth}px`,
          "--solution-testimonial-image-position": imagePosition,
        } as CSSProperties
      }
    >
      <div className="solution-testimonial__copy">
        <blockquote>{quote}</blockquote>
        <div className="solution-testimonial__meta">
          <strong>{author}</strong>
          <span>{role}</span>
        </div>
        <div className="solution-testimonial__dots" aria-hidden="true">
          {Array.from({ length: dotCount }, (_, index) => (
            <span key={index} className={index === activeDot ? "is-active" : undefined} />
          ))}
        </div>
      </div>
      <div className="solution-testimonial__image">
        <img src={image} alt={imageAlt} />
      </div>
    </article>
  );
}
