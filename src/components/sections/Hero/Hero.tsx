import { Button } from "../../foundation/Button/Button";
import { Container } from "../../foundation/Container/Container";
import { heroStats } from "../../../data/siteContent";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="hero__layout">
        <div className="hero__content">
          <span className="hero__eyebrow u-animate-enter">静态站点最小骨架</span>
          <h1 className="u-animate-enter u-delay-1">给开发人员一套可以直接复用的样式和动态效果。</h1>
          <p className="hero__description u-animate-enter u-delay-2">
            这个版本不追求复杂功能，而是先把目录结构、基础组件、视觉 token 和页面节奏定下来，
            方便后续在统一风格下继续扩展。
          </p>
          <div className="hero__actions u-animate-enter u-delay-3">
            <Button href="#solutions">查看页面区块</Button>
            <Button href="#about" variant="secondary">
              查看基础规则
            </Button>
          </div>
        </div>
        <div className="hero__panel u-animate-enter u-delay-2">
          <div className="hero__stats">
            {heroStats.map((item) => (
              <article className="metric-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <div className="hero__code">
            <span>src/styles/tokens/</span>
            <pre>{`:root {\n  --brand-500: #ff6b4a;\n  --surface-base: #fffaf2;\n  --shadow-soft: 0 24px 60px rgba(42, 26, 11, 0.12);\n}`}</pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
