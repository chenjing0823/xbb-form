
<template>
  <el-form :label-position="labelPosition" :label-width="labelWidth">
    <el-form-item v-for="field in fieldList" :key="field.attr" :label="field.label">
      <component :is="getComponent(field.fieldType)"
        :options="field.options"
      >
      </component>
    </el-form-item>
  </el-form>
</template>

<script>
import fieldMixin from './mixin'
export default {
  name: 'XbbForm',

  props: {
    fieldList: Array,

    formData: Object,

    labelPosition: {
      type: String,
      default: 'left'
    },
    labelWidth: {
      type: String,
      default: '100px'
    }

  },
  mixins: [fieldMixin],

}
</script>
