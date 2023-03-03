<template>
  <el-divider class="divider" content-position="center" border-style="dashed"
    ><p>
      <i>{{ props.index }}</i>
      <span>{{ props.title }}</span>
    </p></el-divider
  >
</template>
<script>
export default {
  name: 'divider',
}
</script>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
  },
  index:{
    type: String,
  }
})
console.log(props)
</script>
<style lang="less" scoped>
.divider {
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(245, 245, 245);
    padding: 0 20px;
    i {
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(77, 140, 254);
      border-radius: 50%;
      color: #fff;
      padding: 1px;
      margin-right: 10px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
