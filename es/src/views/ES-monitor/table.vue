<template>
  <div>
    <el-table :data="tableData"
      style="width: 100%">
      <el-table-column prop=""
        label="ID名称" width="80">
        <template slot-scope="scope">
          <p class='a-color'>
            <router-link to="/details">{{scope.row.name}}</router-link>
          </p>
        </template>
      </el-table-column>
      <el-table-column prop="date"
        label="监控" width="80"> </el-table-column>
      <el-table-column prop="date"
        label="内网地址"> </el-table-column>
      <el-table-column prop="date"
        label="端口"> </el-table-column>
      <el-table-column prop="date"
        label="集群健康状态"> </el-table-column>
      <el-table-column prop="date"
        label="平均JVM内存使用率%"> </el-table-column>
      <el-table-column prop="date"
        label="最大JVM内存使用率%"> </el-table-column>
      <el-table-column prop="date"
        label="平均磁盘使用率%"> </el-table-column>
      <el-table-column prop="date"
        label="最大磁盘使用率%"> </el-table-column>
      <el-table-column prop="date"
        label="平均CPU使用率%"> </el-table-column>
      <el-table-column prop="date"
        label="最大CPU使用率%"> </el-table-column>
      <el-table-column prop="date"
        label="平均每秒写入次数count/s%"> </el-table-column>
      <el-table-column prop="date"
        label="平均每秒完成查询次数count/s%"> </el-table-column>
      <el-table-column prop="date"
        label="查询拒绝率%%"> </el-table-column>
      <el-table-column prop="date"
        label="健康状态"> </el-table-column>
      <el-table-column prop="date"
        label="告警策略数"> </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      pageIndex: 1, // 当前页
      pageSize: 10, // 每页数
      totalPage: 0, // 表格数据数组长度
    };
  },
  methods: {
    sizeChangeHandle(val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.pageIndex = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle(val) {
      console.log(`当前页: ${val}`)
      this.pageIndex = val
      this.getDataList()
    },
  },
};
</script>

<style scoped lang="scss">
a {
  color: blue;
}
</style>
