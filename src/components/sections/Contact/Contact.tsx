import { Button } from "../../foundation/Button/Button";
import { Container } from "../../foundation/Container/Container";
import { SectionTitle } from "../../foundation/SectionTitle/SectionTitle";
import { contactActions } from "../../../data/siteContent";

export function Contact() {
  return (
    <section className="content-section content-section--accent" id="contact">
      <Container className="contact-panel">
        <SectionTitle
          eyebrow="Contact"
          title="这个骨架已经足够开始做静态官网。"
          description="如果你接下来要继续定义品牌视觉，只需要在 token 和语义变量层调整，不需要先推翻目录结构。"
        />
        <div className="contact-actions">
          {contactActions.map((item, index) => (
            <Button href={item.href} key={item.href} variant={index === 0 ? "primary" : "secondary"}>
              {item.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
