<template>
  <div id="app">
    <XbbForm :fieldList="fieldList"></XbbForm>
    <xbb-input></xbb-input>
  </div>
</template>

<script>
// import XbbForm from '../../packages/xbb-form/packages/form-data'

export default {
  name: 'App',
  components: {
    // XbbForm
  },
  data () {
    return {
      fieldList: [
        { attr: 'text_1', label: '客户名称', fieldType: 1 },
        { attr: 'text_2', label: '地址', fieldType: 1 },
        { attr: 'text_3', label: '是否潜在客户', fieldType: 2, options: [{ value: 1, label: '是' }, { value: 2, label: '否' }] }
      ]
    }
  },
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
