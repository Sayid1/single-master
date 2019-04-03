<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header">
        <div class="navbar-header">
          <ul class='nav-left'>
            <a href="#">
            <img src="./assets/logo.1.png" alt="" class='logo-x'>
            </a>
          </ul>
          <ul class='nav-center'>
            <a href="#"><li>产品中心</li></a>
            <a href="#"><li>合作伙伴</li></a>
            <a href="#"><li>客户案例</li></a>
            <a href="#"><li>帮助中心</li></a>
          </ul>
        </div>
        <ul class='rightbox'>
          <a href="#"><li>控制台</li></a>
          <a href="#"><li>用户名</li></a>
        </ul>
      </el-header>
      <el-container class="container">
        <el-aside class="aside" :width="200" v-show="aside">
          <es-menu />
        </el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
      <el-footer v-show="footer">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import EsMenu from '@/components/Menu'
import { mapGetters } from 'vuex'

export default {
  components: {
    EsMenu,
  },
  computed: {
    ...mapGetters([
      'aside',
      'footer',
    ]),
  },
}
</script>
<style lang="scss" >
*{
  margin: 0;padding: 0;
  border: none;
  text-decoration:none;
  list-style: none;
}
html, body, #app {
  height: 100%;
}
#app {
  display: flex;
  & > div {
    flex: 1
  }
}
.container {
  height: 100%;
}
.header {
  padding-left: 40px !important;
  background-color: #282b37;
  color: #fff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  li{
    display: block;
    width: 104px;
    text-align: center
  }
  li:hover{
    background: rgba($color: #ffffff, $alpha: 0.3)
  }
  .navbar-header {
    display: flex;
  }
  .nav-left{
    width: 330px;
    display: flex;
    .logo-x{
      width: 140px;
    }
  }
  .nav-center{
    display: flex;
    a{color: #fff}
  }
  .nav-right{
    width: 20%;
      display: flex;
  }
  .rightbox{
    display: flex;
    a {
      color: #fff;
    }
  }
}
.aside {
  width: 200px;
  background-color: #282b37;
  color: #333;
  text-align: center;
}
.main {
  background-color:  #f2f2f2 !important;
  color: #333;
  height: 100%;
  padding: 0 !important;
  & > div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
}

.actions {
  margin: 20px 0 15px 0;
  .el-input {
    width: 300px !important;
  }
}

.toggle {
  margin-left: 30px;
  height: 30px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.nav{
  width: 100%;
  line-height: 60px;
  background: #ffffff;
  display: flex;

  h1{
    font-size: 16px;
    padding-left: 20px !important;
  }
}
</style>
