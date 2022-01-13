
<template>
  <el-select v-model="fieldValue" placeholder="请选择活动区域">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import common from '../../all-mixins/common'
import defaultVal from '../../all-mixins/default-val'
export default {
  name: 'XbbSelect',

  props: {
    options: Array
  },

  mixins: [common, defaultVal]

}
</script>