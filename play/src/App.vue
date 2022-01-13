<template>
  <div id="app">
    <XbbForm
      :field-list="fieldList"
      >
    </XbbForm>
    <xbb-input v-model="value"></xbb-input>
  </div>
</template>

<script>
// import XbbForm from '../../packages/xbb-form/packages/form-data'
// import XbbInput from '../../packages/xbb-form/packages/xbb-input'

export default {
  name: 'App',
  components: {
    // XbbForm,
    // XbbInput
  },
  data () {
    return {
      data: {},
      fieldList: [
        { attr: 'text_1', fieldType: 1, defaultAttr: {}, label: '客户名称' },
        { attr: 'text_2', fieldType: 1, defaultAttr: { rely: 'text_1' }, label: '地址' },
        { attr: 'text_3', fieldType: 2, defaultAttr: {}, label: '是否潜在客户', options: [{ value: 1, label: '是' }, { value: 2, label: '否' }] },
        { attr: 'text_4', fieldType: 1, defaultAttr: { rely: 'text_3' }, label: '关联字段' }
      ],
      value: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
