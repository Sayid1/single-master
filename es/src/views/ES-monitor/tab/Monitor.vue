<template>
  <div class='Monitor'>
    <div class='box-dis'>
      <div class='btn-style'>
        <el-row>
          <el-button-group>
            <el-button size="small">实时</el-button>
            <el-button size="small">近24小时</el-button>
            <el-button size="small">近7天</el-button>
            <el-button size="small">选择日期</el-button>
          </el-button-group>
          <el-button size="small">数据对比</el-button>
        </el-row>
        <div class="drop">
          <span>时间粒度:</span>
          <el-select v-model="value"
            placeholder="请选择"
            size="small">
            <el-option v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <p><a href="#">刷新</a></p>
    </div>
    <div class='box-dis p-style'>
      <p><i class="el-icon-info"></i>注释：Max、Min和Avg数值统计为当前折线图内所有点的最大值、最小值和平均值</p>
      <p>
        <el-button type="text">导出数据</el-button>
      </p>
    </div>
    <Table></Table>
  </div>
</template>

<script>
import Table from './Monitor-table';
export default {
  data() {
    return {
      options: [
        {
          value: '',
          label: '1分钟',
        },
        {
          value: '5分钟',
          label: '5分钟',
        },
      ],
      value: '',
    };
  },
  components: {
    Table,
  },
};
</script>

<style  scoped lang="scss">
.Monitor {
  height: 1800px;
  background: #ffffff;
  margin-top: 20px;
  border: 1px solid #cccccc;
  -webkit-box-shadow: 0px 3px 3px #c8c8c8;
  -moz-box-shadow: 0px 3px 3px #c8c8c8;
  box-shadow: 0px 3px 3px #c8c8c8;
}
.box-dis {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  .btn-style {
    margin-left: 20px;
    display: flex;
    line-height: 32px;
    .drop {
      margin-left: 30px;
      span {
        color: #cccccc;
        font-size: 10px;
      }
      /deep/.el-input {
        width: 100px !important;
        border: none;
      }
    }
  }
  p:nth-child(1) {
    color: #ccc;
    font-size: 14px;
    margin-left: 30px;
  }
  p:nth-child(2) {
    margin-right: 20px;
  }
}
</style>
