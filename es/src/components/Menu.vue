<template>
  <div>
    <el-menu default-active="/es" background-color="#282b37" text-color="#fff" router class="el-menu-vertical" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <span>集群管理</span>
        </template>
        <el-menu-item index="/es">
          <span slot="title">集群列表</span>
        </el-menu-item>
        <el-menu-item index="/esmonitor">
          <span slot="title">集群监控</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    }
  },
}
</script>

<style scoped lang="scss">
.el-menu-item {
  color: #fff;
}
.el-menu-item:hover, .el-menu-item:focus {
  background: transparent;
}
.el-menu-vertical {
  border-right-color: #282b37;
  // background: #282b37;
}
.el-menu-item.is-active {
  color: #fff;
  background-color: #20222c !important;
}
</style>
