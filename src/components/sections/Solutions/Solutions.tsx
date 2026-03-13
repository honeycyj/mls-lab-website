import { Container } from "../../foundation/Container/Container";
import { SectionTitle } from "../../foundation/SectionTitle/SectionTitle";
import { solutionCards } from "../../../data/siteContent";

export function Solutions() {
  return (
    <section className="content-section" id="solutions">
      <Container>
        <SectionTitle
          eyebrow="Solutions"
          title="目录不是为了好看，而是为了降低后续扩展成本。"
          description="当前首页只保留最常见的结构，但每一层都已经分清职责，后续加新页面或替换风格时不会牵一发动全身。"
        />
        <div className="card-grid">
          {solutionCards.map((item) => (
            <article className="info-card is-lift" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
