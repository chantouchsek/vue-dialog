<template>
  <span>
    <dialog-action
      v-for="action in actionlist"
      :key="action.key"
      v-bind="getActionProps(action)"
      :action-key="''+action.key"
      :loading="!passive && isActionInLoading(action)"
      :disabled="isActionDisabled(action) || (!passive && Boolean(loadingAction))"
      @click="onActionClick(action)"
    >
      {{ action.text }}
    </dialog-action>
  </span>
</template>
<script>
import Actionable from '../mixins/actionable'
import DialogAction from './DialogAction.vue'

export default {
  components: { DialogAction },
  mixins: [Actionable],
  props: {
    passive: { type: Boolean, default: false }
  },
  // computed: {
  //   nestedProps () {
  //     return []
  //   }
  // },
  methods: {
    getActionProps (action) {
      return {
        component: action.component || this.component,
        text: action.text
      }
      // this.nestedProps.forEach(key => {
      //   if (action[key] || this[key]) {
      //     res[key] = action[key] === undefined ? this[key] : action[key]
      //   }
      // })
      // return res
    }
  }
}
</script>
