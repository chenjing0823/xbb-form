
<template>
  <el-input
    v-model="fieldValue">
  </el-input>
</template>

<script>
import common from '../../all-mixins/common'
import defaultVal from '../../all-mixins/default-val'
export default {
  name: 'XbbInput',

  mixins: [common, defaultVal]

}
</script>