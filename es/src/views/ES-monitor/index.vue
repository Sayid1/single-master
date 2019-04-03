<template>
  <div>
    <div class='nav'>
      <h1>集群监控</h1>
       <div>
    <el-button-group class="btn-group cities">
      <el-button v-for="(city, index) in cities" :key="index" type="button" class='btn' @click="cearh">{{ city }}</el-button>
    </el-button-group>
  </div>
    </div>
    <div class='centor'>
    <div class='box-remind'>
      <span>健康状态：</span>
      <el-button type="text">异常()</el-button>
      <el-button type="text">提醒()</el-button>
    </div>
    <div class='searh'>
      <div></div>
      <div class='searh-width'>
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
       <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      </div>
    </div>
    <div class='box-auto table'>
      <Table></Table>
    </div>
  </div>
  </div>
</template>

<script>
import Table from '@/views/ES-monitor/table';
export default {
  data() {
    return {
      input5: '',
      select: '',
      cities: ['北京', '上海', '深圳', '广州'],
    };
  },
  components: {
    Table,
  },
  methods: {
    cearh() {
      console.log('******')
      for (let i = 0; i < this.cities.length; i++) {
        if (i == 1) {
          console.log(this.cities[i])
        }
      }
    },
  },
};
</script>

<style  scoped lang="scss">
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
