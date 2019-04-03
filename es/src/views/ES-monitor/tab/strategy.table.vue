<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="策略名"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="策略类型"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="触发条件">
      </el-table-column>

       <el-table-column
        prop="address"
        label="最近修改">
      </el-table-column>

       <el-table-column
        prop="address"
        label="关联实例组">
      </el-table-column>

       <el-table-column
        prop="address"
        label="操作">
      </el-table-column>

    </el-table>
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
export default {
  data() {
    return {
      pageIndex: 1, // 当前页
      pageSize: 10, // 每页数
      totalPage: 0, // 表格数据数组长度
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    }
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
}
</script>
