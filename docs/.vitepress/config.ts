import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    themeConfig: {
        logo: "/assets/logo.png",
        nav: [
            { text: "首页", link: "/"},
            { text: "笔记", link: "/components/"},
            { text: "组件", link: "/api/"},
            { text: "问题集", link: "/faq/"},
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/yinyangmohua/vue3-ts-docs"}
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "介绍", link:"/guide/"},
                        { text: "安装", link:"/guide/installation"},
                        { text: "基本概念", link:"/guide/concepts"},
                    ],
                },
            ],
            "/components/": [
                {
                    text: "笔记概览",
                    items: [
                        { text: "简介", link:"/components/"},
                        { text: "Vitepress指南", link: "/components/vitepress"},
                    ],
                },
            ],
        },
        footer: {
            message: "Vue 3 和 TypeScript学习",
            copyright: "Copyright © 2024 Moke"
        }
    },
})
