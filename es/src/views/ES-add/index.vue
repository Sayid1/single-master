<template>
  <div>
    <div class='nav'>
      <h1>Elasticsearch Service</h1>
    </div>
    <div class="main-content">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="1.选择集群配置" name="first">
        <el-form ref="form" :model="form" label-width="180px" label-position="left" class="es-add-form">
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
          <el-form-item label="可用区">
            <el-radio-group>
              <el-radio-button label="广州二区"></el-radio-button>
              <el-radio-button label="广州三区"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="网络">
            <el-select v-model="value" placeholder="请选择">
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
            </el-select>&nbsp;
            <el-select v-model="value" placeholder="请选择">
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
            </el-select>
          </el-form-item>
          <el-form-item label="集群名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="版本">
            <el-radio-group>
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="节点机型">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="节点数量">
            <el-input>
              <el-button slot="prepend" icon="el-icon-plus"></el-button>
              <el-button slot="append" icon="el-icon-minus"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="节点存储类型">
            <el-select v-model="value" placeholder="请选择">
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
              <el-option :label="'鬼打架'" :value="'妈个鸡'" />
            </el-select>
          </el-form-item>
          <el-form-item label="节点数量">
            <div class="slider-wrap">
              <el-slider class="slider"
                :value="20"
                :max="2000"
                show-input>
              </el-slider>&nbsp;GB
            </div>
          </el-form-item>
          <el-form-item label="配置专用主节点">
            <el-checkbox label="开启"></el-checkbox>
          </el-form-item>
          <el-form-item label="Kibana用户名">
            elastic
          </el-form-item>
          <el-form-item label="Kibana密码">
            <el-input type="password" />
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" />
          </el-form-item>
          <el-form-item label="购买时长">
            <el-radio-group class="duration">
              <el-radio-button :label="1">1</el-radio-button>
              <el-radio-button :label="2">2</el-radio-button>
              <el-radio-button :label="3">3</el-radio-button>
              <el-radio-button :label="4">4</el-radio-button>
              <el-radio-button :label="5">5</el-radio-button>
              <el-radio-button class="sale" :label="6">6<span>88折</span></el-radio-button>
              <el-radio-button v-show="fulltime" class="sale" :label="7">7<span>88折</span></el-radio-button>
              <el-radio-button v-show="fulltime" class="sale" :label="8">8<span>88折</span></el-radio-button>
              <el-radio-button v-show="fulltime" class="sale" :label="9">9<span>88折</span></el-radio-button>
              <el-radio-button v-show="fulltime" class="sale" :label="10">10<span>88折</span></el-radio-button>
              <el-radio-button v-show="fulltime" class="sale" :label="11">11<span>88折</span></el-radio-button>
              <el-radio-button class="sale" :label="12">1年<span>83折</span></el-radio-button>
              <el-radio-button class="sale" :label="24">2年<span>7折</span></el-radio-button>
              <el-radio-button class="sale" :label="36">3年<span>5折</span></el-radio-button>
            </el-radio-group>
              <el-button type="text" @click.native="fulltime=true" v-show="!fulltime">&nbsp;其它时长</el-button>

            <div><el-checkbox label="账户余额足够时，设备到期后按月自动续费"></el-checkbox></div>
          </el-form-item>
          <div id="tag"></div>
          <div class="footer-fixed">
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
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>
<style lang="scss" scoped>
.nav {
  h1 {
    margin-left: 10%;
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
  .el-input {
    width: 300px !important;
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
   /deep/.el-radio-button__inner {
      width: 100% !important;
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
  left: calc(10% + -3px);
  right: calc(10% + 14px);
  padding-left: 50px;
  box-shadow: 0 -4px 4px -2px #e4e9f0;
  z-index: 99900;
}
</style>
