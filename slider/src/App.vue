<template>
  <div id="slider">
   <el-menu
      :default-active="active"
      :class="$style['el-menu-vertical-demo']"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>ES集群管理</span>
        </template>
        <el-menu-item index="es/es">
         <a href="javascript:void(0);" @click="to('es/es')">集群列表</a>
        </el-menu-item>
        <el-menu-item index="es/esmonitor">
         <a href="javascript:void(0);" @click="to('es/esmonitor')">云监控</a>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>云服务器</span>
        </template>
        <el-menu-item index="cloudServer/cloud-host">
         <a href="javascript:void(0);" @click="to('cloudServer/cloud-host')">云主机</a>
        </el-menu-item>
        <el-menu-item index="cloudServer/mirror-image"><a href="javascript:void(0);" @click="to('cloudServer/mirror-image')">镜像</a></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { navigateToUrl } from 'single-spa'
export default {
  name: 'app',
  data() {
    return {
      active: window.location.hash ? window.location.hash.replace('#/', '') : 'es/es'
    }
  },
  mounted() {
    if (!window.location.hash)
      this.to(this.active)
  },
  methods: {
    to(url) {
      navigateToUrl(`/#/${url}`)
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style module>
#slider {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-menu-vertical-demo {
  width: 100%;
  border: none;
}
</style>
<style scoped>
  a {
    display: inline-block;
    width: 100%;
    color: inherit;
  }

</style>
