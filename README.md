# Chase's blog

一个使用 Astro 构建、发布在 GitHub Pages 上的极简个人博客。

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开终端中显示的本地地址即可。

## 写一篇文章

在 `src/content/blog/` 新建一个 Markdown 文件：

```markdown
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-08-20
tags:
  - 随笔
draft: false
---

正文从这里开始。
```

文件名会成为文章网址的一部分，建议使用简短的小写英文，例如 `my-first-post.md`。

## 发布

推送到 `main` 分支后，GitHub Actions 会自动构建并发布网站。

首次发布前，在仓库的 **Settings → Pages → Source** 中选择 **GitHub Actions**。
