<template>
  <component
    :is="component"
    :class="{ button: true, loading: loading }"
    :disabled="disabled"
    :action-key="actionKey"
    v-bind="attrs"
    @click="$emit('click', this)"
  >
    {{ text }}
  </component>
</template>
<script>

export default {
  props: {
    attrs: { type: Object, default: () => {} },
    component: {
      type: [String, Object],
      default: () => 'button'
    },
    disabled: { type: Boolean, default: false },
    actionKey: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    text: { type: String, default: '' }
  }
}
</script>
