# VitePress 学习笔记

## 简介

VitePress 是一个静态站点生成器（SSG），专为构建快速、以内容为中心的站点而设计。它基于 Vue 3 和 Vite，提供了一个默认主题，专为技术文档设计，同时也支持完全自定义主题。

## 安装

在 Vue 项目中安装 VitePress：

```bash
npm install -D vitepress
```

如果使用 PNPM，可能会遇到 missing peer deps 警告，可以通过在 `package.json` 中添加配置来忽略这些警告 。

## 快速开始

安装 VitePress 后，可以通过命令行界面 (CLI) 访问 VitePress 的终端。VitePress 可以单独使用，也可以安装到现有项目中。使用以下方式安装它：

```
$ pnpm add -D vitepress
```

或者

```bash
$ yarn add -D vitepress
```

如果打算使用 Vue 组件或 API 进行自定义，还应该明确地将 `vue` 安装为 dependency 。

## 文件结构

建议将 VitePress 站点搭建在嵌套目录（例如 `./docs`）中，以便它与项目的其余部分分开。生成的文件结构如下：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置 。

## 配置文件

配置文件（`.vitepress/config.js`）让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：

```javascript
// .vitepress/config.js
export default {
  title: 'VitePress',
  description: 'Just playing around.',
  themeConfig: {
    // 主题级选项
  }
}
```

可以通过 `themeConfig` 选项配置主题的行为 。

## 启动并运行

在 `package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

使用 `docs:dev` 脚本启动本地开发服务器，并在浏览器中访问 `http://localhost:5173` 来查看站点 。

## 使用 Vue 组件

VitePress 支持在 Markdown 中直接使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题 。

## 性能

VitePress 生成的网站在初次访问时提供静态 HTML，但它变成了单页应用程序（SPA）进行站点内的后续导航，提供了快速的页面切换导航 。

## 部署

VitePress 站点可以部署到多种环境中，包括 GitHub Pages、GitLab Pages、Netlify、Vercel 等 。
