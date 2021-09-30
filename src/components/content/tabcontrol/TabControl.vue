<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item" :class="{ active: index === currentIndex }" :click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center; /*文字居中*/
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1; /*和display一起使用可以平分占据空间*/
  }

  /*这个其实也可以写在.active span下，但是写在这个下就只有选择这个页签才会有距离，对于不变的还是写成下面这样固定的好*/
  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
