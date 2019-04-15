<template>
  <div class='es'>
    klnll
    <div :class="$style.nav">
      <h1 :class="$style.h1">集群列表</h1>
    </div>
    <div class="main-content">
      <Cities :cities="cities" />
      <div class="actions">
        <el-row type="flex" justify="space-between" align="middle">
          <router-link to="es-add"><el-button size="small" type="primary">新建</el-button></router-link>
          {{user}}
          <div :class="$style.searh">
            <el-input placeholder="请输入实例名、实例ID">
              <el-button slot="append" icon="el-icon-search" @click="xhr">xhr</el-button>
            </el-input>
          </div>
        </el-row>
        <el-table></el-table>
      </div>
    </div>
  </div>
</template>

<script>
import Cities from '../components/Cities'
import { axiosInstance } from 'utils!sofe'

export default {
  data() {
    return {
      ...this.mapState('user'),
      cities: ['北京', '上海', '深圳', '广州'],
      a: 1,
    }
  },
  components: {
    Cities,
  },
  mounted() {
  },
  methods: {
    xhr() {
      axiosInstance.get('test')
    }
  }
}
</script>
<style lang="scss" module>
.nav{
  width: 100%;
  line-height: 60px;
  background: #ffffff;
  display: flex;

  .h1{
    font-size: 16px;
    padding-left: 20px !important;
  }
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

