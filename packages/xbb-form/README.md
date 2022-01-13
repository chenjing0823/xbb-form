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
          { attr: 'text_1', fieldType: 1, defaultAttr: {}, label: '客户名称' },
          { attr: 'text_2', fieldType: 1, defaultAttr: { rely: 'text_1' }, label: '地址' },
          { attr: 'text_3', fieldType: 2, defaultAttr: {}, label: '是否潜在客户', options: [{ value: 1, label: '是' }, { value: 2, label: '否' }] },
          { attr: 'text_4', fieldType: 1, defaultAttr: { rely: 'text_3' }, label: '关联字段' }
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
    <Xbb-input v-model="value"></Xbb-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
```