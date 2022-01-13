## Install

```
$ npm i --save @saiyanjing/xbb-form
```


## Quick Start

在 `main.js` 引入相关依赖

> 前置条件 安装 引入 element-ui

```js
import Vue from 'vue'
import XbbForm from '@saiyanjing/xbb-form'

Vue.use(XbbForm)

```

> vue文件中使用


```vue
<template>
  <Xbb-form
    :fieldList="fieldList">
  </Xbb-form>
</template>

<script>
  export default {
    data() {
      return {
        fieldList: [
          { attr: 'text_1', label: '客户名称', fieldType: 1 },
          { attr: 'text_2', label: '地址', fieldType: 1 },
          { attr: 'text_3', label: '是否潜在客户', fieldType: 2, options: [{ value: 1, label: '是' }, { value: 2, label: '否' }] }
        ]
      }
    }
  }
</script>
```

> or
```vue
<template>
  <div>
    <Xbb-input></Xbb-input>
    <Xbb-input></Xbb-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
```