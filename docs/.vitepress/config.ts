import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    themeConfig: {
        logo: "https://camo.githubusercontent.com/03a38e35c1405d4c6d043f9f0464665098c227a5a1f19c36a5d928a6d7558975/68747470733a2f2f70392d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f66666433653233386565376634366561623432626638386166313766353532387e74706c762d6b3375316662706663702d696d6167652e696d616765233f773d323526683d323626733d3539363826653d73766726613d3126623d646163626263",
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
