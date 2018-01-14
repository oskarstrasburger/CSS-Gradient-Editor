<template>
  <div id="app" class="app">
    <el-container>
      <el-header><h1>CSS Gradient Sketeton Loaders editor</h1></el-header>
      <el-container>
        <el-aside width="300px">
          <SideMenu />
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>&copy; 2018 by <a href="https://github.com/oskarstrasburger">github.com/oskarstrasburger</a></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import VueRouter from 'vue-router';

import HomePage from '@/containers/HomePage';
import SkeletonPage from '@/containers/SkeletonPage';

import SideMenu from '@/components/SideMenu';

const routes = [
  { path: '/', component: HomePage },
  { path: '/skeleton', component: SkeletonPage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default {
  name: 'app',
  router,
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    * {
      box-sizing: border-box;
    }
  }

  .app {
    display: flex;
    min-height: 100vh;
  }

  .el-main {
    padding: 0 20px;
  }

  .el-header {
    background: #409EFF;
    color: #fff;
    text-align: center;
  }

  .el-footer {
    background: #f8f8f8;
    color: rgb(129, 129, 129);
    text-align: center;
    line-height: 60px;
    font-size: 11px;

    a {
      color: #409EFF;
    }
  }

</style>
