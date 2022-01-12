
<template>
  <el-select v-model="value" placeholder="请选择活动区域">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'XbbSelect',

  props: {
    options: Array
  },

  data () {
    return {
      value: ''
    }
  }

}
</script>