<template>
  <el-container class="page">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="160px">
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          router
          active-text-color="#ffd04b"
        >
          <el-submenu index="/student">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>管理菜单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/student">学生管理</el-menu-item>
              <el-menu-item index="/">课程管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}
.el-header {
  background-color: skyblue;
}
.el-aside {
  background-color: #545c64;
}
.el-submenu {
  width: 160px;
}
.el-submenu .el-menu-item {
  min-width: 160px;
}
.el-footer {
  background-color: slateblue;
}
</style>