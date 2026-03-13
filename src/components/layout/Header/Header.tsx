import { Container } from "../../foundation/Container/Container";
import { navigationItems } from "../../../data/siteContent";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-brand" href="#top">
          MLS LAB
        </a>
        <nav className="site-nav" aria-label="主导航">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
