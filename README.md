# mls-lab-website

实验室官网效果展示。

## Stack

- React
- Vite
- TypeScript
- Plain CSS tokens

## Scripts

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

## Structure

```text
mls-lab-website/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ foundation/
│  │  │  ├─ GlobalCursor/
│  │  │  ├─ Icons/
│  │  │  └─ PageMotion/
│  │  ├─ layout/
│  │  │  ├─ Footer/
│  │  │  └─ Header/
│  │  └─ sections/
│  │     └─ Capabilities/
│  ├─ hooks/
│  ├─ pages/
│  │  ├─ About/
│  │  └─ Home/
│  ├─ styles/
│  │  ├─ tokens/
│  │  ├─ base.css
│  │  ├─ semantic.css
│  │  └─ index.css
│  ├─ App.tsx
│  └─ main.tsx
├─ README.md
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Notes

- `foundation` 放底层能力组件，比如动效、图标、全局 cursor。
- `layout` 放全站通用框架组件，当前的 `Header` 和 `Footer` 已经各自收口了内容和样式。
- `pages` 按页面拆分页面组件、页面数据和页面样式。
- `styles/tokens + semantic` 管理全局设计 token 和语义变量。
- 全局样式入口是 `src/styles/index.css`，layout 组件样式也从这里统一注入。
