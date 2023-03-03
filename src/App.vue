<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="250px">
        <div class="logo">
          <img src="./assets/logo.jpg" alt="">
        </div>
        <el-menu
          class="aside-menu"
          default-active="2"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(42, 49, 57)"
          text-color="rgb(179, 193, 183)"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>功能A</span>
            </template>
            <el-menu-item index="1-1">功能A1</el-menu-item>
            <el-menu-item index="1-2">功能A2</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Lock /></el-icon>
              <span>功能B</span>
            </template>
            <el-menu-item index="2-1">功能B1</el-menu-item>
            <el-menu-item index="2-2">功能B2</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3">
            <el-icon><setting /></el-icon>
            <span>功能A</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <ul>
            <li v-for="(item, index) in nvaList" :key="index">
              <img :src="item.src" alt="" />
            </li>
          </ul>
        </el-header>
        <el-main class="main">
          <div class="header-mbx">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="(item, index) in breadcrumbList"
                :key="index"
                >{{ item.name }}</el-breadcrumb-item
              >
            </el-breadcrumb>
            <h2>{{ route.meta.name }}</h2>
          </div>
          <routerView class="main-box"></routerView
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style></style>
<script>
export default {
  name: 'App',
  components: {},
}
</script>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
console.log(useRoute)
const route = reactive(useRoute())
const nvaList = reactive([
  {
    src: require('./assets/n1.jpg'),
  },
  {
    src: require('./assets/n2.jpg'),
  },
  {
    src: require('./assets/n3.jpg'),
  },
  {
    src: require('./assets/n4.jpg'),
  },
])
const breadcrumbList = reactive([
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/',
    name: '年度协议管理',
  },
  {
    path: '/',
    name: '二级商协议',
  },
  {
    path: '/',
    name: '新增二级商协议',
  },
])
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="less" scoped>
@headerH: 80px;
.header {
  height: @headerH;
  background: rgb(42, 46, 57);
  color: rgb(241, 215, 217);
  display: flex;
  align-items: center;
  padding: 0 0 0 50px;
  ul {
    display: flex;
    align-items: center;
    li {
      height: 40px;
      cursor: pointer;
      img {
        height: 100%;
        margin-right: 30px;
      }
    }
  }
}
.header-mbx {
  height: @headerH;
  padding: 10px 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  h2 {
    margin-top: 10px;
  }
}

.aside {
  background: rgb(42, 49, 57);
  height: 100vh;
  .logo {
    height: @headerH;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 165px;
    }
  }
  .aside-menu {
    padding: 0 0 0 15px;
  }
}
.main {
  height: calc(100vh - @headerH);
  background: rgb(245, 245, 245);
}
</style>
