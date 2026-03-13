# mls-lab-website

一个面向静态官网的最小 React 项目骨架，重点是统一样式、基础动效和清晰的目录分层。

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
│  ├─ assets/
│  ├─ components/
│  │  ├─ foundation/
│  │  │  ├─ Button/
│  │  │  ├─ Container/
│  │  │  └─ SectionTitle/
│  │  ├─ layout/
│  │  │  ├─ Header/
│  │  │  └─ Footer/
│  │  └─ sections/
│  │     ├─ Hero/
│  │     ├─ About/
│  │     ├─ Solutions/
│  │     └─ Contact/
│  ├─ data/
│  ├─ styles/
│  │  ├─ tokens/
│  │  ├─ semantic.css
│  │  ├─ base.css
│  │  ├─ utilities.css
│  │  └─ index.css
│  ├─ App.tsx
│  └─ main.tsx
├─ .gitignore
├─ README.md
├─ package.json
└─ vite.config.ts
```

## Notes

- `foundation` 放底层通用组件。
- `layout` 放站点框架组件。
- `sections` 放页面内容区块。
- `tokens + semantic` 用来管理基础样式和语义变量。
