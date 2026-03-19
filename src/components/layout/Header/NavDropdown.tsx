export type NavDropdownItem = {
  href?: string;
  label: string;
};

type NavDropdownProps = {
  items: NavDropdownItem[];
  label: string;
  menuLabel?: string;
};

export function NavDropdown({ items, label, menuLabel }: NavDropdownProps) {
  return (
    <div className="site-header__nav-item site-header__nav-item--menu">
      <button className="site-header__nav-trigger" type="button" aria-haspopup="true">
        {label}
      </button>
      <div className="site-header__nav-menu" aria-label={menuLabel ?? `${label}菜单`}>
        {items.map((item) =>
          item.href ? (
            <a key={item.label} className="site-header__nav-menu-link" href={item.href}>
              {item.label}
            </a>
          ) : (
            <span key={item.label} className="site-header__nav-menu-link is-placeholder">
              {item.label}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
