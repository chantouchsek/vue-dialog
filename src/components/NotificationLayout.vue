<template>
  <transition name="vue-dialog-notification-fade" @after-leave="onTransitionEnd">
    <div
      :class="['vue-dialog-notification', horizontalClass]"
      v-show="isActive"
      :style="getStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert"
    >
      <dialog-child v-bind="$options.propsData" ref="dialog" />
      <div
        class="vue-dialog-notification__closeBtn"
        v-if="showClose"
        @click.stop="close"
        v-html="'×'"
      />
    </div>
  </transition>
</template>

<script>
import Notifiable from '../mixins/notifiable'

export default {
  mixins: [Notifiable],
  props: {
    width: {
      type: Number,
      default: () => 500
    }
  },
  computed: {
    getStyle () {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`,
        'max-width': `${this.width}px`,
        'z-index': this.zIndex
      }
    }
  }
}
</script>

<style>
    .vue-dialog-notification {
    display: flex;
    box-sizing: border-box;
    position: fixed;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;
    overflow: hidden;
  }

  .vue-dialog-notification>div:first-child {
    width: 100%;
  }

  .vue-dialog-notification.right {
    right: 16px;
  }

  .vue-dialog-notification.left {
    left: 16px;
  }

  .vue-dialog-notification__closeBtn {
    position: absolute;
    top: 9px;
    right: 15px;
    cursor: pointer;
    color: #909399;
    font-size: 22px;
  }

  .vue-dialog-notification__closeBtn:hover {
    color:#606266;
  }

  .vue-dialog-notification-fade-enter.right{
    right: 0;
    transform: translateX(100%);
  }

  .vue-dialog-notification-fade-enter.left{
    left: 0;
    transform: translateX(-100%);
  }

  .vue-dialog-notification-fade-leave-active {
    opacity: 0;
  }

  @media screen and (max-width: 450px) {
    .vue-dialog-notification {
      left: 8px !important;
      right: 8px !important;
      max-width: inherit !important;
    }
  }
</style>
