<template>
  <el-menu
    default-active="1">
    <router-link to="/" tag="span">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>Basic editor</span>
      </el-menu-item>
    </router-link>
    <router-link to="/skeleton" tag="span">
      <el-menu-item index="2">
        <i class="el-icon-tickets"></i>
        <span>Skeleton loader generator</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class SideMenu extends Vue { }
</script>

<style scope>
  .el-menu {
    height: 100%;
  }
</style>

