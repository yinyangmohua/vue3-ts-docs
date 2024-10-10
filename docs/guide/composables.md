
## 什么是 Composables？

Composables 是一种在 Vue 3 中使用组合式 API 时，将组件逻辑分解成可复用的函数的方法。这些函数可以包含响应式状态、计算属性、观察者等，并且可以在多个组件之间共享。

## 为什么使用 Composables？

* **逻辑复用** ：在不同的组件中重用逻辑。
* **减少重复代码** ：避免在多个组件中编写相同的代码。
* **提高可维护性** ：将逻辑封装在单独的函数中，便于维护和测试。
* **提高可读性** ：清晰的逻辑划分使得代码更易于理解。

## 创建 Composable

创建一个 composable 通常涉及以下几个步骤：

1. **定义一个函数** ：这个函数将包含你的逻辑。
2. **接受参数** ：如果需要，函数可以接收参数以适应不同的使用场景。
3. **返回值** ：返回响应式状态、函数或其他 composables。

### 示例：简单的计数器 composable

```javascript
import{ ref }from'vue';

exportfunctionuseCounter(initialValue =0){
  const count =ref(initialValue);
  constincrement=()=>{
    count.value++;
  };
  constdecrement=()=>{
    count.value--;
  };

  return{
    count,
    increment,
    decrement
  };
}
```


## 使用 Composable

在组件中使用 composable：


```html
<script setup>
import { useCounter } from './useCounter';

const { count, increment, decrement } = useCounter(10);
</script>

<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>
```


## 组合 Composables

你可以在一个组件中使用多个 composables，甚至可以将 composables 嵌套在其他 composables 中。

### 示例：组合多个 composables


```javascript
// useFeatureFlag.js
import{ ref }from'vue';

exportfunctionuseFeatureFlag(flagName){
  const flag =ref(false);
  // 假设的逻辑来设置特性标志
  flag.value=someCondition(flagName);
  return flag;
}

// useGreeting.js
import{ useFeatureFlag }from'./useFeatureFlag';

exportfunctionuseGreeting(name){
  const hasFeature =useFeatureFlag('greetingFeature');
  const greeting =ref('');

  constupdateGreeting=()=>{
    if(hasFeature.value){
      greeting.value=`Hello, ${name}! Welcome to the new feature.`;
    }else{
      greeting.value=`Hello, ${name}!`;
    }
  };

  updateGreeting();
  return greeting;
}
```


## 依赖注入

Composables 可以依赖于其他 composables，这样可以创建更复杂的逻辑。

## 测试 Composables

由于 composables 是纯函数，它们通常更容易测试。你可以使用 Vue Test Utils 和其他 JavaScript 测试库来测试 composables。

## 总结

Composables 提供了一种强大的方式来组织和管理 Vue 应用中的逻辑。通过将逻辑分解成可复用的函数，你可以提高代码的可维护性、可读性和可测试性。使用 composables，你可以构建更模块化和可扩展的 Vue 应用。
