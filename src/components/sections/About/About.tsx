import { Container } from "../../foundation/Container/Container";
import { SectionTitle } from "../../foundation/SectionTitle/SectionTitle";
import { aboutPoints } from "../../../data/siteContent";

export function About() {
  return (
    <section className="content-section" id="about">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="先把设计语言和结构约束好，后续开发就会简单很多。"
          description="这个最小结构的目标是让任何开发人员进入仓库后，都能快速知道基础组件、布局组件和页面区块分别应该放在哪里。"
        />
        <div className="card-grid">
          {aboutPoints.map((item) => (
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
