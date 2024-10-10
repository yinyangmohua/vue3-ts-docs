## 简介

VueUse 是一个由 Vue 团队成员开发的实用工具库，它提供了一系列轻量级的、可组合的函数（composables），这些函数可以帮助开发者快速实现常见的功能，如处理响应式数据、监听事件、处理浏览器特性等。

## 安装

通过 npm 或 yarn 安装 VueUse：


```bash
npminstall @vueuse/core
```


## 基本使用

VueUse 的每个函数（composable）都是一个可组合的函数，可以在 Vue 3 的 `<script setup>` 中直接使用。


```html
<script setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<template>
  Mouse position: ({{ x }}, {{ y }})
</template>
```


## 主要概念

VueUse 的核心概念是“composable”，即可以自由组合的函数。这些函数通常返回一个或多个响应式变量或函数，可以在组件中直接使用。

## 常用 Composables

### `useMouse`

追踪鼠标位置。


```javascript
const{ x, y }=useMouse()
```


### `useFullscreen`

控制元素的全屏状态。


```javascript
const{ isFullscreen, enter, exit }=useFullscreen()
```


### `useClipboard`

处理剪贴板操作。


```javascript
const{ copy, text }=useClipboard()
```


### `useSessionStorage`

操作会话存储（Session Storage）。


```javascript
const storage =useSessionStorage('key','initialValue')
```


### `useBattery`

获取电池信息。


```javascript
const{ charging, level, chargingTime, dischargingTime }=useBattery()
```


### `useDark`

处理深色模式。


```javascript
const isDark =useDark()
```


### `useNetwork`

监听网络状态变化。


```javascript
const{ online }=useNetwork()
```


### `useRoute`

获取当前路由信息。


```javascript
const route =useRoute()
```


### `usePermission`

请求浏览器权限。


```javascript
const{value: permissionState }=usePermission({name:'clipboard-read'})
```


## 高级用法

VueUse 也支持自定义配置和链式调用，以适应更复杂的场景。

### 自定义配置

许多 composables 允许传递配置对象来自定义其行为。


```javascript
// 自定义防抖时间
const{ x, y }=useMouse({delay:200})
```


### 链式调用

一些 composables 支持链式调用，以便于配置和扩展。


```javascript
useStorage('theme','dark')
  .then((theme)=>console.log(theme))
  .catch((err)=>console.error(err))
```


## 注意事项

* VueUse 的函数通常返回响应式数据，可以直接在模板或响应式上下文中使用。
* 某些 composables 可能依赖于浏览器的特定 API，因此在所有环境中不一定可用。
* VueUse 旨在提供实用的工具函数，但不包括 Vue 核心功能，如响应式系统或组件生命周期钩子。

## 总结

VueUse 是一个强大的工具库，它通过提供一系列可组合的函数，使得在 Vue 3 应用中实现常见功能变得更加简单和高效。通过学习和掌握 VueUse，你可以提高开发效率，减少重复代码，并构建更加丰富和交互性强的 Vue 应用。
