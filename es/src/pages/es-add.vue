<template>
  <div>
    <div :class='$style.nav'>
      <h1 :class="$style.h1">Elasticsearch Service</h1>
    </div>
    <div :class="$style['main-content']">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="1.选择集群配置" name="first">
        <el-form ref="form" label-width="180px" label-position="left" :class="$style['es-add-form']">
          <el-form-item label="计费模式">
            <el-radio-group>
              <el-radio-button label="包年包月"></el-radio-button>
              <el-radio-button label="按量计费"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="地域">
            <el-radio-group>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="成都"></el-radio-button>
              <el-radio-button label="香港"></el-radio-button>
              <el-radio-button label="硅谷"></el-radio-button>
              <el-radio-button label="多伦多"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <div id="tag"></div>
          <div :class="$style['footer-fixed']">
            <el-form-item label="费用">
              配置费用 3.93元/小时
            </el-form-item>
            <el-form-item label="">
              <el-button>下一步：确认配置信息</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="2.确认配置信息" name="second">2.确认配置信息</el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'es-add',
  data() {
    return {
      fulltime: false, // 显示全部购买时长
      activeName2: 'first',
      type: 1,
      checked: true
    };
  },
  mounted() {
    console.log(this.$style)
  }, 
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>
<style lang="scss" module>
.nav {
  .h1 {
    font-size: 22px;
  }
}
.main-content {
  width: 80%;
  background: #fff;
  margin: 10px auto;
  position: relative;
 .es-add-form {
   padding-left: 50px;
   margin-bottom: 150px;
  }
  .slider-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    .slider {
      flex: 1;
    }
  }
  .duration {
    & > label {
      width: 55px;
    }
  }
  .sale {
    position: relative;
    span {
      position: absolute;
      top: -6px;
      background: #ff7300;
      padding: 3px 10px;
      z-index: 99;
      right: 0;
      color: #fff;
      font-size: 10px;
    }
  }
}
.footer-fixed {
  position: fixed;
  bottom: 0;
  background: #fff;
  left: calc(10% + 200px);
  right: calc(10% + 14px);
  padding-left: 50px;
  box-shadow: 0 -4px 4px -2px #e4e9f0;
  z-index: 99900;
}
</style>
<style scoped lang="scss">

   /deep/.el-radio-button__inner {
      width: 100% !important;
    }
    
  .el-input {
    width: 300px !important;
  }
</style>

