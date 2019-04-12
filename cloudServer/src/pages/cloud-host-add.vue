<template>
  <div>
    <div :class="$style.nav">
      <h1 :class="$style.h1">新建云服务器</h1>
      <div>
        <el-button-group :class="[$style['btn-group'], $style.cities]">
          <!-- <el-button v-for="(city, index) in cities" :key="index" type="button" class='btn' @click="cearh">{{ city }}</el-button> -->
            <Cities :cities="cities" :value.sync="selectedRegion" @changeCity="changeCity" />
        </el-button-group>
      </div>
    </div>
    <div :class="$style.centor">
    <div :class="$style['box-remind']">
      <span>健康状态：</span>
      <el-button type="text">异常()</el-button>
      <el-button type="text">提醒()</el-button>
    </div>
    <div :class="$style.searh">
      <div></div>
      <div :class="$style['searh-width']">
      <el-input placeholder="请输入内容" v-model="searhValue" class="input-with-select">
       <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Cities from '../components/Cities'
  export default {
    name: "test2",
    components: {
      Cities,
    },
    data() {
      return {
        searhValue: '', // 搜索值
        selectedRegion: '',
        cities: [],
        selectedCity: {},
      }
    },
    watch: {
      // 监听城市变化----数据变化
      selectedRegion() {
        console.log('重新调取')
      },
    },
    methods: {
      changeCity(city) {
        console.log(city)
        this.selectedCity = city
      },
    }
  }
</script>
<style lang="scss" module>
.centor{width: 97%;margin-left: 1.5%;margin-right: 1.5%;}
.box-remind {
  height: 55px;
  line-height: 55px;
  background: #ffffff;
  margin-top: 30px;
  border: 1px solid #cccccc;
  -webkit-box-shadow: 0px 3px 3px #c8c8c8;
  -moz-box-shadow: 0px 3px 3px #c8c8c8;
  box-shadow: 0px 3px 3px #c8c8c8;
  span {
    font-size: 14px;
    padding-left: 20px;
  }
}
.nav {
  display: flex;
  .h1 {
    font-size: 22px;
  }
}
.cities {
  margin-left: 30px;
}
.box-auto {
  margin-top: 20px;
  border: 1px solid #cccccc;
  -webkit-box-shadow: 0px 3px 3px #c8c8c8;
  -moz-box-shadow: 0px 3px 3px #c8c8c8;
  box-shadow: 0px 3px 3px #c8c8c8;
}
.searh {
  margin-top: 30px;
  display: flex;
   justify-content: space-between;
  height: 30px;
  line-height: 30px;
  .searh-width{width: 30%;}
}
</style>
