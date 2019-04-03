  <template>
  <div class='box-table'>
    <el-table :data="tableData"
      style="width: 100%">

      <el-table-column prop="name">
      </el-table-column>

      <el-table-column prop="name"
        width="600">
        <template slot-scope="scope">
         <div class='echart'><echart></echart></div>
        </template>
      </el-table-column>

      <el-table-column prop="">
        <template slot-scope="scope">
          <p>{{scope.row.max}}</p>0

        </template>
      </el-table-column>

      <el-table-column prop="">
        <template slot-scope="scope">
          <p>{{scope.row.min}}</p>0

        </template>
      </el-table-column>

      <el-table-column prop="">
        <template slot-scope="scope">
          <p>{{scope.row.avg}}</p>0

        </template>
      </el-table-column>

      <el-table-column prop="">
        <template slot-scope="scope">
          <i class="el-icon-menu i-font"
            @click="dialogVisible = true"></i>
          <i class="el-icon-download i-font"></i>

        </template>
      </el-table-column>

    </el-table>
    <el-dialog title="集群健康状态"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
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
       <echart class="echart-wh"></echart>
    </el-dialog>
    <el-pagination @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"></el-pagination>
  </div>
</template>

<script>
import echart from './echarts';
export default {
  name: 'hello',
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
      dialogVisible: false,
      msg: 'Welcome to Your Vue.js App',
      pageIndex: 1, // 当前页
      pageSize: 10, // 每页数
      totalPage: 0, // 表格数据数组长度
      tableData: [
        {
          name: '集群健康状态',
          max: 'Max:',
          min: 'Min:',
          avg: 'Avg:',
        },
        {
          name: '集群健康状态',
          max: 'Max:',
          min: 'Min:',
          avg: 'Avg:',
        },
        {
          name: '集群健康状态',
          max: 'Max:',
          min: 'Min:',
          avg: 'Avg:',
        },
        {
          name: '集群健康状态',
          max: 'Max:',
          min: 'Min:',
          avg: 'Avg:',
        },
      ],
    };
  },
  components: { echart },
  mounted() {},
  methods: {
    sizeChangeHandle(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.getDataList();
    },
    handleClose(done) {
      done();
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/.echart-wh{width: 1200px;height: 500px;}
 .btn-style {
    margin-left: 20px;
    display: flex;
    line-height: 32px;
    .drop {
      margin-left: 500px;
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
.box-table {
  width: 100%;
}
/deep/.i-font {
  font-size: 36px;
}
</style>
