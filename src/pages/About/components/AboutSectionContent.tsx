import { forwardRef } from "react";

type AboutSectionContentProps = {
  body: string;
  notes?: string[];
  title: string;
};

export const AboutSectionContent = forwardRef<HTMLElement, AboutSectionContentProps>(
  function AboutSectionContent({ body, notes, title }, ref) {
    return (
      <article ref={ref} className="about-section-content">
        <h3 className="about-section-content__title">{title}</h3>
        <p className="about-section-content__body">{body}</p>
        {notes ? (
          <div className="about-section-content__notes">
            <ul>
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </article>
    );
  },
);
