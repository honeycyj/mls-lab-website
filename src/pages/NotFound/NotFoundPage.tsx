import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__card">
        <p>404</p>
        <h1>Page not found</h1>
        <span>你访问的页面不存在，或者链接已经发生变化。</span>
        <Link to="/">返回首页</Link>
      </div>
    </main>
  );
}
